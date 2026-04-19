let promise = new Promise((resolve, reject) => {
    let success = true;

    if(success){
        resolve("Data Connected");
        console.log("Data Connected");
    } else{
        reject("Error in Connection");
        console.log("Error in Connection");
    }
})


// consuming promise
     
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error))


