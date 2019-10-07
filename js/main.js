/*$(document).ready(function (){
    console.log('Init App')
    $('#button').one('click', handleButtonClick)
    $(document).keydown(handleKeyDown)
    $('#main-list').append('<li id="3"> Item 3 </li>')
})

function handleButtonClick(){
    console.log('Hizo click')
}

function handleKeyDown(event){
    console.log('Se presiono una tecla')  
  if(event.which === 32){
    console.log('Se presionó la barra espaciadora')
  }
}

var zero = 0
$(document).keydown(counter)

function counter(event){
    if(event.which === 13){
        zero 
    }
    if(event.which === 38){
        zero++
    }
    if(event.which === 40){
        zero--
    }
    $('#counter').html(zero)
}*/

//Ejercicio//

$(document).ready(function(){
    var nameInput = $('#name-input');
        nameInput.one('blur', validateName);
    
    var emailInput = $('#email-input');
        emailInput.one('blur', validateEmail);
    
    var commentInput = $('#comment-input');
        commentInput.one('blur', validateComment);
    
    var addButton = $('#add-button');
        addButton.on('click', validateAddButton);
    
    function validateEmail(event){
        var inputNode = $(this);
        var valueOfEmail = inputNode.val();
        var validEmailInput = valueOfEmail.indexOf('@') != -1 && valueOfEmail.indexOf('.com') != -1;
        var parentNode = $('.required-field-email');
        var clearField = parentNode.text('');

        if (!valueOfEmail) {
            clearField;
            parentNode.append('<div class="invalid-feedback d-block"> Campo requerido </div>');
        } 
        else {
            if (valueOfEmail.indexOf('@') === -1) {
                clearField;
                parentNode.append('<div class="invalid-feedback d-block"> Debe contener arroba (@) </div>');
            }
            if (valueOfEmail.indexOf('.') === -1) {
                clearField;
                parentNode.append('<div class="invalid-feedback d-block"> Debe contener punto (.) </div>');
            }
            if (validEmailInput){
            parentNode.text('');
            }
        }

        if (event.type === 'blur') {
        inputNode.on('input', validateEmail);
        }

        actualizeClass (validEmailInput, inputNode);
        validateAddButton();
    }
    
    function validateName(event){
        var inputNode = $(this);
        var valueOfName = inputNode.val();
        var validNameInput = typeof valueOfName === 'string' && isNaN(valueOfName) && valueOfName !== "";
        var parentNode = $('.required-field-name');
        var clearField = parentNode.text('');

        if (!validNameInput){
            parentNode.append('<div class="invalid-feedback d-block"> Campo requerido </div>');
        }
        else {
            clearField;
        }

        if (event.type === 'blur') {
            inputNode.on('input', validateName);
        }

        actualizeClass (validNameInput, inputNode);
        validateAddButton();
    }
    
    function validateComment(event){
        var inputNode = $(this);
        var valueOfComment = inputNode.val();
        var validCommentInput = valueOfComment !== "";
        var parentNode = $('.required-field-comment');
        var clearField = parentNode.text('');

        if (!validCommentInput){
            parentNode.append('<div class="invalid-feedback d-block"> Campo requerido </div>');
        }
        else {
            clearField
        }

        if (event.type === 'blur') {
            inputNode.on('input', validateComment);
        }

        actualizeClass (validCommentInput, inputNode);
        validateAddButton();
    }
    
    function actualizeClass (_validInput, _node){
        if (_validInput){
        _node.removeClass("is-invalid");
        _node.addClass("is-valid");    
        }
        else{
            _node.removeClass("is-valid");
            _node.addClass("is-invalid"); 
        }
    }
     
    function validateAddButton(){
        var validName = nameInput.has('is-valid');
        var validEmail = emailInput.has('is-valid');
        var validComment = commentInput.has('is-valid');
    
        if(validName && validEmail && validComment){
            addButton.attr('disabled', false);
        }
    }
    })