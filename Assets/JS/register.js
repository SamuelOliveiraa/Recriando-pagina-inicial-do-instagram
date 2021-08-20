function load() {
    var error1 = document.getElementById('error-password1')
    var error2 = document.getElementById('error-password2')
    var error3 = document.getElementById('error-password3')
    var error4 = document.getElementById('error-password4')
    
    var tel = document.getElementById('tel')
    tel.addEventListener('click', function() {
        tel.style.borderColor = 'lightgray' 
        error1.style.display = 'none'
    })

    var fullName = document.getElementById('fullName')
    fullName.addEventListener('click', function() {
        fullName.style.borderColor = 'lightgray' 
        error2.style.display = 'none'
    })

    var name = document.getElementById('name')
    name.addEventListener('click', function() {
        name.style.borderColor = 'lightgray' 
        error3.style.display = 'none'
    })

    var password = document.getElementById('password')
    password.addEventListener('click', function() {
        password.style.borderColor = 'lightgray' 
        error4.style.display = 'none'
    })

    var btn = document.getElementById('btn')
    btn.addEventListener('click', function(){
        
        if(password.value == "" || tel.value == "" || fullName == "" || name.value == ""){
            tel.style.borderColor = 'rgb(238, 98, 98)'
            fullName.style.borderColor = 'rgb(238, 98, 98)'
            name.style.borderColor = 'rgb(238, 98, 98)'
            password.style.borderColor = 'rgb(238, 98, 98)'

            error1.style.display = 'block'
            error2.style.display = 'block'
            error3.style.display = 'block'
            error4.style.display = 'block'

        }else if( password.value.length < 8 && tel.value.length < 11) {
            tel.style.borderColor = 'rgb(238, 98, 98)' 
            error1.style.display = 'block'

            password.style.borderColor = 'rgb(238, 98, 98)' 
            error4.style.display = 'block'
        
        }else if(tel.value.length < 11){
            tel.style.borderColor = 'rgb(238, 98, 98)' 
            error1.style.display = 'block'
        
        }else if(password.value.length < 8){
            password.style.borderColor = 'rgb(238, 98, 98)' 
            error4.style.display = 'block'

        }else{
            window.location.href = "../../index.html"
        }
    })
}