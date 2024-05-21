
import { readFilePromise } from './promise1';
const superagent = require("superagent");
export default function convertCoins(price: number) {
    const API_KEY = "ce8d376dbdac12d8d4e9757e";
    const COIN_FILE_URL = "coin.txt";
    const PRICE_FILE_URL = "price.txt";
    let coin: string;
    const ILS: string = 'ILS'
    readFilePromise(COIN_FILE_URL)
        .then((data: Buffer) => {
            coin = data.toString();
            const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${coin}`;
            return superagent.get(url);
        }).then((res: any) => {



            const data = res.body.conversion_rates[ILS];
            const output = `${price} ${coin} in ILS is ${data * price}`;
            console.log(output);
        }).catch((err: any) => {
            console.log("Failed ", err.message);
        });
}