function loadData2(){
   fetch('https://jsonplaceholder.typicode.com/posts/1')
   .then(res => res.json())
   .then(data => console.log(data));
}


// function loadusers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data));
// }


// function  loadusers2(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//    .then(data =>  displeyuser2(data))
// }

// function displeyuser2(data){
//   const ul = document.getElementById("user-list");
//    for(const user of data){
//     // console.log(user.username)

//     const li = document.createElement('li')
//     li.innerText = user.name;
//     ul.appendChild(li)
//  }
 
// }


       function display2(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then(data => display3users(data));
       }

       function display3users(data){
         const ul = document.getElementById("user-list");
         for(const users of data){
          const li = document.createElement("li");
          li.innerText = users.email;
          ul.appendChild(li);
          
         }
       }