let a: number = 5 ;
let b: string = "a";
let c: boolean = true;
let d: any;
let e: number[] = [1,2,3];
let f: Array<number> = [1,2,3];
let g: any[] = [1,"a",true];
let h: [string,number,boolean] = ["a",5,false]; //tuple

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {kredi,havale,eft}

let kredi = Payment.kredi;
let havale = Payment.havale;
let eft = Payment.eft;