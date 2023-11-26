function displayFileSize() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0]; // Foydalanuvchi tomonidan tanlangan fayl
    const fileSizeKB = file.size / 1024; // Fayl hajmi KB ga o'tkaziladi
    let result = fileSizeKB.toFixed(2)
    document.getElementById('result').innerText = result
}

function countWords() {
    const textarea = document.getElementById('text-input');
    const text = textarea.value;
    const words = text.trim().split(/\s+/); // Matndagi so'zlarni bo'shliq va belgilar bo'yicha bo'lib ajratamiz

    const wordCount = words.length;
    const wordCountDisplay = document.getElementById('word-count');
    wordCountDisplay.textContent = `So'zlar soni: ${wordCount}`;
}



function checkWord() {
    // const textarea = document.getElementById('text-input');
    // const text = textarea.value.toLowerCase().split(' ')

    // const input = document.getElementById('word-input');
    // const word = input.value.toLowerCase().split(' ')

    // const isWordInText = text.includes(word);

    // if (isWordInText) {
    //     console.log(`So'z matnda mavjud`);
    // } else {
    //     console.log(`So'z matnda mavjud emas`);
    // }
    const textarea = document.getElementById('text-input');
    const input = document.getElementById('word-input');

    textarea.addEventListener('input', () => {
        if(input.value.toLowerCase().includes(textarea.value)) console.log('So\'z matnda mavjud');
    })

    input.addEventListener('input', () => {
        if(textarea.value.toLowerCase().includes(input.value)) console.log('So\'z matnda mavjud');
    })


}






























// Get references to HTML elements
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
function save() {
    localStorage.getItem(todoList.innerHTML)
} save()
function send(params) {

}



// Todo listni localStorage'dan o'qish
const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

// Saqlangan todolar ro'yxatini render qilish
function renderTodos() {
    todoList.innerHTML = '';
    savedTodos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo;
        todoList.appendChild(li);
    });
}

// Todo qo'shish
function addTodo() {
    const todoText = todoInput.value
    if (todoText !== '') {
        savedTodos.push(todoText);
        localStorage.setItem('todos', JSON.stringify(savedTodos));
        renderTodos();
        todoInput.value = '';



    }




    if (todoText) {
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(removeButton);
        todoList.appendChild(todoItem);
        todoInput.value = '';

    }







}

renderTodos(); // Saqlangan todolar ro'yxatini render qilish