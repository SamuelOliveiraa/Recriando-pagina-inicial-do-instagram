function load() {
    function active(n, msg, color,b){
        n.style.borderColor = color
        msg.style.display = b
    }
    var error1 = document.getElementById('error-password1')
    var error2 = document.getElementById('error-password2')
    var error3 = document.getElementById('error-password3')
    var error4 = document.getElementById('error-password4')
    
    var tel = document.getElementById('tel')
    tel.addEventListener('click', function() {
        active(tel, error1, 'lightgray', 'none')
    })

    var fullName = document.getElementById('fullName')
    fullName.addEventListener('click', function() {
        active(fullName, error2, 'lightgray', 'none')
    })

    var name = document.getElementById('name')
    name.addEventListener('click', function() {
        active(name, error3, 'lightgray', 'none')
    })

    var password = document.getElementById('password')
    password.addEventListener('click', function() {
        active(password, error4, 'lightgray', 'none')
    })

    var btn = document.getElementById('btn')
    btn.addEventListener('click', function(){
        if(password.value == "" && tel.value == "" && fullName.value == "" && name.value == ""){
            active(tel, error1, 'rgb(238, 98, 98)', 'block')
            active(fullName, error2, 'rgb(238, 98, 98)', 'block')
            active(name, error3, 'rgb(238, 98, 98)', 'block')
            active(password, error4, 'rgb(238, 98, 98)', 'block')

        }else if(tel.value == "" && fullName.value == "" && name.value == ""){
            active(tel, error1, 'rgb(238, 98, 98)', 'block')
            active(fullName, error2, 'rgb(238, 98, 98)', 'block')
            active(name, error3, 'rgb(238, 98, 98)', 'block')

        }else if(fullName.value == "" && name.value == "" && password.value == ""){
            active(fullName, error2, 'rgb(238, 98, 98)', 'block')
            active(name, error3, 'rgb(238, 98, 98)', 'block')
            active(password, error4, 'rgb(238, 98, 98)', 'block')

        }else if(tel.value == "" && name.value == "" && password.value == ""){
            active(tel, error1, 'rgb(238, 98, 98)', 'block')
            active(name, error3, 'rgb(238, 98, 98)', 'block')
            active(password, error4, 'rgb(238, 98, 98)', 'block')
            
        }else if(tel.value == "" && fullName.value == "" && password.value == ""){
            active(tel, error1, 'rgb(238, 98, 98)', 'block')
            active(fullName, error2, 'rgb(238, 98, 98)', 'block')
            active(password, error4, 'rgb(238, 98, 98)', 'block')

        }else if(tel.value == "" && fullName.value == ""){
            active(tel, error1, 'rgb(238, 98, 98)', 'block')
            active(fullName, error2, 'rgb(238, 98, 98)', 'block')

        }else if(tel.value == "" && name.value == ""){
            active(tel, error1, 'rgb(238, 98, 98)', 'block')
            active(name, error3, 'rgb(238, 98, 98)', 'block')

        }else if(tel.value == "" && password.value == ""){
            active(tel, error1, 'rgb(238, 98, 98)', 'block')
            active(password, error4, 'rgb(238, 98, 98)', 'block')

        }else if(fullName.value == "" && name.value == ""){
            active(fullName, error2, 'rgb(238, 98, 98)', 'block')
            active(name, error3, 'rgb(238, 98, 98)', 'block')

        }else if(fullName.value == "" && password.value == ""){
            active(fullName, error2, 'rgb(238, 98, 98)', 'block')
            active(password, error4, 'rgb(238, 98, 98)', 'block')

        }else if(name.value == "" && password.value == ""){
            active(name, error3, 'rgb(238, 98, 98)', 'block')
            active(password, error4, 'rgb(238, 98, 98)', 'block')

        }else if(tel.value == ""){
            active(tel, error1, 'rgb(238, 98, 98)', 'block')

        }else if(!isNaN(tel.value) == false){
            active(tel, error1, 'rgb(238, 98, 98)', 'block')
        }else if(fullName.value == ""){
            active(fullName, error2, 'rgb(238, 98, 98)', 'block')

        }else if(name.value == ""){
            active(name, error3, 'rgb(238, 98, 98)', 'block')

        }else if(password.value == ""){
            active(password, error4, 'rgb(238, 98, 98)', 'block')

        }else if( password.value.length < 8 && tel.value.length < 11) {
            active(tel, error1, 'rgb(238, 98, 98)', 'block')
            active(password, error4, 'rgb(238, 98, 98)', 'block')
        
        }else if(tel.value.length < 11){
            active(tel, error1, 'rgb(238, 98, 98)', 'block')
        
        }else if(password.value.length < 8){
            active(password, error4, 'rgb(238, 98, 98)', 'block')

        }else{
            window.location.href = "../../index.html"
        }
    })
}