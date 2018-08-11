//check of dpecific todos
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event){
    console.log("clicked");
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("#input").keypress(function(event){
 if(event.which === 13){
     var todotext = $(this).val();
     $(this).val(" ");
     $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>");
 };   
})

$(".fa-plus").on("click",function(){
    $("input[type='text']").fadeToggle();
})