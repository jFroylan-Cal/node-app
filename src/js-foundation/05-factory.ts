interface IBuildMakePerson {
    getUuid: () => string;
    getAge: ( birthday: string ) => number;
 }

interface IPersonOptions { 
    name: string;
    birthday: string;
 }


const buildMakePerson = ({ getUuid, getAge }: IBuildMakePerson) => { 
    return ({ name, birthday }: IPersonOptions) => {
        return {
            id: getUuid(),
            name: name,
            birthday: birthday,
            age: getAge(birthday)
        }
    }
}
