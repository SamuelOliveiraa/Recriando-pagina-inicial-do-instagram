function load() {
    function active(n, msg, color,b){
        n.style.borderColor = color
        msg.style.display = b
    }
    var error1 = document.getElementById('error-password1')
    var error2 = document.getElementById('error-password2')

    var email = document.getElementById('email')
    email.addEventListener('click', function() {
        active(email, error1, 'lightgray', 'none' )
    })
    var password = document.getElementById('password')
    password.addEventListener('click', function() {
        active(password, error2,  'lightgray', 'none')
    })

    var btn = document.getElementById('button')
    btn.addEventListener('click', function(){
        if (email.value == "" && password.value == ""){
            active(email, error1, 'rgb(238, 98, 98)' , 'block')
            active(password, error2, 'rgb(238, 98, 98)' , 'block')

        }else if(email.value == ""){
            active(email, error1, 'rgb(238, 98, 98)' , 'block')
        }else if(password.value == ""){
            active(password, error2, 'rgb(238, 98, 98)' , 'block')
        }else if(password.value.length < 8){
            active(password, error2, 'rgb(238, 98, 98)' , 'block')
        }else{
            window.location.href = "Assets/HTML/logged.html"
        }
    })
}