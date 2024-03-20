document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btc2').addEventListener('click', function () {
        var userInput = document.getElementById('edc1').value;
        var result = convertToShiftedAlphabet(userInput);
        document.getElementById('edc2').value = result;
    });

    document.getElementById('ImgC').addEventListener('click', function () {
        var resultText = document.getElementById('edc2').value;
        var textarea = document.createElement('textarea');
        textarea.value = resultText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Copied!');
    });

    function convertToShiftedAlphabet(input) {
        var result = '';

        for (var i = 0; i < input.length; i++) {
            result += convertToShiftedAlphabetChar(input.charAt(i));
        }

        return result;
    }

    function convertToShiftedAlphabetChar(ch) {
        if ('a' <= ch && ch <= 'z') {
            return String.fromCharCode((ch.charCodeAt(0) - 'a'.charCodeAt(0) - 5 + 26) % 26 + 'a'.charCodeAt(0));
        } else if ('A' <= ch && ch <= 'Z') {
            return String.fromCharCode((ch.charCodeAt(0) - 'A'.charCodeAt(0) - 5 + 26) % 26 + 'A'.charCodeAt(0));
        } else {
            return ch;
        }
    }
});
