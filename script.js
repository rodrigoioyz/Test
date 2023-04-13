<!-- Incluye la librería TradingView -->
<script src="https://s3.tradingview.com/tv.js"></script>

<!-- Crea un div para el gráfico de BTC -->
<div id="btc-chart"></div>

<!-- Crea un div para el gráfico de Cardano -->
<div id="cardano-chart"></div>

<!-- Crea un div para el selector de temporalidad -->
<div id="timeframe-selector"></div>

<!-- Crea un div para el selector de tipo de velas -->
<div id="chart-type-selector"></div>

<!-- Crea un div para el indicador de volumen -->
<div id="volume-indicator"></div>

<!-- Agrega el script para crear los gráficos -->
<script>
  const btcChart = new TradingView.widget(
    {
      "width": 980,
      "height": 610,
      "symbol": "COINBASE:BTCUSD",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "container_id": "btc-chart"
    }
  );

  const cardanoChart = new TradingView.widget(
    {
      "width": 980,
      "height": 610,
      "symbol": "BINANCE:ADAUSDT",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "container_id": "cardano-chart"
    }
  );

  const timeframeSelector = new TradingView.widget.selectors.Timeframe(
    {
      "container_id": "timeframe-selector",
      "datafeed": new Datafeeds.UDFCompatibleDatafeed("https://demo_feed.tradingview.com"),
      "input_id": "timeframe-input",
      "button_id": "timeframe-button",
      "timeframes": [
        { "text": "1H", "resolution": "60" },
        { "text": "1D", "resolution": "D" },
        { "text": "1W", "resolution": "W" },
        { "text": "1M", "resolution": "M" },
        { "text": "1Y", "resolution": "12M" }
      ]
    }
  );

  const chartTypeSelector = new TradingView.widget.selectors.Type(
    {
      "container_id": "chart-type-selector",
      "datafeed": new Datafeeds.UDFCompatibleDatafeed("https://demo_feed.tradingview.com"),
      "input_id": "chart-type-input",
      "button_id": "chart-type-button",
      "types": [
        { "text": "Candlesticks", "value": "1" },
        { "text": "Line", "value": "3" },
        { "text": "Bars", "value": "2" }
      ]
    }
  );

  const volumeIndicator = new TradingView.widget(
    {
      "container_id": "volume-indicator",
      "datafeed": new Datafeeds.UDFCompatibleDatafeed("https://demo_feed.tradingview.com"),
      "library_path": "https://s3.tradingview.com/external
