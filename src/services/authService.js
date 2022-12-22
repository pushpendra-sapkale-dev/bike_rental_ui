import axios from 'axios';

// const API_URL = 'http://localhost:3000';

// For Production
const API_URL = 'https://bike-rental-server.cyclic.app/';

const loginCheckOnly = () => localStorage.getItem('token');

const getUserId = () => localStorage.getItem('id');

function logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    // window.location.reload();
}

function loginCheck(obj, modalCloseBtn, event) {
    return new Promise((res, rej) => {
        const regUrl = `${API_URL}/login`;
        axios.post(regUrl, obj).then((response) => {
            if (response.data.status === 'Email is not exists') {
                alert('Email is not exist !!');
                rej();
            }
            else {
                if (response.data.status === 'Password is incorrect !!') {
                    alert('Password is incorrect !!');
                    rej();
                }
                else {
                    if (response.data.status === 'successfully logged in') {
                        modalCloseBtn.current.click();
                        event.target.reset();
                        localStorage.setItem('token', response.data.auth);
                        localStorage.setItem('id', response.data.user_id);
                        res();
                    }
                    else {
                        alert('Error in login please check after some time');
                        rej();
                    }
                }
            }
        })
    });
}

function signUpCheck(obj, modalSignUpCloseBtn, event) {
    return new Promise((res, rej) => {
        if (obj.password === obj.confirmpassword) {
            const regUrl = `${API_URL}/register`;
            axios.post(regUrl, obj).then((response) => {
                console.log(response)
                if (response.data.status === 'Email already exist !!') {
                    alert('Email address is already exist !!');
                    rej();
                }
                else {
                    if (response.data.status === 'User created successfully') {
                        localStorage.setItem('token', response.data.auth);
                        localStorage.setItem('id', response.data.user_id);
                        modalSignUpCloseBtn.current.click();
                        event.target.reset();
                        res();
                    }
                    else {
                        alert('failed in signup');
                        rej();
                    }
                }
            })
        }
        else {
            alert('password and confirm password should be same');
            rej();
        }
    })
}

export {
    loginCheck,
    signUpCheck,
    loginCheckOnly,
    logOut,
    getUserId
}