document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn2').addEventListener('click', function () { // Changed 'btc21' to 'btn2'
        var userInput = document.getElementById('edn1').value; // Changed 'edc11' to 'edn1'
        var result = convertToShiftedAlphabet(userInput);
        document.getElementById('edn2').value = result; // Changed 'edc21' to 'edn2'
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
            return String.fromCharCode((ch.charCodeAt(0) - 'a'.charCodeAt(0) + 5 + 26) % 26 + 'a'.charCodeAt(0));
        } else if ('A' <= ch && ch <= 'Z') {
            return String.fromCharCode((ch.charCodeAt(0) - 'A'.charCodeAt(0) + 5 + 26) % 26 + 'A'.charCodeAt(0));
        } else {
            return ch;
        }
    }
});
