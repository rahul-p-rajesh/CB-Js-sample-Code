//in js it allows to create object without defining the class

//bird is a object with following properties
var bird = {
    x :100,
    y : 50,
    color : "blue",
    eggs : [1,2,3],
    fly :function(){
        console.log("Bird is flying ",this.x,this.y)
    }
};
//this way of creating a object without a class is called json object

//to access certain properties in console you can do it bird.x
//to update certain properties in console you can do it bird.x = 120


//function to create multiple object
//so for a object say apple
var apple = {
    taste : "sweet",
    color : "red",
} 
//now say if we want to create multiple fruits  with properties taste and color
//then we create a function

//2 ways of creating a --> function declaration & function expression

//function declaration
function fruit(taste,color){
    this.taste = taste;
    this.color = color;
}

let mango = new fruit("sweet","yellow");
let orange = new fruit("sour","orange");
console.log(apple)
console.log(mango)
console.log(orange)


//class

//2 ways of creating a class --> class declaration & class expression

//class declaration
class FruitClass{
    constructor(color,taste){
        this.color = color;
        this.taste = taste;
    }
}

let kiwi = new FruitClass("green","sour");
console.log(kiwi);

//class expression
let fruitexpression = class{
    constructor(color,taste){
        this.color = color;
        this.taste = taste;
    }
}
let gauava = new fruitexpression("yellow-green","pale");
console.log(gauava)

//both declaration and expression will not be hoisted