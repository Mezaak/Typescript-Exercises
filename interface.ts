// let travelTo = (point:{x:number,y: number}) => {
//     //..
// }

// let getDistance = (pointA:{x:number,y: number},pointB:{x:number,y: number});

// travelTo({
//     x:1,
//     y:2
// });






interface Point {
    x:number,
    y:number
}

interface Passenger{
    name:string;
    phone:string;
}

interface Vehicle{
    currentLocation: Point;
    travelTo(point:Point):void;
    getDistance(pointA:Point,pointB:Point):number;
    addPassengers(passenger:Passenger):void;
    removePassenger(passenger:Passenger):void;
}


let travelTo = (point:Point) => {
    //..
}

let getDistance = (pointA:Point,pointB:Point) =>{
    //..
}

travelTo({
    x:1,
    y:2
});