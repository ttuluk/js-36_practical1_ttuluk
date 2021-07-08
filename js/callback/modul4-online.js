//High-order function
function highOrder(value, callback) {
    // console.log(`Hello, I am high order function`);
    callback(value);
}
highOrder('Hello', setMessage);
//callback function
function setMessage(message) {
    console.log(message);
    
}
setMessage('I am callback')