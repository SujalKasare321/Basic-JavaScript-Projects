// Write an asynchronous function that takes an array of numbers
//  and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

function asyncDoubleArray(arr) {
    let promises = [];

    for (let i = 0; i < arr.length; i++) {
        promises.push(
            new Promise(resolve => {
                setTimeout(() => resolve(arr[i] * 2), 500);
            })
        );
    }

    return promises;
}
async function run() {
    const promises = asyncDoubleArray([1, 2, 3, 4]);

    // console.log(promises); 

    const results = await Promise.all(promises);
    console.log(results); 
}

run();
