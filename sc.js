function RunEntirelyObj(obj) {
    let result = ''
    let i = 0
    for(keys in obj){
        i++
        result += `пользователь ${i}{ \n  имя: ${obj[keys].name};\n возраст: ${obj[keys].age};\n}\n\n`
    }
    return result
}

const users_10 = {
    'user1':{
        'name':prompt('введите ваше имя:'),
        'age':+prompt('введите ваш возраст:')
    },
    'user2':{
        'name':prompt('введите ваше имя:'),
        'age':+prompt('введите ваш возраст:')
    },
    'user3':{
        'name':prompt('введите ваше имя:'),
        'age':+prompt('введите ваш возраст:')
    },
    'user4':{
        'name':prompt('введите ваше имя:'),
        'age':+prompt('введите ваш возраст:')
    },
    'user5':{
        'name':prompt('введите ваше имя:'),
        'age':+prompt('введите ваш возраст:')
    },
    'user6':{
        'name':prompt('введите ваше имя:'),
        'age':+prompt('введите ваш возраст:')
    },
    'user7':{
        'name':prompt('введите ваше имя:'),
        'age':+prompt('введите ваш возраст:')
    },
    'user8':{
        'name':prompt('введите ваше имя:'),
        'age':+prompt('введите ваш возраст:')
    },
    'user9':{
        'name':prompt('введите ваше имя:'),
        'age':+prompt('введите ваш возраст:')
    },
    'user10':{
        'name':prompt('введите ваше имя:'),
        'age':+prompt('введите ваш возраст:')
    },
}

console.log(RunEntirelyObj(users_10));