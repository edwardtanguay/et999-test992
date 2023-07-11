import * as  tools from './tools.js';

const rootElem = document.querySelector('#root');
const btnChangeColorElem = document.querySelector('.btnChangeColor');

// rootElem.innerHTML = 'nnn';
// rootElem.style.backgroundColor = 'yellow';

btnChangeColorElem.addEventListener('click', () => {
	rootElem.style.backgroundColor = 'yellow';
})

const url = 'https://edwardtanguay.vercel.app/share/techBooks.json';

(async () => {
	const response = await fetch(url);
	const techBooks = await response.json();
	console.log(techBooks);
	rootElem.innerHTML = `
		<style>
			ul {
				// background-color: black;
			}
		</style>
		<h2>There are ${techBooks.length} tech books</h2>
		<ul>
		${techBooks.map(techBook => tools.getBook(techBook)).join('')}
		</ul>
		`;
})();