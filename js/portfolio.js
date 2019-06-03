function transformNav(navId){
    navId.classList.toggle("change")
}


$(".js-menu-icon").click( function (){
    $(".bar1").toggleClass("change")
    $(".bar2").toggleClass("change")
    $(".bar3").toggleClass("change")
    $("#menu-items").toggleClass("hide", 800, "easeOutQuint")
})
let w= document.documentElement.scrollWidth
function toggleHide(w){
    
    console.log(w);

    if(w > 400){
        $("#menu-items").removeClass("hide")
    }
}

toggleHide();