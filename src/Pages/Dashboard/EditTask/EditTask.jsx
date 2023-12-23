import { useParams } from "react-router-dom";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const EditTask = () => {
    const {id} = useParams();

     const Axios = UseAxiosPublic();

    const {data, refetch} = useQuery({
        queryKey: ["EditData"],
        queryFn: async ()=>{
                const res = await Axios.get(`/edit-task/${id}`)
                return res;
        }
    }) 

    const {
        register,
        handleSubmit,
      } = useForm();
  
      const onSubmit = async (datas) => {
        const {taskTitle, taskDescription, TaskDeadlines, taskLevel  } = datas;

        const dataPost = {

            taskTitle,
            taskDescription,
            TaskDeadlines,
            taskLevel,
            taskStatus : "todo",

        }
        const res = await Axios.put(`/edited-task/${id}`, dataPost)
        if (res) {

            toast.success('Task Update Successfully')

            document.getElementById('form').reset();
            refetch()
            
            
        }
      }

    return (
        <div>
            <div className="hero min-h-screen w-full ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                        <form id="form" onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Title</span>
                                </label>
                                <input defaultValue={data?.data.taskTitle} type="text" {...register("taskTitle")} placeholder="Task Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Description</span>
                                </label>
                                <textarea defaultValue={data?.data.taskDescription} type="text" {...register("taskDescription")} placeholder="Task Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Deadlines</span>
                                </label>
                                <input defaultValue={data?.data.TaskDeadlines} type="Date" {...register("TaskDeadlines")} placeholder="Task Deadlines" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Priority</span>
                                </label>
                                <select defaultValue={data?.data.taskLevel} {...register("taskLevel")} className="select select-bordered w-full max-w-xs">
                                    <option>Low</option>
                                    <option>Moderate</option>
                                    <option>High</option>
                                </select>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Task</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTask;