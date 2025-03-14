
const loadUserName = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => showUserName(data))
}




const showUserName = (usersData) => {

    const userNameContainer = document.getElementById("user-name-container");

    for (let user of usersData) {
        const userNameLi = document.createElement("li");
        userNameLi.innerText = user.name;
        userNameContainer.appendChild(userNameLi);
    }
}





