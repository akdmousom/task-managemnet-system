import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import UseAuth from "../../../Hooks/UseAuth";
import { Link} from "react-router-dom";
import toast from "react-hot-toast";

const AllTask = () => {
    const {user} = UseAuth();

    const email = user?.email

    const Axios = UseAxiosPublic();

    const allTaskData = async () => {
        const res = await Axios.get(`/all-task?email=${email}`)
        return res;
    }

    const { data, refetch } = useQuery({
        queryKey: ['AllTask'],
        queryFn: allTaskData,
    })

    const handleCompleted = async (id) =>{

        const res = await Axios.patch(`/completed-task/${id}`)
        refetch();
        toast.success("Task Status Set To Completed")
        return res

    }
    const handleOngoing = async (id) =>{

        const res = await Axios.patch(`/ongoing-task/${id}`)
        refetch();
        toast.success("Task Status Set To Ongoing")
        return res

    }

    const handleDelete = async (id) =>{
        const res = await Axios.delete(`/delete-task/${id}`)
        refetch()
        toast.success("Task Successfully Deleted")
        return res
    }

    

    

    const allTaskDatas = data?.data?.filter(data => data?.taskStatus === 'todo')
    const completedTask = data?.data?.filter(data => data?.taskStatus === 'completed')
    const ongoingTask = data?.data?.filter(data => data?.taskStatus === 'ongoing')




    return (
        <div className="my-20">
            <div className="grid gap-4">
                <div className=" text-white h-auto font-bold">

                    <h1>Todo</h1>
                    <hr />

                    {
                        allTaskDatas?.map(data => {
                            return <div key={data._id} className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-1" />
                                <div className="collapse-title text-xl font-medium">
                                    {data.taskTitle}
                                </div>
                                <div className="collapse-content">
                                    <p className="my-5">Task Description: {data.taskDescription}</p>
                                    <p>Task Dead Line: {data.TaskDeadlines}</p>
                                    <div className="gap-4 flex">
                                        <button onClick={()=>handleCompleted(data?._id)} className="btn btn-success">Completed</button>
                                        <button onClick={()=>handleOngoing(data?._id)} className="btn btn-warning">Ongoing</button>
                                        <Link to={`/dashboard/edit-task/${data?._id}`}><button className="btn btn-warning">Edit</button></Link>
                                        <button onClick={()=> handleDelete(data?._id)} className="btn btn-error">Remove</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }


                </div>
                <div className=" text-white h-auto font-bold">

                    <h1>Ongoing</h1>
                    <hr />

                    {
                        ongoingTask?.map(data => {
                            return <div key={data._id} className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-1" />
                                <div className="collapse-title text-xl font-medium">
                                    {data.taskTitle}
                                </div>
                                <div className="collapse-content">
                                    <p className="my-5">Task Description: {data.taskDescription}</p>
                                    <p>Task Dead Line: {data.TaskDeadlines}</p>
                                    <div className="gap-4 flex">
                                        <button onClick={()=>handleCompleted(data?._id)} className="btn btn-success">Completed</button>
                                        <Link to={`/dashboard/edit-task/${data?._id}`}><button className="btn btn-warning">Edit</button></Link>
                                        <button onClick={()=> handleDelete(data?._id)} className="btn btn-error">Remove</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className=" text-white h-auto font-bold">

                    <h1>Completed</h1>
                    <hr />
                    {
                        completedTask?.map(data => <div key={data._id} className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl font-medium">
                                {data.taskTitle}
                            </div>
                            <div className="collapse-content">
                                <p className="my-5">Task Description: {data.taskDescription}</p>
                                <p>Task Dead Line: {data.TaskDeadlines}</p>
                                <div className="gap-4 flex">
                                    <button onClick={()=> handleDelete(data?._id)} className="btn btn-error">Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                    }

                </div>
            </div>
        </div>
    );
};

export default AllTask;