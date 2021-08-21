function load() {
    function active(n, msg){
        n.style.borderColor = 'rgb(238, 98, 98)'
        msg.style.display = 'block'
    }
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
        
        if(password.value == "" && tel.value == "" && fullName.value == "" && name.value == ""){
            active(tel, error1)
            active(fullName, error2)
            active(name, error3)
            active(password, error4)

        }else if(tel.value == "" && fullName.value == "" && name.value == ""){
            active(tel, error1)
            active(fullName, error2)
            active(name, error3)

        }else if(fullName.value == "" && name.value == "" && password.value == ""){
            active(fullName, error2)
            active(name, error3)
            active(password, error4)

        }else if(tel.value == "" && name.value == "" && password.value == ""){
            active(tel, error1)
            active(name, error3)
            active(password, error4)
            
        }else if(tel.value == "" && fullName.value == "" && password.value == ""){
            active(tel, error1)
            active(fullName, error2)
            active(password, error4)

        }
        else if(tel.value == ""){
            active1(tel, error1)

        }else if(tel.value == "" && fullName.value == ""){
            active(tel, error1)
            active(fullName, error2)

        }else if(tel.value == "" && name.value == ""){
            active(tel, error1)
            active(name, error3)

        }else if(tel.value == "" && password.value == ""){
            active(tel, error1)
            active(password, error4)

        }else if(fullName.value == ""){
            fulName.style.borderColor = 'rgb(238, 98, 98)'
            error2.style.display = 'block'

        }else if(fullName.value == "" && name.value == ""){
            fullName.style.borderColor = 'rgb(238, 98, 98)'
            name.style.borderColor = 'rgb(238, 98, 98)'

            error2.style.display = 'block'
            error3.style.display = 'block'

        }else if(fullName.value == "" && password.value == ""){
            fullName.style.borderColor = 'rgb(238, 98, 98)'
            password.style.borderColor = 'rgb(238, 98, 98)'

            error2.style.display = 'block'
            error4.style.display = 'block'

        }else if(name.value == ""){
            name.style.borderColor = 'rgb(238, 98, 98)'
            error3.style.display = 'block'

        }else if(name.value == "" && password.value == ""){
            name.style.borderColor = 'rgb(238, 98, 98)'
            password.style.borderColor = 'rgb(238, 98, 98)'

            error3.style.display = 'block'
            error4.style.display = 'block'

        }else if(password.value == ""){
            password.style.borderColor = 'rgb(238, 98, 98)'
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