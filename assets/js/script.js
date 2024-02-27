let count = 0;
const incrementFunction = () => {
    const counterElement = document.getElementById('counter-number');
    count++;
    counterElement.textContent = count;

}

const decrementFunction = () => {
    const counterElement = document.getElementById('counter-number');
    count--;
    counterElement.textContent = count;
}