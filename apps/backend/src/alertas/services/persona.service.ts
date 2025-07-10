import { Injectable, Logger, Inject } from '@nestjs/common';
import { PersonaRepository } from '../interfaces/persona-repository.interface';
import { ContactoRepository } from '../interfaces/contacto-repository.interface';
import { CreateAlertaDto } from '../dto/create-alerta.dto';
import { PersonaRepositoryToken, ContactoRepositoryToken } from '../../constants/injection-tokens';

@Injectable()
export class PersonaService {
  private readonly logger = new Logger(PersonaService.name);

  constructor(
    @Inject(PersonaRepositoryToken) private personaRepository: PersonaRepository,
    @Inject(ContactoRepositoryToken) private contactoRepository: ContactoRepository,
  ) {}

  async createOrUpdatePersona(createAlertaDto: CreateAlertaDto) {
    let persona = await this.personaRepository.findByCi(createAlertaDto.persona.cedulaIdentidad);

    if (!persona) {
      persona = await this.personaRepository.create({
        nombres: createAlertaDto.persona.nombre,
        ap_paterno: '', // Se puede extraer del nombre completo si es necesario
        ap_materno: '', // Se puede extraer del nombre completo si es necesario
        ci: createAlertaDto.persona.cedulaIdentidad,
        fecha_nac: new Date(createAlertaDto.persona.fechaNacimiento),
        celular: createAlertaDto.contacto.celular,
        correo: createAlertaDto.contacto.correo,
        empresa_telefonica: 'No especificada', // Valor por defecto
      });
    } else {
      persona = await this.personaRepository.update(persona.id, {
        nombres: createAlertaDto.persona.nombre,
        fecha_nac: new Date(createAlertaDto.persona.fechaNacimiento),
        celular: createAlertaDto.contacto.celular,
        correo: createAlertaDto.contacto.correo,
      });
    }

    return persona;
  }

  async processContactosAdicionales(personaId: bigint, contactos: any[]) {
    if (!contactos || contactos.length === 0) return;

    const contactosExistentes = await this.contactoRepository.findByPersonaId(personaId);

    for (const contactoDto of contactos) {
      const contactoExistente = contactosExistentes.find((c) => c.celular === contactoDto.celular);

      if (contactoExistente) {
        await this.contactoRepository.update(contactoExistente.id, {
          nombre: contactoDto.nombre,
          relacion: contactoDto.relacion,
        });
        this.logger.log(`Contacto actualizado para persona ${personaId}: ${contactoDto.nombre}`);
      } else {
        await this.contactoRepository.create({
          id_persona: personaId,
          nombre: contactoDto.nombre,
          relacion: contactoDto.relacion,
          celular: contactoDto.celular,
        });
        this.logger.log(`Nuevo contacto ref creado para persona ${personaId}: ${contactoDto.nombre}`);
      }
    }
  }
}
