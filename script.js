document.getElementById('formSeguro').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obteniendo datos del cliente
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const genero = document.getElementById('genero').value;
    const estadoCivil = document.getElementById('estadoCivil').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const historialSeguro = document.getElementById('historialSeguro').value;

    // Obteniendo detalles del vehículo
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const anio = parseInt(document.getElementById('anio').value);
    const valorMercado = parseInt(document.getElementById('valorMercado').value);
    const kilometraje = parseInt(document.getElementById('kilometraje').value);
    const historialAccidentes = document.getElementById('historialAccidentes').value;

    // Obteniendo tipo de cobertura seleccionado
    const tipoCobertura = document.getElementById('tipoCobertura').value;

    // Realizando cálculo del precio del seguro (simulado)
    let precioSeguro = 0;
    if (tipoCobertura === 'terceros') {
        precioSeguro = valorMercado * 0.05;
    } else if (tipoCobertura === 'tercerosAmpliado') {
        precioSeguro = valorMercado * 0.08;
    } else if (tipoCobertura === 'todoRiesgo') {
        precioSeguro = valorMercado * 0.12;
    }

    // Mostrando resultado al cliente
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
        <p>Estimado(a) ${nombre}, basado en los datos proporcionados, el precio estimado de su seguro es de $${precioSeguro.toFixed(2)}.</p>
    `;
});