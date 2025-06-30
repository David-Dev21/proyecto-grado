#!/usr/bin/env node

// Script para probar el sistema de alertas en tiempo real
// Uso: node test-alert.js

const API_URL = 'http://localhost:3001';

function generateRandomUUID() {
  // Generar un UUID v4 válido
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function generateRandomAlert() {
  const nombres = ['Juan Pérez', 'María García', 'Carlos López', 'Ana Rodríguez', 'Luis Martínez'];
  const telefonos = ['+59171234567', '+59172345678', '+59173456789', '+59174567890', '+59175678901'];
  
  const randomName = nombres[Math.floor(Math.random() * nombres.length)];
  const randomPhone = telefonos[Math.floor(Math.random() * telefonos.length)];
  
  return {
    IdAlerta: generateRandomUUID(),
    persona: {
      nombre: randomName,
      cedulaIdentidad: Math.floor(Math.random() * 99999999).toString().padStart(8, '0'),
      fechaNacimiento: "1990-01-01"
    },
    contacto: {
      celular: randomPhone,
      correo: `${randomName.toLowerCase().replace(' ', '.')}@ejemplo.com`
    },
    fechaRegistro: new Date().toISOString(),
    contactos: [
      {
        nombre: "Contacto de Emergencia",
        relacion: "Familiar",
        celular: "+59176789012"
      }
    ]
  };
}

async function sendAlert(alertData) {
  try {
    console.log('🚨 Enviando alerta de prueba...');
    console.log('📋 Datos:', JSON.stringify(alertData, null, 2));
    
    const response = await fetch(`${API_URL}/alertas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(alertData)
    });

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Alerta enviada exitosamente!');
      console.log('📄 Respuesta:', result);
      console.log('\n🖥️  Verifica el frontend en: http://localhost:3000/monitoreo/alertas');
      console.log('👀 Deberías ver:');
      console.log('   1. Notificación naranja (procesando)');
      console.log('   2. Modal de alerta completa (después de ~1 segundo)');
    } else {
      console.error('❌ Error al enviar alerta:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('📄 Detalle del error:', errorText);
    }
  } catch (error) {
    console.error('🔥 Error de conexión:', error.message);
    console.log('\n🔍 Verifica que:');
    console.log('   - El backend esté corriendo en http://localhost:3001');
    console.log('   - pnpm dev esté activo');
  }
}

async function testMultipleAlerts() {
  console.log('🎯 Enviando múltiples alertas de prueba...\n');
  
  for (let i = 1; i <= 3; i++) {
    console.log(`--- ALERTA ${i} ---`);
    await sendAlert(generateRandomAlert());
    console.log('\n⏱️  Esperando 3 segundos antes de la siguiente alerta...\n');
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
}

// Función principal
async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--multiple')) {
    await testMultipleAlerts();
  } else {
    await sendAlert(generateRandomAlert());
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { sendAlert, generateRandomAlert };
