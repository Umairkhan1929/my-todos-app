function addTask(){
        let userInput = document.getElementById("userInput").value.trim();
        document.getElementById("userInput").value = "";

if(userInput === ""){
    alert("You must write something!");
}
else{
    let todoList = document.createElement("div");

    let todoListInput = document.createElement("Input");
    todoListInput.value = userInput;

    todoListInput.style.fontSize = "15px";
    todoListInput.style.border = "none";

    todoList.append(todoListInput);

    todoList.style.display = "flex";
    todoList.style.gap = "28px";
    todoList.style.justifyContent = "space-evenly";
    todoList.style.padding = "6px";
    todoList.style.borderTop = "1px solid #ddd";

    let storedList = document.getElementById("storedList");
    storedList.append(todoList);

    let delBtn = document.createElement("button");
    delBtn.innerText = "remove";
    delBtn.setAttribute("id", "delBtn");
    todoList.append(delBtn);

    delBtn.onclick = function (){
        todoList.remove();
    };

    let CheckBox = document.createElement("input");
    CheckBox.type = "checkbox";
    todoList.prepend(CheckBox);
    }

}