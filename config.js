function display_form(){
    var button = document.querySelector(".button-slider");
    var form = document.querySelector(".form-sign-in");
    button.addEventListener("click", function(){
        var slider_container = document.querySelector(".slider-container");
        slider_container.setAttribute("style", "display: none");
        form.setAttribute("style", "display: flex !important");
    })
}
display_form()
