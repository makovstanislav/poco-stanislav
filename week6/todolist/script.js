/* 
    split the big problem in small and solvable problem 
    2. add password protection 
    3. delete item
    4. mark item as done
    5. sort the list alphabetically
*/


let input = document.querySelector("input");
let button = document.querySelector("button");
let errormessage = "";

button.addEventListener("click",addListItem);
input.addEventListener("keypress",checkIfReturnKey);

function checkIfReturnKey(event) {
    if(event.keyCode === 13){ //return key
        addListItem();
    }
}

function isInputValid(){
    input.value = input.value.trim();
    if(input.value !== ""){
        for(let i = 0; i < JSON.parse(window.localStorage.getItem('tasks')).length; i++){
            if(JSON.parse(window.localStorage.getItem('tasks'))[i] === input.value){
                // it is a duplicate
                errormessage = "This to-do is already in your list.";
                return false;
            }
        }
        return true;
    }
    errormessage = "Please enter something to do."
    return false;
}

function addListItem(){
    if(isInputValid()){
        // get array
        let array = JSON.parse(window.localStorage.getItem('tasks'))

        // add the item to array
        array.push(input.value);

        // clear old array 
        window.localStorage.removeItem('tasks');

        // set array
        window.localStorage.setItem('tasks', JSON.stringify(array)) 

        console.log(JSON.parse(window.localStorage.getItem('tasks')))

        // clear input
        clearInput();
        
        render()
    } else {
        clearInput();
        alert(errormessage);
    }
    render()
}

function clearInput(){
    input.value = "";
    input.placeholder ="enter new item";
    input.focus();
}

function render() {
    let lists = JSON.parse(window.localStorage.getItem('tasks'))
    let ul = document.querySelector("ul");
    ul.innerHTML = ''
    for (let i=0; i <= lists.length; i++) {
        let li = document.createElement("li");
        li.innerText = lists[i]
        ul.appendChild(li);
    }
    
}

render()