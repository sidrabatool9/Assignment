// ASSIGNMENT 1
//Learning Objective: Practice working with objects and arrays in TypeScript to create a data 
// structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName, 
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your 
// friend list.


let friend1={
    firstName: "Sidra batool",
    lastName: "Mughal",
    id: 156,
}

let friend2= {
    firstName: "Laiba",
    lastName: "Shaikh",
    id: 782,
}

let friend3= {
    firstName: "Duaa",
    lastName: "Abbasi",
    id: 352,
}
 let people={
    friends: [friend1, friend2, friend3]
 }

 console.log(people);


 
//  ASSIGNMENT 2
 // Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// * Modify the Array:
// * Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or 
// create temporary arrays).
// * Output the Result:
// * Use join() to combine elements back into a single string: "I am a student of GIAIC".\

const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice([2][2]);
scrambledArray[0]= "I"
 scrambledArray[1]= "am"
 scrambledArray[2]= "student"
 scrambledArray[3]= "of"
 scrambledArray[4]= "GIAIC"

console.log(scrambledArray.join(" "));


// ASSIGNMENT 3
// Learning Objective: Implement data structures in TypeScript to represent and manage product 
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name, 
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the 
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand 
// how to manage product data.


let product1= {
    name: "Mobile",
    company: "Infinix",
    model: "hot8",
    cost: 80000,
    quantity: 4,
}

let product2 ={
    name: "laptop",
    company: "Lenovo",
    Porcessor: "Cori5",
    RAM: "8GB",
    prize: 65000,
    quantity: 1,
}

let product3= {
    name: "Laptop",
    company: "Dell",
    Processor: "Cori3",
    RAM: "4GB",
    prize: "48000",
    quantity: 2,
}
let inventory={
    products: [product1, product2, product3],
}

// console.log(inventory);
console.log("quantity of the first product:",inventory.products[0].quantity);
console.log("name of the third product:",inventory.products[2].name );
console.log("Company of the second product:", inventory.products[1].company);



// ASSIGNMENT 4
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic 
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes 
// student information like name, senior status (true/false), and whether they've completed 
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the 
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors 
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have 
// a function that removes students who haven't completed their assignments 
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?

interface student {
    name: string
    isSenior: boolean
    isCompletedAssignments: boolean
};

let students: student[]= [
    {
        name: "Sidra batool",
        isSenior: true,
        isCompletedAssignments: true, 
    },
    {
        name: "Dawood",
        isSenior: false,
        isCompletedAssignments: false,
    },
    {
        name: "Sadia",
        isSenior: true,
        isCompletedAssignments: false,
    },
    {
        name: "Taha",
        isSenior: false,
        isCompletedAssignments: true,
    },
    {
        name: "Sana",
        isSenior: false,
        isCompletedAssignments: false,
    },
    {
        name: "Mehak",
        isSenior: true,
        isCompletedAssignments: true,
    },
];
// console.log(students);

let findSenior= (students: student[]) => {
return students.filter(students => students.isSenior && students.isCompletedAssignments === true)
};
// console.log(findSenior(students));

const removeStudents= (students: student[]) =>{
    return students.filter(students=> students.isCompletedAssignments ===false)
};
console.log(removeStudents(students));
