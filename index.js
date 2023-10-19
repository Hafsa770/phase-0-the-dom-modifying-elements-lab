// Write your code here!

// Remove the <main> with id 'main'
document.querySelector('main').remove();

// Create an <h1> with id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "YOUR-NAME is the champion";
document.body.appendChild(newHeader);
