import axios from 'axios';

const UseAxiosPublic = () => {

    const instance = axios.create({
        baseURL: 'https://task-management-system-server-self.vercel.app/api/v1',
        withCredentials: true,
        
    });

    return instance
};

export default UseAxiosPublic;