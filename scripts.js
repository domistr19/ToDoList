$('#addtodo').click(()=> {
var input_text=document.getElementById("addtodo-text").value; 
$('ul').append(
    `<li><div class="todocontainer">${input_text}<div><button class="button-trash"></button><button class="button-check"></button></div></div></li>`); 
    $('li:last-child .button-check').click((event) =>{
        $(event.target).toggleClass('button-checked');});

    $('li:last-child .button-check').click((event) =>{
        $(event.target).parent().parent().toggleClass('cross');});    
     
    $('li:last-child .button-trash').click((event) =>{
    $(event.target).parent().parent().toggleClass('button-deleted');});

    $("input").val("");      
    
}); 
    
        
