const pagetheme = "divwrap";

function submittask() {
    const inputText = document.getElementById('inputtextl').value;
    const listwrap = document.getElementsByClassName("taskswrap")[0];

    
    const listli = document.createElement("li");
    const listdiv = document.createElement("div");
    
    listdiv.classList.add(`${pagetheme}`);


    const valuelist = document.createTextNode(inputText);
    listwrap.appendChild(listdiv);
    listdiv.appendChild(listli);

    listli.appendChild(valuelist);

   

    const donebutton = document.createElement("button");
    donebutton.innerHTML = `&#10003`;
    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = `&#10005;`;

    donebutton.classList.add(`uncheckbutton`);
    deletebutton.classList.add(`uncheckbutton`);

    donebutton.addEventListener("click", donemark);
    deletebutton.addEventListener("click" , deletemark);

    listdiv.appendChild(donebutton);
    listdiv.appendChild(deletebutton);

    document.getElementById('inputtextl').value = "";



   
}

function donemark(event) {
    const div = event.target.parentElement;
    if (div.classList.contains("donebutton")) {
        div.classList.remove("donebutton");
    } else {
        div.classList.add("donebutton");
    }
}

function deletemark(event) {
    const div = event.target.parentElement;

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    div.remove();
}
