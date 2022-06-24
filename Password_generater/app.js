var textArray = ["a", "A", "b", "c", "C", "d", "D", "E", 'e', "F", 'f', "g",
    "G", 'H', 'h', 'i', 'I', 'J', 'j', "K", "k", "L", "l", "M",
    "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s",
    "T", "t", "U", 'u', "V", 'v', "W", 'w', "x", "X", 'y', "Y", "Z", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var pass = document.getElementById('pass');
var list = [];

function RandomWords() {
    for (i = 0; i <= 8; i++) {
        var randomNumber = Math.floor(Math.random() * textArray.length);

        var word = textArray[randomNumber];

        list.push(word)

    }

    PasswordGenerated = list.splice(",").join("")

    pass.innerHTML = `<p>${PasswordGenerated}</p>`
}












// for animation background 
