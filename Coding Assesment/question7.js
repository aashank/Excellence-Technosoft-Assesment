
// <!-- Question 7
// Let’s see we an api url https://my-json-server.typicode.com/typicode/demo/posts
// Write a sample code to call this url via ajax and print its response -->


fetch('https://my-json-server.typicode.com/typicode/demo/posts')
.then((response)=>{
    return response.json();
})
.then((apiValue)=>{
   console.log('Response Value --',apiValue);
document.write(JSON.stringify(apiValue));
})
.catch((error)=>{
   console.error('Response Failed',error);
alert('Response failed');
})
