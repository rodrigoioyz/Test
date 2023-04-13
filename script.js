
// Obtener el elemento canvas y el contexto 2D
const apyChart = document.getElementById('apy-chart');
const apyCtx = apyChart.getContext('2d');

// Configurar los datos del gráfico
const data = {
  labels: [], // las etiquetas se agregarán después
  datasets: [{
    label: 'APY',
    data: [], // los datos se agregarán después
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }]
};

// Configurar las opciones del gráfico
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

// Obtener los datos del APY de Coingecko utilizando su API
fetch('https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd&include_24hr_change=true')
  .then(response => response.json())
  .then(dataResponse => {
    // Crear un nuevo objeto con los datos necesarios
    const newData = {
      labels: ['USD'],
      datasets: [{
        label: 'APY',
        data: [dataResponse.cardano.usd_24h_change],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };
    
    // Actualizar el objeto "data" con los nuevos datos
    data.labels = newData.labels;
    data.datasets[0].data = newData.datasets[0].data;
    
    // Crear el gráfico utilizando Chart.js
    const apyLineChart = new Chart(apyCtx, {
      type: 'line',
      data: data,
      options: options
    });
  })
  .catch(error => console.error(error));
