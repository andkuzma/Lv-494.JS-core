function greetUser(username) {

    var date = new Date()
    var hours = date.getHours();
    var date = `${date.toString()}`;

    switch(true){
        case (hours >= 23 || hours <=5 ):
            return (`${date}<br> Good night, ${username}!`);
            break;
        case (hours > 5 && hours < 11):
            return (`${date}<br>Good morning, ${username}!`);
            break;
        case (hours > 11 && hours < 17):
            return (`${date}<br>Good afternoon, ${username}!`);
            break;
        default:
            return (`${date}<br>Good evening, ${username}!`);
            break;
      }   
}
console.log(greetUser('AnD'));

module.exports.greetUser = greetUser;