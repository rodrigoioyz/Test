<!DOCTYPE html>
<html>
<head>
  <title>Gráfico TradingView</title>
  <meta charset="UTF-8">
  <script src="https://unpkg.com/lightweight-charts@3.1.1/dist/lightweight-charts.standalone.production.js"></script>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
</head>
<body>
  <div id="tv_chart"></div>
  <script>
    const chart = LightweightCharts.createChart(document.getElementById('tv_chart'), {
      width: 600,
      height: 300
    });

    const btcSeries = chart.addCandlestickSeries({
      title: 'BTC',
      priceFormat: {
        type: 'volume',
      },
    });

    const adaSeries = chart.addCandlestickSeries({
      title: 'ADA',
      priceFormat: {
        type: 'volume',
      },
    });

    const fetchChartData = (symbol) => {
      return fetch(`https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=usd&days=max&interval=daily`)
        .then(response => response.json())
        .then(data => {
          return data.prices.map(price => ({
            time: price[0] / 1000, // la API de CoinGecko proporciona la fecha en milisegundos
            open: price[1],
            high: price[2],
            low: price[3],
            close: price[4],
          }));
        });
    };

    Promise.all([fetchChartData('bitcoin'), fetchChartData('cardano')])
      .then(([btcData, adaData]) => {
        btcSeries.setData(btcData);
        adaSeries.setData(adaData);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });

    new TradingView.widget(
      {
        "width": 980,
        "height": 610,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tv_chart_container"
      }
    );
  </script>
  <div id="tv_chart_container"></div>
</body>
</html>
