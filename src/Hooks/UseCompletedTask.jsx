import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosPublic from "./UseAxiosPublic";

const UseCompletedTask = () => {
    const {user} = UseAuth();
    const Axios = UseAxiosPublic();

    const email = user?.email

    const allCompletedTask = async()=>{
        const res = await Axios.get(`/all-task?email=${email}&taskStatus=completed`)
        return res
    }

    const {data} = useQuery({

        queryKey: ['CompletedTask'],
        queryFn: allCompletedTask,

    })
    return data
};

export default UseCompletedTask;