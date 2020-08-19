const state = {
  loginBoolean: false,
  user: JSON.parse(localStorage.getItem('user')) || {},
};

export default state;