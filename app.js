function colorPicker() {
    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);
    return `rgb(${a}, ${b}, ${c})`
}

// const h1 = document.querySelector('h1');


// setInterval(function() {
//     h1.style.color = colorPicker();
// }, 1000);

const letters = document.querySelectorAll('.letter');

setInterval(function() {
    for (let letter of letters) {
        letter.style.color = colorPicker();
    }
}, 1000)

