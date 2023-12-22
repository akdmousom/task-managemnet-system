const AllTask = () => {
    return (
        <div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-info-content text-white h-auto font-bold">

                <h1>Todo</h1>

            </div>
            <div className="bg-warning text-black h-auto font-bold">

                <h1>Ongoing</h1>

                <li className="list-none">1</li>
                <li className="list-none">1</li>
                <li className="list-none">1</li>
                <li className="list-none">1</li>
                <li className="list-none">1</li>
                <li className="list-none">1</li>

            </div>
            <div className="bg-primary text-black h-auto font-bold">

                <h1>Completed</h1>

            </div>
        </div>
        </div>
    );
};

export default AllTask;