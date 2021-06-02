"use strict";

/* 1. Создать функцию, генерирующую шахматную доску. */

const chess = document.querySelector(".chess");

chess.style.background = "green";
chess.style.width = "660px";
chess.style.height = "660px";
chess.style.paddingLeft = "60px";
chess.style.paddingBottom = "60px";
chess.style.margin = "0 auto";
chess.style.display = "flex";
chess.style.flexWrap = "wrap";

function my_initiation() {
    let cell = document.createElement("div");
    cell.className = "cell";
    chess.append(cell);
    cell.style.width = "60px";
    cell.style.height = "60px";
    cell.style.margin = "0px";
    cell.style.padding = "0px";
    cell.style.fontSize = "40px";
    cell.style.fontWeight = "bold";
    cell.style.textAlign = "center";

}

window.onload = my_initiation;

for (var n = 0; (n != 121); n++) {
    window.onload = my_initiation();
};

var masCell = document.querySelectorAll(".cell");
for (var i = 0; (i < masCell.length); i++) {
    var c;
    if (i % 2 == 0) {
        c = "white";
    } else {
        c = "black";
    }
    masCell[i].style.background = c;
    if ((i > 33) && (i < 42)) {
        masCell[i].innerText = "";
    };
    if ((i > 88) && (i < 97)) {
        masCell[i].innerText = "";
    };

    for (var f = 89; (f < 108); f++) {
        masCell[f].style.color = "white";
    }
    for (var f = 0; (f < 22); f++) {
        masCell[f].style.background = "green";
    }
    for (var f = 110; (f < 121); f++) {
        masCell[f].style.background = "green";
    }

    masCell[22].style.background = "green";
    masCell[33].style.background = "green";
    masCell[44].style.background = "green";
    masCell[55].style.background = "green";
    masCell[66].style.background = "green";
    masCell[77].style.background = "green";
    masCell[88].style.background = "green";
    masCell[99].style.background = "green";
    masCell[31].style.background = "green";
    masCell[32].style.background = "green";
    masCell[42].style.background = "green";
    masCell[43].style.background = "green";
    masCell[53].style.background = "green";
    masCell[54].style.background = "green";
    masCell[64].style.background = "green";
    masCell[65].style.background = "green";
    masCell[75].style.background = "green";
    masCell[76].style.background = "green";
    masCell[86].style.background = "green";
    masCell[87].style.background = "green";
    masCell[97].style.background = "green";
    masCell[98].style.background = "green";
    masCell[108].style.background = "green";
    masCell[109].style.background = "green";

    masCell[12].innerText = "A";
    masCell[13].innerText = "B";
    masCell[14].innerText = "C";
    masCell[15].innerText = "D";
    masCell[16].innerText = "E";
    masCell[17].innerText = "F";
    masCell[18].innerText = "G";
    masCell[19].innerText = "H";
    masCell[111].innerText = "A";
    masCell[112].innerText = "B";
    masCell[113].innerText = "C";
    masCell[114].innerText = "D";
    masCell[115].innerText = "E";
    masCell[116].innerText = "F";
    masCell[117].innerText = "G";
    masCell[118].innerText = "H";

    masCell[97].style.color = "black";
    masCell[99].style.color = "black";

    masCell[22].innerText = "1";
    masCell[33].innerText = "2";
    masCell[44].innerText = "3";
    masCell[55].innerText = "4";
    masCell[66].innerText = "5";
    masCell[77].innerText = "6";
    masCell[88].innerText = "7";
    masCell[99].innerText = "8";
    masCell[31].innerText = "1";
    masCell[42].innerText = "2";
    masCell[53].innerText = "3";
    masCell[64].innerText = "4";
    masCell[75].innerText = "5";
    masCell[86].innerText = "6";
    masCell[97].innerText = "7";
    masCell[108].innerText = "8";
}