import axios from 'axios'

const handleStatus = (res) => {
    return res.data
}

const config = {
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
};

const handleResponse = (res) => {
    if (res.result === 'success') {
        return Promise.resolve(res.data)
    } else {
        return res.data != null ? Promise.reject(res.data) : Promise.reject(res)
    }
}

const authConfig = () => {
    //let config = {};
    //config.headers = {};//config.headers || { contentType: 'application/json; charset=utf-8;'};
    //let authData = localStorage.getItem('authorization');
    // if (authData) {
    //     //config.headers.Authorization = 'Bearer' + authData; 
    //     config.headers = 'RequestVerificationToken';
    // }
    //config.headers.Authorization = 'RequestVerificationToken';
    config.headers = {"RequestVerificationToken": "4D2A355F-78FE-4259-8F4C-1999F1D0DE64:68CEC4F4-BEB5-411C-B86A-9A3CDB6E1708"};
    return config
};

export default {
    post(url, params) {
        url =  url

        return axios
            .post(url, params)
            .then(handleStatus)
    },

    get(url){
        url = url
        
        return axios
            .get(url, authConfig())
            .then(handleStatus)
    }
}




