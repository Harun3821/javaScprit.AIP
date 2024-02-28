function loadingPost(){
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}


function displayPost(posts){
const postConiter = document.getElementById("post-coniter");
  for(const post of posts){
     const div = document.createElement("div");
      div.classList.add("post");
     div.innerHTML = `
     <h4>users-${post.userId}</h4>
     <h5>Post : ${post.title}</h5>
     <p>Post Description: ${post.body}</p>

     `
     postConiter.appendChild(div);
     
    
  }
}


loadingPost()


//---------------------------------------//


  







