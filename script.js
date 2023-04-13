// Obtener el elemento canvas y el contexto 2D para el gráfico de APY
const apyChart = document.getElementById('apy-chart');
const apyCtx = apyChart.getContext('2d');

// Configurar los datos y opciones iniciales del gráfico de APY
const apyData = {
  labels: [],
  datasets: [{
    label: 'APY',
    data: [],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }]
};

const apyOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

// Obtener los datos del APY de Coingecko utilizando su API para Cardano
fetch('https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd&include_24hr_change=true')
  .then(response => response.json())
  .then(dataResponse => {
    // Crear un nuevo objeto con los datos necesarios para Cardano
    const cardanoData = {
      labels: ['USD'],
      datasets: [{
        label: 'APY de Cardano',
        data: [dataResponse.cardano.usd_24h_change],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };

    // Actualizar los datos del gráfico de APY con los datos de Cardano
    apyData.labels = cardanoData.labels;
    apyData.datasets.push(cardanoData.datasets[0]);

    // Crear y mostrar el gráfico de APY actualizado
    new Chart(apyCtx, {
      type: 'bar',
      data: apyData,
      options: apyOptions
    });
  });

// Obtener el elemento canvas y el contexto 2D para el gráfico de precio y volumen
const priceChart = document.getElementById('price-chart');
const priceCtx = priceChart.getContext('2d');

// Configurar los datos y opciones iniciales del gráfico de precio y volumen
const priceData = {
  labels: [],
  datasets: [{
    label: 'Precio',
    data: [],
    yAxisID: 'precio',
    type: 'line',
    fill: false,
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }, {
    label: 'Volumen',
    data: [],
    yAxisID: 'volumen',
    type: 'bar',
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

const priceOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      type: 'time',
      time: {
        unit: 'hour'
      }
    }],
    yAxes: [{
      id: 'precio',
      position: 'left',
      ticks: {
        beginAtZero: true
      }
    }, {
      id: 'volumen',
      position: 'right',
      ticks: {
