window.onload =function(){
    window.onscroll=function(){
        if(window.scrollY > 455){
             console.log("aaa");
            $("#nav").addClass("nav-active")
        }else{
            $("#nav").removeClass("nav-active")
        }
    }
    $(".navbar-nav a").click(function(){
            $(".navbar-toggler").click()
        })
}