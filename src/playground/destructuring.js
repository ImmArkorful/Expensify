// const person = {
//   name: 'emmanuel',
//   age: 23,
//   location: {
//     city: 'accra',
//     temp: 23,
//   },
// };

// const { name, age } = person;
// const {city, temp} = person.location
// console.log(`${city} is ${temp}`);


// const book = {
//     title: 'ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher:{
//         name:'Penguin'
//     }    
// }

// const {name:publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName)

const address =['1299 S Jupiter Street', 'Philadelphia', 'Pensylvanie', '19127']

const [, city, state = 'New York'] = address

console.log(`You are in ${city} ${state}`);

const items = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [item, , price,] = items;

console.log(`A medium ${item} costs ${price}`);