
const Job = ({job}) => {
    const {logo, job_title} = job

    return (
        <div>
            <img src={logo} alt="" srcset="" />
            <h1>Job : {job_title}</h1>
        </div>
    );
};

export default Job;