import axios from "axios";
import apis from "./Trader/CoinOne/apis";
import { OrderBook, Trades, Ticker } from './Trader/CoinOne/model';

console.log("CoinKey Version 0.1.0");

const orderBook = new OrderBook();
const trades = new Trades();
const ticker = new Ticker();

//trades.callAPI();
//orderBook.callAPI();
ticker.callAPI();