import { ProxyState } from "../AppState.js";
import { Ape } from "../Models/Ape.js";
import { Buffalo } from "../Models/Buffalo.js";
import { Cat } from "../Models/Cat.js";
import { Dog } from "../Models/Dog.js";
import { Elephant } from "../Models/Elephant.js";
import { Frog } from "../Models/Frog.js";
import { Giraffe } from "../Models/Giraffe.js";
import { Hippo } from "../Models/Hippo.js";
import { Iguana } from "../Models/Iguana.js";
import { Jaguar } from "../Models/Jaguar.js";
import { Kangaroo } from "../Models/Kangaroo.js";
import { Lion } from "../Models/Lion.js";
import { Macaw } from "../Models/Macaw.js";
import { Newt } from "../Models/Newt.js";
import { Ostrich } from "../Models/Ostrich.js";
import { Pig } from "../Models/Pig.js";
import { Quail } from "../Models/Quail.js";
import { Rhino } from "../Models/Rhino.js";
import { Sheep } from "../Models/Sheep.js";
import { Tiger } from "../Models/Tiger.js";
import { Urial } from "../Models/Urial.js";
import { Value } from "../Models/Value.js";
import { Vole } from "../Models/Vole.js";
import { Wolf } from "../Models/Wolf.js";
import { Xrayfish } from "../Models/XRayFish.js";
import { Yak } from "../Models/Yak.js";
import { Zebra } from "../Models/Zebra.js";

let animals = [new Ape('alex', 'Ape', 1, true, false), new Buffalo('bonnie', 'Buffalo', 2, false, false), new Cat('candy', 'Cat', 3, true, false), new Dog('dan', 'Dog', 4, true, false), new Elephant('Eli', 'Elephant', 5, false, false), new Frog('Frank', 'Frog', 6, true, false), new Giraffe('Gill', 'Giraffe', 7, false, false), new Hippo('Hector', 'Hippo', 8, true, false), new Iguana('Issac', 'Iguana', 9, true, false), new Jaguar('Jack', 'Jaguar', 10, true, false), new Kangaroo('koko', 'Kangaroo', 11, false, false), new Lion('Liam', 'Lion', 12, true, false), new Macaw('Matt', 'Macaw', 13, true, true), new Newt('Nelly', 'Newt', 14, true, false), new Ostrich('Oscar', 'Ostrich', 15, true, true), new Pig('Peter', 'Pig', 16, false, false), new Quail('Quin', 'Quail', 17, true, false), new Rhino('Robert', 'Rhino', 18, true, true), new Sheep('Sebastian', 'Sheep', 19, false, false), new Tiger('Tom', 'Tiger', 20, true, false), new Urial('Ulises', 'Urial', 21, true, true), new Vole('Victor', 'Vole', 22, false, false), new Wolf('William', 'Wolf', 23, true, false), new Xrayfish('Xavier', 'Xrayfish', 24, true, true), new Xrayfish('Xavier', 'Xrayfish', 24, true, true), new Yak('Yanis', 'Yak', 25, false, false), new Zebra('Zuri', 'Zebra', 26, false, false)]




class ValuesService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }
}

export const valuesService = new ValuesService();

