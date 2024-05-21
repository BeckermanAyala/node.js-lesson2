import { goToSleepPromise } from './promise1';
console.log(new Date)
goToSleepPromise(5000).then((data:string)=>console.log(data , new Date)).catch((err: any)=>(console.log(err.message)))