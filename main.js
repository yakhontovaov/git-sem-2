<<<<<<< HEAD
(function(){
    let countSpaces = function(text) {
        let matches = text.matchAll(/\s/g);
        let count = 0;
        for(let match of matches) {
            count++;
        }
        return count;
    }

    let changeButtonsStatus = function(enable) {
        let countButton = document.querySelector('#count-button');
        let resetButton = document.querySelector('#reset-button');
        if (enable) {
            countButton.removeAttribute('disabled');
            resetButton.removeAttribute('disabled');
        } else {
            countButton.setAttribute('disabled', 'disabled');
            resetButton.setAttribute('disabled', 'disabled');
        }
    }

    document.addEventListener('DOMContentLoaded', function(){
        let textArea = document.querySelector('#text');
        let result = document.querySelector('#result');
        let countButton = document.querySelector('#count-button');
        let resetButton = document.querySelector('#reset-button');

        countButton.addEventListener('click', function(){
            let text = textArea.value;
            let withoutSpaces = text.length - countSpaces(text);
            result.innerHTML = '<b>Длина текста:</b> ' +
                text.length + ' символов<br>' +
                '<b>Без пробелов:</b> ' + withoutSpaces + '<br>';
        });

        textArea.addEventListener('keyup', function(){
<<<<<<< HEAD
            changeButtonsStatus(textArea.value.length > 0);
=======
            if (textArea.value.length > 0) {
                countButton.removeAttribute('disabled');
            } else {
                countButton.setAttribute('disabled', 'disabled');
            }
>>>>>>> parent of daaa3d3 (reset button enabling/disabling added)
        });

        resetButton.addEventListener('click', function(){
            textArea.value = '';
<<<<<<< HEAD
            changeButtonsStatus(false);
=======
>>>>>>> parent of daaa3d3 (reset button enabling/disabling added)
        });
=======
document.addEventListener('DOMContentLoaded', function(){
    let textArea = document.querySelector('#text');
    let button = document.querySelector('#count-button');
    button.addEventListener('click', function(){
        let text = textArea.value;
        alert('Длина текста: ' + text.length + ' символов');
>>>>>>> parent of 1c9f8b8 (adding result field instead of alert)
    });
}());