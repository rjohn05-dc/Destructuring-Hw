let k=[12,34,56,77]
let [a,b]=[k[0],k[1]]
console.log(a,b) // undefined 12

let food={
    morning:['eggs','toast','coffee'],
    lunch:['sandwich','soda','fruit'],
    dinner:['steak','potatoes','wine']
}

let {morning,lunch,dinner}=food
console.log(morning,lunch,dinner) // [ 'eggs', 'toast', 'coffee' ] [ 'sandwich', 'soda', 'fruit' ] [ 'steak', 'potatoes', 'wine' ]

let add=(a+b) =>{
    return a+b
}

