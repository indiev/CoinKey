import axios from "axios";
import { traderCurrency, apis } from "../constants";

export default class Ticker {
  constructor(options = {}) {
    this.set(options);
  }

  set(options = {}) {
    this.currency = options.currency;
    this.timestamp = options.timestamp;
    this.volume = options.volume;
    this.first = options.first;
    this.last = options.last;
    this.high = options.high;
    this.low = options.low;
  }

  callAPI(currency = traderCurrency.BTC) {
    const params = { currency };
    axios.get(apis.TICKER, { params }).then((response => {
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
    console.log(this.volume);
    console.log(this.first);
    console.log(this.last);
    console.log(this.high);
    console.log(this.low);
  }
}
