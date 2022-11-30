// Selector
let myform = document.querySelector("#myform");
let addtask = document.querySelector("#addTask");
let fiter = document.querySelector("#fiter");
let Orderlist = document.querySelector("#list");

// AddEventListener
myform.addEventListener('submit', addTask);
document.addEventListener('DOMContentLoaded', fetchData);
Orderlist.addEventListener('click', delTast);
fiter.addEventListener('keyup', filterData);


// Function Declaration
function addTask(e){
    e.preventDefault();
    if(addtask.value === ''){
        alert("Sorry your field is empty");
    }else{
        let list = document.createElement('li');
        list.appendChild(document.createTextNode(addtask.value + ' '));
        Orderlist.appendChild(list);
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerText = 'Delete X'
        link.style.color = 'red';
        link.style.textDecoration = 'none';
        list.appendChild(link);
        setLocalStore(addtask.value);
        addtask.value = '';
    }
}

// Data Add LocalStore

function setLocalStore(data){
    let taskData;
    if(localStorage.getItem('taskData') === null){
        taskData = [];
    }else{
        taskData = JSON.parse(localStorage.getItem('taskData'))
    }
    taskData.push(data);
    localStorage.setItem('taskData', JSON.stringify(taskData));
}

// Data Load From LocalStore

function fetchData(){
    let taskData;
    if(localStorage.getItem('taskData') === null){
        taskData = [];
    }else{
        taskData = JSON.parse(localStorage.getItem('taskData'));
    }

    taskData.forEach(element => {
        let list = document.createElement('li');
        list.appendChild(document.createTextNode(element + ' '));
        Orderlist.appendChild(list);
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerText = 'Delete X'
        link.style.color = 'red';
        link.style.textDecoration = 'none';
        list.appendChild(link);

    });
}

// Delete Element
function delTast(e){
    if(confirm("Are You sure")){
        if(e.target.hasAttribute('href')){
            let list = e.target.parentElement;
            list.remove();
            removeLocal(list);
        }
    }
}


// Task Remove From Localstorege
function removeLocal(Tasklist){
    let taskData;
    if(localStorage.getItem('taskData') === null){
        taskData = [];
    }else{
        taskData = JSON.parse(localStorage.getItem('taskData'));
    }

    let li = Tasklist;
    li.removeChild(li.lastChild);

    taskData.forEach((elem,index) => {
        if(li.textContent.trim() === elem){
            taskData.splice(index, 1);
        }
    });

    localStorage.setItem('taskData', JSON.stringify(taskData));
}

function filterData(e){
    let fieldValue = e.target.value.toLowerCase();
    let li = document.querySelectorAll('li');
    li.forEach((item)=>{
        task = item.firstChild.textContent;
        if(task.toLowerCase().indexOf(fieldValue) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}
