var mainContainer = document.querySelector("#mainContainer");

var browserTest = document.querySelector(".todo");

//vanilla js event delegation - equivalent to .on(a, b, c)
mainContainer.addEventListener("click", function(e) {
    console.log(e.target.classList.value);
    if (e.target.classList.item(0) === "todo") {
        e.target.classList.toggle("underline");
    }
});

//jquery event delegation
$("#addTask").on("click", function() {
    $("input").toggleClass("hideInput");
})

$("#mainContainer").on("mouseenter", ".todoContainer", function() {
    $(this).children().first().css("width", "40px");
});

$("#mainContainer").on("mouseleave", ".todoContainer", function() {
    $(this).children().first().css("width", "0");
});


$("input").keypress(function(e) {
    console.log(e.which);
    if (e.which === 13 && $(this).val() != "") {
        var text = $("input").val();
        $("input").val("");
        //vanilla js element creation
        var el = '<span class="trash"><i class="fa fa-trash" aria-hidden="true"></i></span><span class="todo"></span>';
        var divElement = document.createElement("div");
        divElement.classList.add("todoContainer");
        divElement.innerHTML = el;
        mainContainer.appendChild(divElement);
        //Node object seems to be a tree structure - lastchild property can be chained
        //to access elements further down to tree
        mainContainer.lastChild.lastChild.textContent = text;
        document.querySelector(".todoContainer:last-child .trash:first-child").addEventListener("click", function(e) {
            this.parentNode.remove();
            console.log(this.parentNode);
            e.stopPropagation();
        })
    }
});

