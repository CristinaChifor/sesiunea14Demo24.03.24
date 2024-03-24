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
    const article = document.createElement('article');
    article.classList.add('card');
    const card = `
    <p>${post.title}</p>
    
    <ol>
        
        ${post.todos.map((el) => `<li class="todo-item">` + el +`</li>`)}
    </ol>
    
    <label for="comment">Comment</label>
    <input type="text" id="comment" name="comment" value ="${post.comment}>
    <footer>
    <strong>Author:</strong> ${post.author} <span></span>
    </footer>
   `;
   article.innerHTML = card;

   const comm = article.querySelector('input');
   comm.addEventListener('keydown', (event) => {
    console.log('event ', event);
    const key = event.key;
    const numbers = '0123456789';
    if (numbers.includes(key)) {
        event.preventDefault();
        alert('no numbers alloewed');
    }
    
   });

   body.appendChild(article);

    htmlContent += card;
}

//body.innerHTML = htmlContent;
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

const firstInput = document.querySelectorAll('input');
console.log('input: ', firstInput);
console.log('....');

firstInput[0].readOnly = true;

//firstInput[1].setAttribute('readonly', true);

let firstInputValue = firstInput[0].getAttribute('value');
console.log('first value: ', firstInputValue);

// 3. classList 
// Această proprietate este utilă pentru a lucra cu clasele CSS ale unui element. Permite adăugarea, eliminarea sau verificarea claselor.

const allP = document.querySelectorAll('p');
for (const paragraph of allP) {
    paragraph.classList.add('red', 'underline');
}

let index = 0;
for(const paragraph of allP) {
    if (index % 2 > 0) {
        paragraph.classList.remove('red');
    }

    index++;
}

// 4. style
// Această proprietate permite accesarea și modificarea stilurilor CSS ale unui element.

for(const paragraph of allP) {
    paragraph.style.textTransform = 'uppercase';
}

// Crearea unui element

// 1. document.createElement() este folosit pentru a crea un element nou. 
// Acest element este creat, dar nu este încă atașat la nici o parte a DOM-ului

const newParagraph = document.createElement('p');
newParagraph.textContent = 'My new paragraph';
console.log(newParagraph);

// .appendChild(newElement) este folosit pentru a adăuga un element ca ultim copil în elementul ce apelează metoda.

body.appendChild(newParagraph);

const span = document.createElement('span')
span.textContent = ' Altceva';
span.classList.add('red');
newParagraph.appendChild(span);

// Ștergerea unui element

/**
 * 1.Identificarea elementului:
Utilizăm metode precum getElementById, getElementsByClassName, getElementsByTagName, sau querySelector pentru a identifica elementul pe care dorim să-l ștergem.
2. Ștergerea elementului:
Se face prin metoda remove() pentru a șterge un element din DOM.
 */

const allCards = document.querySelectorAll('.card');
allCards[allCards.length - 1].remove();

// Event listeners
/**
 * Event listeners (ascultători de evenimente) sunt funcții care sunt atașate la elemente HTML și care sunt declanșate în momentul în care un anumit eveniment are loc asupra acelui element. 
 * Aceste evenimente pot fi, de exemplu, un clic pe un buton, o tastare apăsată, sau orice altă interacțiune cu utilizatorul.
    addEventListener primește doi parametri: tipul de eveniment și o funcție care se execută atunci când evenimentul are loc.
 */

const interactive = document.getElementById('interactive-text');

const onClick = () => {
    if (interactive.classList.contains('red')) {
        interactive.classList.remove('red');
    } else {
        interactive.classList.add('red');
    }
}

interactive.addEventListener('click', onClick);

// Remove listener
// Dacă dorim să eliminăm un event listener atașat anterior, este important să știm că metoda removeEventListener 
// necesită aceeași funcție de ascultare pe care am folosit-o la adăugarea event listener-ului.




