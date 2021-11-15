function applyTensPlaceRowChanges() {
    document.getElementById("hoursTensBitOne").style.gridArea = "3/1/3/1";
    document.getElementById("hoursTensBitZero").style.gridArea = "4/1/4/1";

    document.getElementById("minutesTensBitTwo").style.gridArea="2/3/2/3";
    document.getElementById("minutesTensBitOne").style.gridArea = "3/3/3/3";
    document.getElementById("minutesTensBitZero").style.gridArea = "4/3/4/3";

    document.getElementById("secondsTensBitOne").style.gridArea="3/5/3/5";
    document.getElementById("secondsTensBitTwo").style.gridArea="4/5/4/5"
}

function applyOnesPlaceRowChanges() {
    document.getElementById("minutesOnesBitThree").style.gridArea="1/4/1/4";
    document.getElementById("minutesOnesBitTwo").style.gridArea="2/4/2/4";
    document.getElementById("minutesOnesBitOne").style.gridArea="3/4/3/4";
    document.getElementById("minutesOnesBitZero").style.gridArea="4/4/4/4";

    document.getElementById("secondsOneBitThree").style.gridArea="1/6/1/6";
    document.getElementById("secondsOneBitTwo").style.gridArea="2/6/2/6";
    document.getElementById("secondsOneBitOne").style.gridArea="3/6/3/6";
    document.getElementById("secondsOneBitZero").style.gridArea="4/6/4/6";
}

function main() {
    applyTensPlaceRowChanges();
    applyOnesPlaceRowChanges();
}

main();
