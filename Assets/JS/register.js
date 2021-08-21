function load() {
    function active(n, msg){
        n.style.borderColor = 'rgb(238, 98, 98)'
        msg.style.display = 'block'
    }
    function normal(n, msg){
        n.style.borderColor = 'lightgray'
        msg.style.display = 'none'
    }
    var error1 = document.getElementById('error-password1')
    var error2 = document.getElementById('error-password2')
    var error3 = document.getElementById('error-password3')
    var error4 = document.getElementById('error-password4')
    
    var tel = document.getElementById('tel')
    tel.addEventListener('click', function() {
        normal(tel, error1)
    })

    var fullName = document.getElementById('fullName')
    fullName.addEventListener('click', function() {
        normal(fullName, error2)
    })

    var name = document.getElementById('name')
    name.addEventListener('click', function() {
        normal(name, error3)
    })

    var password = document.getElementById('password')
    password.addEventListener('click', function() {
        normal(password, error4)
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
            active(fullName, error2)

        }else if(fullName.value == "" && name.value == ""){
            active(fullName, error2)
            active(name, error3)

        }else if(fullName.value == "" && password.value == ""){
            active(fullName, error2)
            active(password, error4)

        }else if(name.value == ""){
            active(name, error3)

        }else if(name.value == "" && password.value == ""){
            active(name, error3)
            active(password, error4)

        }else if(password.value == ""){
            active(password, error4)

        }else if( password.value.length < 8 && tel.value.length < 11) {
            active(tel, error1)
            active(password, error4)
        
        }else if(tel.value.length < 11){
            active(tel, error1)
        
        }else if(password.value.length < 8){
            active(password, error4)

        }else{
            window.location.href = "../../index.html"
        }
    })
}