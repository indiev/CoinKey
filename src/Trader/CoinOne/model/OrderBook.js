import axios from "axios";
import { traderCurrency, apis } from "../constants";

export default class OrderBook {
  constructor(options = {}) {
    this.set(options);
  }

  set(options = {}) {
    this.currency = options.currency || traderCurrency.BTC;
    this.timestamp = options.timestamp;
    this.bid = options.bid;
    this.ask = options.ask;
  }

  callAPI(currency = traderCurrency.BTC) {
    const params = { currency };
    axios.get(apis.ORDER_BOOK, { params }).then(response => {
      if(response.status) {
        this.set(response.data);
        this.print();
      } else {
        console.log(response.status);
        console.log(response.statusText);
      }
    }).catch(error => {
      console.log(error);
    });
  }

  print() {
    console.log(this.currency);
    console.log(this.timestamp);
    this.bid && this.bid.forEach(item => {
      console.log(`${item.price} - ${item.qty}`);
    });
    this.ask && this.ask.forEach(item => {
      console.log(`${item.price} - ${item.qty}`);
    });
  }
}
