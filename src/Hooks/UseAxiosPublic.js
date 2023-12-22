import axios from 'axios';

const UseAxiosPublic = () => {

    const instance = axios.create({
        baseURL: 'http://localhost:5000/api/v1',
        withCredentials: true,
        
    });

    return instance
};

export default UseAxiosPublic;