function findWord() {
    // var str = prompt("Enter your paragraph")
    // var substr = prompt("Enter a word which want to find");
    // var joinNumber = prompt("Enter a word which want to replace:");

    var str = document.getElementById("para").value.toLowerCase();
    var substr = document.getElementById('findWord').value.toLowerCase();
    var joinNumber = document.getElementById("replaceWord").value.toLowerCase();
    var foods = document.getElementById('foods');
    var before = document.getElementById('before');
    var answer = document.getElementById('answer');



    if (str == '') {
        swal("Paragraph Missing");

    }
    else if (substr == '') {
        swal("Find Word Missing");
    }
    else if (joinNumber == '') {
        swal("Replace Word");
    }
    else {
        before.innerHTML = `<span>${str}</span>`

        var index = str.indexOf(substr);

        for (i = 0; i < str.length; i++) {
            if (index !== -1) {
                str = str.split(substr).join(joinNumber);
            }
        }
        foods.innerHTML = `
    
     <ul>
   <li>Find Word is : ${substr}</li>
    <li>Replaced Word is : ${joinNumber}</li>
    </ul>
    <span>${str}</span>`

    answer.classList = "none";
    }
}