//const { getAge, getUuid } = require('../plugins')

const buildMakePerson = ({ getUuid, getAge } ) => { 
    return ({ name, birthday }) => {
        return {
            id: getUuid(),
            name: name,
            birthday: birthday,
            age: getAge(birthday)
        }
    }
}

// const obj = { name: 'John', birthday: '1994-11-10' };
// const john = buildPerson(obj)
// console.log(john);

module.exports = {
    buildMakePerson,
}