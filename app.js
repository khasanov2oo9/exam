let son12 = document.getElementById("son1");
let son23 = document.getElementById("son2");
let amal1= document.getElementById("amal");
let natijalar= document.getElementById("natija");

let son1 = +prompt("1-sonni kiriting:");
let amal = prompt(`Tanlang:
    1) + 
    2) - 
    3) * 
    4) /`);
let son2 = +prompt("2-sonni kiriting:");

let natija;

if (amal === "1") {
    amal =  "+";
    natija = son1 + son2
} 
else if (amal === "2") {
    amal =  "-";
    natija = son1 - son2
} 
else if (amal === "3") {
     amal =  "*";
    natija = son1 * son2

} 
else if (amal === "4") {

    if (son2 !== 0) {
             amal =  "/";
        natija = son1 / son2
    } else {
    }
} else {
};

son12.innerHTML = `${son1}`;
amal1.innerHTML = `${amal}`;
son23.innerHTML = `${son2}`;
natijalar.innerHTML = `${natija}`;
