var imgcar1 = "Maverick01.jpg"
var imgcar2 = "Maverick02.jpeg"
var imgcar3 = "Maverick03.jpeg"
var imgcar4 = "Maverick04.jpeg"

function img1click() {
    document.getElementById("principal").src = imgcar2
    document.getElementById("thumb1").src = imgcar1
    let trade = imgcar1
    imgcar1 = imgcar2
    imgcar2 = trade

}

function img2click() {
    document.getElementById("principal").src = imgcar3
    document.getElementById("thumb2").src = imgcar1
    let trade = imgcar1
    imgcar1 = imgcar3
    imgcar3 = trade
}

function img3click() {
    document.getElementById("principal").src = imgcar4
    document.getElementById("thumb3").src = imgcar1
    let trade = imgcar1
    imgcar1 = imgcar4
    imgcar4 = trade
}