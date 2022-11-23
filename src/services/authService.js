import axios from 'axios';

const API_URL = 'http://localhost:3000/';

function loginCheckOnly() {
    const check = localStorage.getItem('token');
    return check;
}

function logOut() {
    localStorage.removeItem('token');
    window.location.reload();
}

function loginCheck(obj, modalCloseBtn, event) {
    const regUrl = `${API_URL}/login`;
    axios.post(regUrl, obj).then((response) => {
        if (response.data.status === 'Email is not exists') {
            alert('Email is not exist !!');
        }
        else {
            if (response.data.status === 'Password is incorrect !!') {
                alert('Password is incorrect !!')
            }
            else {
                if (response.data.status === 'successfully logged in') {
                    modalCloseBtn.current.click();
                    event.target.reset();
                    localStorage.setItem('token', response.data.auth);
                }
                else {
                    alert('Error in login please check after some time')
                }
            }
        }
    })
}

function signUpCheck(obj, modalSignUpCloseBtn, event) {
    if (obj.password === obj.confirmpassword) {
        const regUrl = `${API_URL}/register`;
        axios.post(regUrl, obj).then((response) => {
            console.log(response)
            if (response.data.status === 'Email already exist !!') {
                alert('Email address is already exist !!');
            }
            else {
                if (response.data.status === 'User created successfully') {
                    localStorage.setItem('token', response.data.auth);
                    modalSignUpCloseBtn.current.click();
                    event.target.reset();
                }
                else {
                    alert('failed in signup');
                }
            }
        })
    }
    else {
        alert('password and confirm password should be same');
    }
}

export {
    loginCheck,
    signUpCheck,
    loginCheckOnly,
    logOut
}