function load() {
    var error1 = document.getElementById('error-password1')
    var error2 = document.getElementById('error-password2')

    var email = document.getElementById('email')
    email.addEventListener('click', function() {
        email.style.borderColor = 'lightgray' 
        error1.style.display = 'none'
    })
    var password = document.getElementById('password')
    password.addEventListener('click', function() {
        password.style.borderColor = 'lightgray' 
        error2.style.display = 'none'
    })

    var btn = document.getElementById('button')
    btn.addEventListener('click', function(){
        if (email.value == "" && password.value == ""){
            email.style.borderColor = 'rgb(238, 98, 98)' 
            password.style.borderColor = 'rgb(238, 98, 98)' 
            error1.style.display = 'block'
            error2.style.display = 'block'

        }else if(email.value == ""){
            email.style.borderColor = 'rgb(238, 98, 98)' 
            error1.style.display = 'block'

        }else if(password.value == ""){
            password.style.borderColor = 'rgb(238, 98, 98)' 
            error2.style.display = 'block'

        }else if(password.value.length < 8){
            password.style.borderColor = 'rgb(238, 98, 98)' 
            error2.style.display = 'block'
        }else{
            window.location.href = "Assets/HTML/logged.html"
        }
    })
}