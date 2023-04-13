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
"datafeed": new UDFCompatibleDatafeed("https://unpkg.com/@tv/datafeed-coingecko@1.0.0/dist/bundle.production.min.js"),
}
);

const cardanoChart = new TradingView.widget(
{
"width": 980,
"height": 610,
"symbol": "BINANCE:ADAUSD",
"interval": "D",
"timezone": "Etc/UTC",
"theme": "dark",
"style": "1",
"locale": "en",
"toolbar_bg": "#f1f3f6",
"enable_publishing": false,
"allow_symbol_change": true,
"container_id": "cardano-chart",
"datafeed": new UDFCompatibleDatafeed("https://unpkg.com/@tv/datafeed-coingecko@1.0.0/dist/bundle.production.min.js"),
}
);

const timeframeSelector = new TradingView.widget.selectors.Timeframe(
{
"container_id": "timeframe-selector",
"datafeed": new UDFCompatibleDatafeed("https://unpkg.com/@tv/datafeed-coingecko@1.0.0/dist/bundle.production.min.js"),
"input_id": "timeframe-input",
"button_id": "timeframe-button",
"timeframes": [
{ text: "1D", resolution: "1D" },
{ text: "1W", resolution: "1W" },
{ text: "1M", resolution: "1M" },
],
}
);

const chartTypeSelector = new TradingView.widget.selectors.ChartType(
{
"container_id": "chart-type-selector",
"datafeed": new UDFCompatibleDatafeed("https://unpkg.com/@tv/datafeed-coingecko@1.0.0/dist/bundle.production.min.js"),
"chart_types": [
{ id: "1", text: "Candles", resolution: "" },
{ id: "2", text: "Bars", resolution: "" },
{ id: "3", text: "Line", resolution: "" },
],
}
);

const volumeIndicator = new TradingView.widget.indicators.Volume(
{
"container_id": "volume-indicator",
"datafeed": new UDFCompatibleDatafeed("https://unpkg.com/@tv/datafeed-coingecko@1.0.0/dist/bundle.production.min.js"),
}
);
