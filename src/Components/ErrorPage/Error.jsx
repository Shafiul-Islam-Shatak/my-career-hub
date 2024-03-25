import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1>OPppsss!!!!!!!!!!</h1>
            <button className="btn btn-warning"><Link to= "/">Go back to home</Link></button>
        </div>
    );
};

export default Error;