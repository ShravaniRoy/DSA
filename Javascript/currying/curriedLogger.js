//a logger function to return messages

function Logger(date, type, message){
    return `${date} ${type.toUpperCase()} ${message}`
}

//normal logger calls
console.log(Logger(Date(), 'info', 'normal info message'));
console.log(Logger(Date(), 'info', 'grateful for today'));

function curriedLogger(type){
    return function (date){
        return function (message){
            console.log(Logger(date, type, message));
        }
    }
}
// calling the curried logger function, utilizing reusability
const infoLog = curriedLogger('info');
infoLog(Date())('hurray it is curried');
infoLog(Date())('we got lucky today');
const errorLog = curriedLogger('error');
errorLog(Date())('better luck next time');
errorLog(Date())('ugh, something went wrong');