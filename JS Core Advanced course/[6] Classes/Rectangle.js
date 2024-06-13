"use strict";

class Rectangle{
  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  square(){
    return this.height*this.width;
  }

  perimeter(){
    return (this.height + this.width)*2;
  }
}


const figure = new Rectangle(10,7);
console.log(figure.square());
console.log(figure.perimeter());    
