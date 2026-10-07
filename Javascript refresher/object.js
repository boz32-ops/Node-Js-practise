// const person={

// name:'aki',

// age:29,

// greet(){
// console.log('HI i am '+ this.name);
// }

// };
// console.log(person);


const person={

name:'aki',

age:29,

greet:function(){
console.log('HI i am '+ this.name);
}

};
person.greet();