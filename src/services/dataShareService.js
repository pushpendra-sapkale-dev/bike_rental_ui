import axios from 'axios';

const API_URL = 'http://localhost:3000';

function sendFeedbackData(obj) {
    return new Promise((res, rej) => {
        const regUrl = API_URL + '/sendfeedback';
        axios.post(regUrl, obj).then((response) => {
            if(response.status == 'Error in sending feedback'){
                rej();
            }
            else{
                res();
            }
        })
    })
}

export {
    sendFeedbackData
}