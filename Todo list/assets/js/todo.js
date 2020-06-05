            // Check-Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
            //Erasing row when click on remove button  
$("ul").on("click","span" ,function(event){
    $(this).parent().slideUp(600, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type= 'text']").on("keypress", function(evt){
    if(evt.which === 13){
        var NewTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class= 'fas fa-trash-alt'></i></span>"+ NewTodo + "</li>");
    }
});
$(".fa-pencil-alt").on("click", function(){
    $("input[type = 'text']").fadeToggle();
});