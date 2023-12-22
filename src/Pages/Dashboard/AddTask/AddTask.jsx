import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import toast from "react-hot-toast";
import { useRef } from "react";

const AddTask = () => {
    const {
        register,
        handleSubmit,
      } = useForm();

      const formRef = useRef(null)

      const Axios = UseAxiosPublic();

      const onSubmit = async (data) => {
        const {taskTitle, taskDescription, TaskDeadlines, taskLevel  } = data;

        const dataPost = {

            taskTitle,
            taskDescription,
            TaskDeadlines,
            taskLevel,
            taskStatus : "todo"

        }
        const res = await Axios.post('/add-task', dataPost)
        if (res) {

            toast.success('Task Added Successfully')

            document.getElementById('form').reset();
            
            
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
                                <input type="text" {...register("taskTitle")} placeholder="Task Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Description</span>
                                </label>
                                <textarea type="text" {...register("taskDescription")} placeholder="Task Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Deadlines</span>
                                </label>
                                <input type="Date" {...register("TaskDeadlines")} placeholder="Task Deadlines" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Priority</span>
                                </label>
                                <select {...register("taskLevel")} className="select select-bordered w-full max-w-xs">
                                    <option>Low</option>
                                    <option>Moderate</option>
                                    <option>High</option>
                                </select>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;