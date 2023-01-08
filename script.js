var subscribe = document.getElementById("subscribe");
var carousel = document.getElementById("carouselExampleControls")
subscribe.onclick = function() {
    var popover = document.getElementById("popover-form");
    popover.classList.add("show");
}
carousel.addEventListener("click", function() {
    var popover = document.getElementById("popover-form");
    popover.classList.remove("show");

})

var subscribe1 = document.getElementById("subscribe1");

subscribe1.onclick = function() {
    var popover = document.getElementById("popover-form1");
    popover.classList.add("show");
}
carousel.addEventListener("click", function() {
    var popover = document.getElementById("popover-form1");
    popover.classList.remove("show");

})