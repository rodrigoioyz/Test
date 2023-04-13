
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

// Obtener el elemento donde se mostrará el precio de BTC
const btcPriceElement = document.getElementById('btc-price');

// Obtener el precio actual de BTC utilizando la API de Coingecko
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  .then(response => response.json())
  .then(data => {
    // Mostrar el precio de BTC en el elemento correspondiente
    btcPriceElement.innerText = `$${data.bitcoin.usd}`;
  })
  .catch(error => console.error(error));

// Crear un gráfico de barras con datos de ejemplo
const dataBar = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
  datasets: [{
    label: 'Ventas',
    data: [12, 19, 3, 5, 2],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

const optionsBar = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
