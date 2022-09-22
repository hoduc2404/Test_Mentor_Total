import axiosClient from './axiosClient';

const userApi = {
  sigUp(params) {
    const url = '/Users/signup';
    return axiosClient.post(url,  params );
  },
};

export default userApi;
