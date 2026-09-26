function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(100)); // 212
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false

function timeGreeting(hour , name) {
    if (hour < 12) {
        return `Good morning, ${name}!`;
    } else if (hour < 18) {
        return `Good afternoon, ${name}!`;
    } else {
        return `Good evening, ${name}!`;
    }
}
let now = new Date();
let hour = now.getHours();
console.log(timeGreeting(hour, "Alice")); // "Good morning, Alice!"
console.log(timeGreeting(hour, "Bob")); // "Good afternoon, Bob!"