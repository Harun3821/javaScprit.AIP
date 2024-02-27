
// fetch('https://jsonplaceholder.typicode.com/posts/1') //--API//
//  .then((response) => response.json()) // json is not similir but close to json.parse
//   .then((json) => console.log(json));



// fetch(url)
// .then(Response => Response.json())
// .then(json => console.log(json));

function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    fetch(url)
     .then(Response => Response.json())
     .then(json => console.log(json));
}