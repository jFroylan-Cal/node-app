
//const templateExports = require('./js-foundation/01-template');
// console.log(templateExports.emailTemplate);

//require('./js-foundation/02-destructuring');
//const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const id = 1
// getUserById(id,  (error, user) => { 
//     if (error) {
//         throw new Error("User not found with id", id);
//     }
//     console.log(user);
// });

// ! Reference to factory function
// const { getAge, getUuid } = require('./plugins')
// const { buildMakePerson } = require('./js-foundation/05-factory')
// const obj = { name: 'John', birthday: '1994-11-10' }
// const makePerson = buildMakePerson({ getUuid, getAge })
// const john = makePerson(obj)
// console.log(john);

const { getPokemonById } = require('./js-foundation/06-promises')

getPokemonById(4)
    .then((pokemon) => console.log({ pokemon }))
    .catch((err) => console.log('Try again'))
    .finally(() => console.log('Finalmente'));


