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

function addListItem(){

    // get array
    let array = JSON.parse(window.localStorage.getItem('tasks'))

    // add the item to array
    array.push(input.value);

    // clear old array 
    window.localStorage.removeItem('tasks');

    // sort array
    array = array.sort()

    // set array
    window.localStorage.setItem('tasks', JSON.stringify(array)) 

    console.log(JSON.parse(window.localStorage.getItem('tasks')))

    // clear input
    clearInput();
    
    render()
  
}

function clearInput(){
    input.value = "";
    input.placeholder ="enter new item";
    input.focus();
}

function render() {
    let list = JSON.parse(window.localStorage.getItem('tasks'))
    let ul = document.querySelector("ul");
    ul.innerHTML = ''
    
    // use map
    let lis = list.map((item) => {
        return `<li>${item}</li>`
    }).join('')
    ul.innerHTML = lis

}

render()