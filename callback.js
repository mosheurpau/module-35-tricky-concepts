function welcomeMessage(name, greetHandler) {
    greetHandler(name);
}
// const name = 'Tom Hanks';
// const names = ['Tom Hanks', 'nbhggjk', 'bggb'];

function greetMoring(name) {
    console.log('Good Morning', name);
}
function greetAfternoon(name) {
    console.log('Good afternoon', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}
welcomeMessage('Shakil Al Hasan', greetMoring);
welcomeMessage('Shakil Al Hasan', greetAfternoon);
welcomeMessage('bmnxb Hasan', greetEvening);