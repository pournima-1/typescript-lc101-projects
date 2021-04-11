import { Payload } from "./Payload";

export class Astronaut implements Payload{
    // properties and methods
    massKg: number;
    name: String;

 constructor(massKg: number , name: string) {
    this.name = name;
    this.massKg = massKg;
   }

 }