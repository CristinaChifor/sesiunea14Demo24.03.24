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

