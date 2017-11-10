console.log('HELLO FROM OUR CODE');

var root = document.getElementById('root');
var inputField = document.getElementById('input');
var button = document.getElementById('button');

function changeText() {
    root.innerHTML = inputField.value;
};



