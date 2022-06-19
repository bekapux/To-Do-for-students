// MAIN დავალება
// add ზე დაჭერით UL ში ემატებოდეს ახალი <li> სადაც ეწერება ინფუთის მნიშვნელობა.
// <li> -ს ჰქონდეს კლასი list-group-item.
// თუ ინფუთი ცარიელია არ დაემატოს.
// clear ზე დაჭერით ინფუთი სუფთავდებოდეს.

// Secondary დავალება
// ყოველ <li> ს ბოლოში ჰქონდეს წაშლის ღილაკი რითიც კონკრეტული თასქი წაიშლება

// Advanced დავალება
// ეს ყველაფერი მივაბათ FIREBASE -ს


const list = document.getElementById("list")
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const task = input.value;
    if(task=="") return;
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.classList.add('d-flex');
    li.classList.add('justify-content-between');
    li.innerText = task;

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn');
    deleteBtn.classList.add('btn-danger');
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener('click', () => {
        deleteBtn.parentElement.remove()
    });

    li.appendChild(deleteBtn)

    input.value = "";
    list.appendChild(li);
});

clearBtn.addEventListener('click', () => {
    input.value = "";
})