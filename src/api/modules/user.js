import axios from '../base';

  
function register(data) {
    return axios({
      url: `Product/Person/register`,
      method: 'post',
      data: data.userInfo
    });
}
  
function login(data) {
    return axios({
      url: `Product/Person/register`,
      method: 'post',
      data: data.userInfo
    });
}

export {
    register,
    login
}