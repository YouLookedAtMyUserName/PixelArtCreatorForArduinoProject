function ChangePixelColor(W, H, R, G, B) {
    let CellName = `Cell${W}${H}`
    let Color = `rgb(${R}, ${G}, ${B})`
    document.getElementById(CellName).style.backgroundColor = Color;
}

document.getElementById("APPLY").addEventListener("click", function() {
    let W = document.getElementById("WTEXTBOX").value
    let H = document.getElementById("HTEXTBOX").value
    let R = document.getElementById("RTEXTBOX").value
    let G = document.getElementById("GTEXTBOX").value
    let B = document.getElementById("BTEXTBOX").value
    ChangePixelColor(W-1, H-1, R, G, B)
})

function GetPixel(Column, Row) {
    let CellName = `Cell${Column}${Row}`
    var rgb = window.getComputedStyle(document.getElementById(CellName)).backgroundColor;
    rgb = rgb.replace(/[^\d,]/g, '').split(',');
    return `{${rgb[0]}, ${rgb[1]}, ${rgb[2]}}`
}

function GetRow(Row) {
    let CONSOLELOG = "{"
    CONSOLELOG += GetPixel(0, Row) + ","
    CONSOLELOG += GetPixel(1, Row) + ","
    CONSOLELOG += GetPixel(2, Row) + ","
    CONSOLELOG += GetPixel(3, Row) + ","
    CONSOLELOG += GetPixel(4, Row) + ","
    CONSOLELOG += GetPixel(5, Row) + ","
    CONSOLELOG += GetPixel(6, Row) + ","
    CONSOLELOG += GetPixel(7, Row) + ","
    CONSOLELOG += GetPixel(8, Row) + ","
    CONSOLELOG += GetPixel(9, Row) + "}"
    return CONSOLELOG
}

document.getElementById("TABLEINATOR").addEventListener("click", function() {
    let LOG = "{"
    LOG += GetRow(0) + ","
    LOG += GetRow(1) + ","
    LOG += GetRow(2) + ","
    LOG += GetRow(3) + ","
    LOG += GetRow(4) + ","
    LOG += GetRow(5) + ","
    LOG += GetRow(6) + ","
    LOG += GetRow(7) + ","
    LOG += GetRow(8) + ","
    LOG += GetRow(9) + "};"
    console.log(LOG)
    navigator.clipboard.writeText(LOG)
    alert("Copied")
})