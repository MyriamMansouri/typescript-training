
// function declaration
const fullName = (first: string, last: string): string => {
    return first + ' ' + last;
}

// function expression
let otherFullName : (first: string, last: string) => string;
otherFullName = (first, last) => {
    return first + ' ' + last;
}

// function expression + interface
interface fourthFullNameFunc {
    (first: string, last: string) : string;
}
let  fourthFullName: fourthFullNameFunc;
fourthFullName = (first, last) => {
    return first + ' ' + last;
}

let thirdFullName: (first: string, last: string) => string = (first: string, last: string): string => {
    return first + ' ' + last;
}

console.log(fullName('Lady', 'Gaga'))
console.log(otherFullName('Lady', 'Gaga'))
console.log(thirdFullName('Lady', 'Gaga'))
console.log(fourthFullName('Lady', 'Gaga'))
// declaring a function like what we dit for ==> otherFullName <== (ie with function expression before declaration)
// prevents hoisting
// which means we cannot invoke the function at the top of our code, before the declaration
