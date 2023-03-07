let tasks;


if (localStorage.getItem("tasks") === null){
  tasks = []; 
}else{
  tasks = JSON.parse(localStorage.getItem("tasks"));  
}


document.querySelector("form").addEventListener("submit", function(event){

    const newTask = document.querySelector(".form-control").value;
    tasks.push(newTask);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    document.querySelector(".form-control").value = ""
})





if (localStorage.getItem("tasks") !== null){
    
    tasks.forEach(element => {

        let buttonElement = document.createElement("button");
        buttonElement.className = "btn btn-outline-danger item-button";
        buttonElement.textContent = "delite";

        let spanElement = document.createElement("span");
        spanElement.appendChild(buttonElement);
    
        let listElement = document.createElement("ul");
        listElement.className = "list-group-item d-flex justify-content-between align-items-center"
        listElement.textContent = element;
        listElement.appendChild(spanElement);

        document.querySelector(".list-group").appendChild(listElement);
    });   
}



document.querySelector(".list-button").addEventListener("click", function(event){
    
    
    localStorage.clear();
    tasks = [];

    const UnList = document.querySelectorAll("ul");

    UnList.forEach(element => {
        element.remove();
    })   
})



const deleteListItem = document.querySelectorAll(".item-button");


    deleteListItem.forEach(item => {


        item.addEventListener("click", function(event){

            event.target.parentNode.parentNode.remove();
            console.log(tasks);

            let deliteString = event.target.parentNode.parentNode.textContent;
            let realString =deliteString.slice(0,-6);
            let index = tasks.indexOf(realString);

                if (index !== -1) {
                    tasks.splice(index, 1);
                }
            
            localStorage.clear();
            localStorage.setItem("tasks",JSON.stringify(tasks));
        })
    })  



