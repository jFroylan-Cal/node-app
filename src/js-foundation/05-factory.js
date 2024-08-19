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

module.exports = {
    buildMakePerson,
}