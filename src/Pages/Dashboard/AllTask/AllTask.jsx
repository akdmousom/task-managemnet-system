import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import UseAuth from "../../../Hooks/UseAuth";

const AllTask = () => {
    const {user} = UseAuth();

    const email = user?.email

    const Axios = UseAxiosPublic();

    const allTaskData = async () => {
        const res = await Axios.get(`/all-task?email=${email}`)
        return res;
    }

    const { data } = useQuery({
        queryKey: ['AllTask'],
        queryFn: allTaskData,
    })

    const handleCompleted = async (id) =>{

        const res = await Axios.patch(`/completed-task/${id}`)
        console.log(res);

    }

  




    return (
        <div>
            <div className="grid gap-4">
                <div className=" text-white h-auto font-bold">

                    <h1>Todo</h1>
                    <hr />

                    {
                        data?.data?.map(data => {
                            return <div key={data._id} className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-1" />
                                <div className="collapse-title text-xl font-medium">
                                    {data.taskTitle}
                                </div>
                                <div className="collapse-content">
                                    <p className="my-5">Task Description: {data.taskDescription}</p>
                                    <p>Task Dead Line: {data.TaskDeadlines}</p>
                                    <div className="gap-4 flex">
                                        <button onClick={()=>handleCompleted(data._id)} className="btn btn-success">Completed</button>
                                        <button className="btn btn-warning">Edit</button>
                                        <button className="btn btn-error">Remove</button>
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
                        data?.data?.map(data => {
                            return <div key={data._id} className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-1" />
                                <div className="collapse-title text-xl font-medium">
                                    {data.taskTitle}
                                </div>
                                <div className="collapse-content">
                                    <p className="my-5">Task Description: {data.taskDescription}</p>
                                    <p>Task Dead Line: {data.TaskDeadlines}</p>
                                    <div className="gap-4 flex">
                                        <button className="btn btn-success">Completed</button>
                                        <button className="btn btn-warning">Edit</button>
                                        <button className="btn btn-error">Remove</button>
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
                        data?.data?.map(data => {
                            return <div key={data._id} className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-1" />
                                <div className="collapse-title text-xl font-medium">
                                    {data.taskTitle}
                                </div>
                                <div className="collapse-content">
                                    <p className="my-5">Task Description: {data.taskDescription}</p>
                                    <p>Task Dead Line: {data.TaskDeadlines}</p>
                                    <div className="gap-4 flex">
                                        <button className="btn btn-success">Completed</button>
                                        <button className="btn btn-warning">Edit</button>
                                        <button className="btn btn-error">Remove</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default AllTask;