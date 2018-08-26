document.getElementById("name").onmouseover = function() {mouseOver()};
document.getElementById("name").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("name").innerHTML = "the website of"
}

function mouseOut() {
    document.getElementById("name").innerHTML = "Emily Pittinos";
}