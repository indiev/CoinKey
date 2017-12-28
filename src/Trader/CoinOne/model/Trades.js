import axios from "axios";
import { traderCurrency, apis } from "../constants";

export default class Trades {
  constructor(options = {}) {
    this.set(options);
  }

  set(options = {}) {
    this.currency = options.currency;
    this.timestamp = options.timestamp;
    this.completeOrders = options.completeOrders;
  }

  callAPI(currency = traderCurrency.BTC, period = 'hour') {
    const params = { currency, period };
    axios.get(apis.TRADES, { params }).then((response => {
      if(response.status) {
        this.set(response.data);
        this.print();
      } else {
        console.log(response.status);
        console.log(response.statusText);
      }
    })).catch(error => {
      console.log(error);
    });
  }

  print() {
    console.log(this.currency);
    console.log(this.timestamp);
    this.completeOrders && this.completeOrders.forEach(item => {
      console.log(`${item.price} - ${item.qty} - ${item.timestamp}`);
    });
  }
}
