import axios from '../base';

function verificationCode() {
    return axios({
      url: `/verificationCode`,
      method: 'get'
    });
}
  
function register(data) {
    return axios({
      url: `/users?vid=${data.vid}&value=${data.value}`,
      method: 'post',
      data: data.userInfo
    });
}
  
function login(data) {
    return axios({
      url: `/users/token?vid=${data.vid}&value=${data.value}`,
      method: 'post',
      data: data.userInfo
    });
}

export {
    verificationCode,
    register,
    login
}