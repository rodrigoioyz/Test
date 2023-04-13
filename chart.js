// Obtener el elemento canvas y el contexto 2D
const myChart = document.getElementById('myChart');
const ctx = myChart.getContext('2d');

// Configurar los datos del gráfico
const data = {
  labels: [], // las etiquetas se agregarán después
  datasets: [{
    label: 'Precio',
    data: [], // los datos se agregarán después
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }, {
    label: 'Volumen',
    data: [], // los datos se agregarán después
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

// Configurar las opciones del gráfico
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      type: 'time',
      time: {
        unit: 'day'
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

// Obtener los datos del precio y volumen utilizando la API de Coingecko
fetch('https://api.coingecko.com/api/v3/coins/cardano/market_chart?vs_currency=usd&days=max&interval=30min')
  .then(response => response.json())
  .then(dataResponse => {
    // Crear un array de objetos con los datos necesarios
    const chartData = {
      prices: [],
      volumes: []
    };

    for (let i = 0; i < dataResponse.prices.length; i++) {
      chartData.prices.push({
        x: dataResponse.prices[i][0],
        y: dataResponse.prices[i][1]
      });

      chartData.volumes.push({
        x: dataResponse.prices[i][0],
        y: dataResponse.total_volumes[i][1]
      });
    }

    // Actualizar el objeto "data" con los nuevos datos
    data.labels = chartData.prices.map(d => d.x);
    data.datasets[0].data = chartData.prices.map(d => d.y);
    data.datasets[1].data = chartData.volumes.map(d => d.y);

    // Crear el gráfico
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
