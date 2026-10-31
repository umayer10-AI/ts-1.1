let myString : string = "Hello, World!"
let myNumber : number = 42
let myBoolean : boolean = true
let myArray : number[] = [1, 2, 3, 4, 5]
let mySymbol : symbol = Symbol()
let myBigInt : bigint = 100n

const addtwo = (a: number, b: number) : number => {
    return a + b
}

console.log(addtwo(10, 35))

// Array and Tuple Types

// const arr : Array<String> = ["apple", "banana", "cherry"]
const arr : string[] = ["apple", "banana", "cherry"]
// arr.push(1234)
const numbArr : number[] = [1, 2, 3, 4, 5]
const a : any[] = [1, "Two"]
const dhakaLateLong : readonly [number, number] = [23.811056 , 39.8]

// dhakaLateLong.push(100) 



// functional programming

const concatName = (firstName: string, lastName?: string) : string => {

    if(!lastName) {
        return firstName
    }

    return firstName + " " + lastName
}
console.log(concatName("Umayer"))
console.log(concatName("Umayer", "Ahmad"))

const greeetings = (name: string, age = 21) : void => {
    console.log(`Hello ${name}, you are ${age} years old.`)
}

greeetings("Umayer", 25)

// Rest Parameters

const sum = (...numbers: number[]) => {
    return numbers.reduce((a, b) => a + b, 0)
}
console.log(sum(1, 2, 3, 4, 5))


const logUserAction = (...arg : [name: string, age: number, isActive?: boolean]) => {
    
    const [name, age, isActive] = arg
    console.log(name + " is " + age)
}
logUserAction("Umayer", 21, true)


// Object Types

type userName = string

type Address = {
        street: string,
        holdingNumber: number,
    }

type TUser = {
    name: userName,
    age: number,
    isActive: boolean,
    action: () => void,
    badges: string[],
    email?: string,
    adddress: Address
}

interface IUser {
    name: string,
    age: number,
    isActive: boolean,
    action: () => void,
    badges: string[],
    email?: string,
    adddress: Address
}

const user : IUser = {
    name: "Umayer",
    age: 21,
    isActive: true,
    action: () => console.log("User is active"),
    badges: ["admin", "moderator", "user"],
    adddress: {
        street: "123 Main St",
        holdingNumber: 42
    }
}
user.email = "ajhgbfjfbcshhfd"

console.log(user.email)
