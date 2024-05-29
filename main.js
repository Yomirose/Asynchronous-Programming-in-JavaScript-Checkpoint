// Task 01
const myArray = [1, 2, 3, 4, 5];

async function iterateWithAsyncAwait (values) {
    for (const item of values) {
        await someAsynFunction(item);
    }
}
 
async function someAsynFunction(item) {
//     // Simulating an asynchronous operation
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(item);
            resolve();
        }, 1000);
    });
}

iterateWithAsyncAwait(myArray)


// Task 02
    async function awaitCall() {
        const objectArr = await fetch("https://jsonplaceholder.typicode.com/users")
        const objectData = await objectArr.json()
        console.log(objectData)
    }
    
    awaitCall()


    // Task 05
    const URLs =[
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
    ];

     async function parallelCalls (URLs) {
        URLs.map(url => fetch(url)
        .then(response => response.json())
    );
    Promise.all(URLs)
    .then(responses => {
        const responseData = responses.map(response => response);
        console.log("fetched data:", responseData);
    })
    
    }
    parallelCalls (URLs)

    
