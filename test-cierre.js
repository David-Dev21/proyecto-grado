// Test simple para verificar el endpoint de cierre de alertas
const testData = {
  id_alerta: 1,
  id_funcionario: "test-uuid",
  fecha_hora: new Date().toISOString(),
  comentario: "Test de cierre de alerta",
  tipo_alerta: "VIOLENCIA",
  estado_victima: "Estable",
  nombre_agresor: "Test Agresor",
  ci_agresor: "12345678"
};

fetch('http://localhost:3001/cierre-alertas', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData),
})
.then(response => {
  console.log('Status:', response.status);
  console.log('Headers:', response.headers);
  return response.text();
})
.then(data => {
  console.log('Response body:', data);
  try {
    const json = JSON.parse(data);
    console.log('Parsed JSON:', json);
  } catch (e) {
    console.log('Not valid JSON');
  }
})
.catch(error => {
  console.error('Error:', error);
});
