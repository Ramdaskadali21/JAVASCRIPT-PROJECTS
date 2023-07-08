const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container')

class item {
    constructor(itemName) {
        this.createDiv(itemName)
    }

    createDiv(itemName){
        let inputElement = document.createElement('input');
        inputElement.value = itemName;
        inputElement.disabled = true;
        inputElement.classList.add('item_input');
        inputElement.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(inputElement);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener ('click', () => this.edit(inputElement));

        
        removeButton.addEventListener ('click', () => this.remove(itemBox));
        }
     edit(inputElement){
        inputElement.disabled = !inputElement.disabled;
     }
     remove(item){
        container.removeChild(item);
     }
}
function check(){
    if (input.value !=""){
        new item(input.value);
        input.value="";
    }
}
addButton.addEventListener('click', check);
window.addEventListener('keydown',(e) => {
    if(e.which == 13){
        check();
    }
});

