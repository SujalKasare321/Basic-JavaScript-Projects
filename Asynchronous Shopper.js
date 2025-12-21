// Imagine you are building an online shopping application. 
// Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. 
// The promise should resolve with an order confirmation message after a random delay.

function placeOrder(orderId) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 3000) + 1000;

        console.log(`Placing order #${orderId}...`);

        setTimeout(() => {
            resolve(`Order #${orderId} confirmed! (Delay: ${delay}ms)`);
        }, delay);
    });
}


placeOrder(101).then((message) => {
    console.log(message);
});
