// In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. 
// Write an async function named brewCoffee that takes the type of coffee and returns a promise. 
// The promise should resolve with a message indicating that the coffee is ready after a random delay.

function brewCoffee(type) {
    return new Promise((resolve) => {
        let delay = Math.floor(Math.random() * 2000) + 1000;
       

        setTimeout(() => {
            resolve(`${type} coffee is ready! `);
        }, delay);
    });
}


async function startBrewing() {
    console.log("Brewing your coffee...");
    let message = await brewCoffee("Espresso");
    console.log(message);
}

startBrewing();
