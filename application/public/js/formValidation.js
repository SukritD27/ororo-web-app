document.getElementById('username').addEventListener('input', function(ev) {
    var userInput = ev.target;
    var username = userInput.value;

    if(username.length < 3){
        userInput.setAttribute("class", "invalid-input");
        
    }else{
        userInput.setAttribute("class", "valid-input");
    }
})

document.getElementById('registration').addEventListener('button', function(ev){
    ev.preventDefault;

    var goodData = false;

    // if(goodData){
    //     ev.target.submit();
    // }else{ 
    //     return;
    // }
    
})