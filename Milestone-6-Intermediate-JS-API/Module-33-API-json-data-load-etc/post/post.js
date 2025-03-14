
const handleUserPost=()=>{

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data=>showData(data))
}

const showData=(postData)=>{


    const postContainerDiv = document.getElementById("postContainer");

    postData.forEach(post => {

        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML= `

        <h3>${post.title} </h3>
        <p>${post.body} </p>
        <button>Mark As Done </button>
        `
        postContainerDiv.appendChild(div);

        
    });


    

}

handleUserPost();