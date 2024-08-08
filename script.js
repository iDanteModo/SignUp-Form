const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const error = document.querySelector('span');
const btn = document.querySelector('button');
const pass = document.querySelectorAll('.pass');
const form = document.querySelector('form');






error.style.display = "none";

function checkPassword() {
    pass.forEach(pass => {
        pass.addEventListener('input', () => {
            if(password.value == confirmPassword.value) {
                password.setCustomValidity('');
                confirmPassword.setCustomValidity('');
                error.style.display = 'none';
                confirm = true;
            }else {
                password.setCustomValidity('invalid');
                confirmPassword.setCustomValidity('invalid');
                error.style.display = 'block';
                confirm = false
            }
        })
        
    });
}


function submit () {
    btn.addEventListener('click', () => {
        if(confirm){
            error.style.display = "none";
            alert('Account Created');
        }else {
            alert("Passwords are not the same!")
            error.style.display = 'block';
            pass.forEach(password => {
                password.setCustomValidity('invalid');
                
            });
            
        }

    

    form.addEventListener('submit', (e) => {
        if (password.value != confirmPassword.value){
            e.preventDefault();
            alert('Passwords must match before submission!');
        }
    })        
    })

}

checkPassword();
submit();



 