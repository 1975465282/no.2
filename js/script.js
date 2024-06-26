
window.onload= function () {
    window.onscroll = function () {
        if (window.scrollY > 0) {
            console.log("aa");
            $("#nav").addClass("nav-active")
        }
        else{
            // console.log("到顶部")
            $("#nav").removeClass("nav-active")
        }
    }
$(".navbar-nav a").click(function(){
    $(".navbar-toggler").click()
})
}