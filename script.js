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
    const newData = {
      labels: ['USD'],
      datasets: [{
        label: 'APY de Cardano',
        data: [dataResponse.cardano.usd_24h_change],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };

    // Actualizar el objeto "data" con los nuevos datos para Cardano
    data.labels = newData.labels;
    data.datasets.push(newData.datasets[0]);

    // Actualizar el gráfico con los nuevos datos para Cardano
    new Chart(apyCtx, {
      type: 'bar',
      data: data,
      options: options
    });
  });

// Obtener los datos del precio de Bitcoin utilizando la API de CoinGecko
fetch('https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false')
  .then(response => response.json())
  .then(dataResponse => {
    // Obtener el precio actual de Bitcoin en dólares
    const btcPrice = dataResponse.market_data.current_price.usd;

    // Actualizar el contenido HTML para mostrar el precio de Bitcoin
    document.getElementById('btc-price').innerHTML = '$' + btcPrice.toFixed(2);
  });
