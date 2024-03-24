console.log('hello');

// DOM este o reprezentare a documentului HTML într-o structură de tip arbore, unde fiecare element din document este reprezentat printr-un obiect (nod) în arborele DOM. 

// Accesarea elementelor din DOM

// 1. document.getElementById(‘id’) - accesarea unui element după valoarea atributului id.

const cardElement = document.getElementById('card');
console.log('card: ', cardElement);
console.log(`card: ${cardElement}`);

//cardElement.innerHTML = "Altceva";

// 2. Accesarea elementelor după valoarea atributului class:
// document.getElementsByClassName(‘nume-clasa’); - întoarce o lista cu toate elementele ce au clasa ‘nume-clasa’.

const todos = document.getElementsByClassName('todo-item');
console.log(todos);
todos[0].id = 'new-id';

// 3. Accesarea elementelor după valoarea atributului name:
//document.getElementsByName(‘nume’); - întoarce o lista cu toate elementele ce au name=‘nume’.

const comment = document.getElementsByName('comment');
console.log(comment);
comment[0].value = 'Comment predefinit';

// 4. Accesarea elementelor după tipul elementului (numele tag-ului):
//document.getElementsByTagName(‘tip-element’); - întoarce o lista cu toate elementele ce au numele tag-ului ‘tip-element’ (ex: div, span, button, section, etc).

const listItems = document.getElementsByTagName('li');
console.log(listItems);

// 5. Accesarea elementelor după orice selector CSS valid:
// document.querySelector(‘selector’); - întoarce primul element identificabil prin selectorul ‘selector’.

const cardParagraph = document.querySelector('#card > p');
console.log(cardParagraph);

// 6. Accesarea tuturor elementelor după orice selector CSS valid:
//document.querySelectorAll(‘selector’); - întoarce toate elementele identificabile prin selectorul ‘selector’.

const allTodos = document.querySelectorAll('#card > ol > .todo-item');
console.log(allTodos);
console.log(allTodos[0].textContent);
console.log(allTodos[0].innerText);

// Manipulate the DOM

// 1. textContent și innerHTML: 
//Aceste proprietăți permit accesarea și modificarea conținutului text al unui element. textContent returnează sau setează doar textul, în timp ce innerHTML permite lucrul cu conținut HTML.

const p = document.querySelector('p');
p.textContent = 'This was added with JS';

const footer = document.querySelector('footer');
const author = 'John Doe';
footer.innerHTML = `<strong>Author:</strong><span>${author}</span>`;

const posts = [
    {
        author: 'Nick',
        todos: ['do 1', 'do 2'],
        comment: 'My comment',
        title: 'card 1'
    },
    {
        author: 'Nick',
        todos: ['do 1', 'do 2'],
        comment: 'My comment',
        title: 'card 2',
    },
    {
        author: 'Nick',
        todos: ['do 1', 'do 2'],
        comment: 'My comment',
        title: 'card 3'
    }
];

const body = document.querySelector('body');
let htmlContent = '';
for (const post of posts) {
    const card = `<article class="card">
    <p>${post.title}</p>
    
    <ol>
        
        ${post.todos.map((el) => `<li class="todo-item">` + el +`</li>`)}
    </ol>
    
    <label for="comment">Comment</label>
    <input type="text" id="comment" name="comment" value ="${post.comment}>
    <footer></footer>
    </article>`

    htmlContent += card;
}

body.innerHTML = htmlContent;
//body.textContent = htmlContent;

// innerText vs textContent
const firstp = document.querySelector('p');
console.log(firstp);
console.log(firstp.textContent);
firstp.textContent = 'ast';
console.log(firstp.innerText);
firstp.innerText = 'asdg';
console.log(firstp.innerText);
console.log(firstp.textContent);

// 2. getAttribute și setAttribute: 
// Aceste metode permit accesarea și modificarea atributelor unui element.


