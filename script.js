<!-- Incluye la librería de TradingView -->
<script src="https://s3.tradingview.com/tv.js"></script>

<!-- Incluye la librería de jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- Incluye la librería de lodash -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>

<!-- Crea un div para el gráfico de BTC -->
<div id="btc-chart"></div>

<!-- Crea un div para el gráfico de Cardano -->
<div id="cardano-chart"></div>

<!-- Crea un div para el selector de temporalidad -->
<div id="timeframe-selector">
  <input id="timeframe-input" type="text" value="1D">
  <button id="timeframe-button">Apply</button>
</div>

<!-- Crea un div para el selector de tipo de velas -->
<div id="chart-type-selector">
  <input type="radio" name="chart-type" value="1">Candles
  <input type="radio" name="chart-type" value="2">Bars
  <input type="radio" name="chart-type" value="3">Line
</div>

<!-- Crea un div para el indicador de volumen -->
<div id="volume-indicator"></div>

<!-- Agrega el script para crear los gráficos -->
<script>
  // Importa las librerías necesarias
  const Datafeeds = TradingView.Datafeeds;
  const UDFCompatibleDatafeed = Datafeeds.UDFCompatibleDatafeed;
  const $ = jQuery;
  const _ = lodash;

  // Crea los gráficos de TradingView
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
      "container_id": "btc-chart",
      "datafeed": new UDFCompatibleDatafeed("https://demo_feed.tradingview.com"),
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
      "container_id": "cardano-chart",
      "datafeed": new UDFCompatibleDatafeed("https://demo_feed.tradingview.com"),
    }
  );

  const timeframeSelector = new TradingView.widget.selectors.Timeframe(
    {
      "container_id": "timeframe-selector",
      "datafeed": new UDFCompatibleDatafeed("https://demo_feed.tradingview.com"),
      "input_id": "timeframe-input",
