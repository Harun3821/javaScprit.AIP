
// fetch('https://jsonplaceholder.typicode.com/posts/1') //--API--- application programming interface//
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
//----------------------------------//


function deletepost(){
    fetch('https://jsonplaceholder.typicode.com/users/1/posts',{
      method: 'DELETE',
  })
  }
  
  
  
  function PatchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
  
  
  
  
  function CreateApost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
  