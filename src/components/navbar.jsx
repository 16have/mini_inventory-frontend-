import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const { logout } = useAuth();

    function handleLogout(){

        logout();

        navigate("/");
    }

    return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<div className="container">

<Link className="navbar-brand" to="/dashboard">

Inventory

</Link>

<div>

<Link
className="btn btn-outline-light me-2"
to="/dashboard">

Dashboard

</Link>

<Link
className="btn btn-outline-light me-2"
to="/inventory">

Inventory

</Link>

<button
className="btn btn-danger"
onClick={handleLogout}>

Logout

</button>

</div>

</div>

</nav>

    )

}

export default Navbar;