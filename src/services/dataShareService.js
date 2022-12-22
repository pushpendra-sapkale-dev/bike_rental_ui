import axios from 'axios';

const API_URL = 'http://localhost:3000';

function sendFeedbackData(obj) {
    return new Promise((res, rej) => {
        const regUrl = API_URL + '/send-feedback';
        axios.post(regUrl, obj).then((response) => {
            if (response.status === 'Error in sending feedback') {
                rej(response.status);
            }
            else {
                res();
            }
        })
    })
}

function bookBike(obj) {
    return new Promise((res, rej) => {
        const regUrl = API_URL + '/book-bike';
        axios.post(regUrl, obj).then((response) => {
            if (response.status === 'Error in bike booking') {
                rej();
            }
            else {
                res();
            }
        });
    });
}

// We Are Sending Query Params Here
function getManageBookingList(obj) {
    return new Promise((res, rej) => {
        const regUrl = API_URL + '/get-booking-details';
        axios.get(regUrl, { params: obj }).then((response) => {
            res(response.data.data);
        }).catch(() => {
            rej();
        })
    });
}

function cancleBooking(id) {
    return new Promise((res, rej) => {
        const reqUrl = API_URL + '/cancle-booking';
        axios.delete(reqUrl, { data: { id: id } }).then((response) => {
            if (response.status === 'Error') {
                rej();
            }
            else {
                res();  
            }
        });
    });
}

export {
    sendFeedbackData,
    bookBike,
    getManageBookingList,
    cancleBooking
}