var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var currentDate = new Date().getTime();

var EidDay1 = new Date("july 10, 2022").getTime();
var EidDayName1 = new Date("july 10, 2022").getDay();
var EidDate1 = new Date("july 10, 2022").getDate();


var EidDay2 = new Date("july 11, 2022").getTime();
var EidDayName2 = new Date("july 11, 2022").getDay();
var EidDate2 = new Date("july 11, 2022").getDate();



var EidDay3 = new Date("july 12, 2022").getTime();
var EidDayName3 = new Date("july 12, 2022").getDay();
var EidDate3 = new Date("july 12, 2022").getDate();


var EidDay4 = new Date("july 12, 2022 11:00:00").getTime();




console.log(days[EidDayName1] + " " + EidDate1)
console.log(days[EidDayName2] + " " + EidDate2)
console.log(days[EidDayName3] + " " + EidDate3)



// =======================================================
// Calculate the differnce between current and Eid time 
// -----------------------------------------------------

var diff1 = EidDay1 - currentDate;
var diff2 = EidDay2 - currentDate;
var diff3 = EidDay3 - currentDate;
var diff4 = EidDay4 - currentDate;


// ------------------------------
// Days 
// ------------------------
var firstEid = Math.round(diff1 / (1000 * 60 * 60 * 24))
var SecEid = Math.round(diff2 / (1000 * 60 * 60 * 24))
var thirdEid = Math.round(diff3 / (1000 * 60 * 60 * 24))

var eid1 = document.getElementById('eid1');
var ganty = document.getElementById('ganty');

eid1.innerHTML = `<h3>پاکستان میں پہلی  عیدالاضحیٰ  ${firstEid}دن بعد منائی جائے گی</h3>`;

var eid2 = document.getElementById('eid2');
var gant2 = document.getElementById('gant2');
eid2.innerHTML = `<h3>پاکستان میں دوسری  عیدالاضحیٰ  ${SecEid}دن بعد منائی جائے گی</h3>`;

var eid3 = document.getElementById('eid3');
var gant3 = document.getElementById('gant3');
eid3.innerHTML = `<h3>پاکستان میں تیسری  عیدالاضحیٰ  ${thirdEid}دن بعد منائی جائے گی</h3>`;


// ---------------------
// Hours 
// --------------------

var firstEidHours = Math.ceil(diff1 / (1000 * 60 * 60))
var SecEidHours = Math.ceil(diff2 / (1000 * 60 * 60))
var thirdEidHours = Math.ceil(diff3 / (1000 * 60 * 60))


// -------------------------
// Last Time of Qurbani 
// -----------------------

var LastDayQurbani = Math.ceil(diff4 / (1000 * 60 * 60))

var note = document.getElementById('note');
note.innerHTML = `<strong>*خیال رہے اپنے جانواروں کی قربانی تیسری عید کے طلوع آفتاب سے پہلے کر لن جو ${LastDayQurbani}گھنٹے ہوتے ہیں</b>`

// -------------------------
// Mintues 
// -----------------------

var firstEidMinutes = Math.ceil(diff1 / (1000 * 60))
var SecEidMintues = Math.ceil(diff2 / (1000 * 60))
var thirdEidMintues = Math.ceil(diff3 / (1000 * 60))

ganty.innerHTML = `<p>اور یہ   ${firstEidHours}گھنٹے ہوتے ہیں, ${firstEidMinutes}منٹس ہوتے ہیں</p>`;
gant2.innerHTML = `<p>اور یہ   ${SecEidHours}گھنٹے ہوتے ہیں, ${SecEidMintues}منٹس ہوتے ہیں</p>`;
gant3.innerHTML = `<p>اور یہ   ${thirdEidHours}گھنٹے ہوتے ہیں, ${thirdEidMintues}منٹس ہوتے ہیں</p>`;



if (firstEid === 0) {
    var main = document.getElementById("main");
    main.classList+= " main";

    var box = document.getElementById("box");
    box.classList += " bg block"
    main.innerHTML = `<p class="para" >Eid Mubark</p>`
}
