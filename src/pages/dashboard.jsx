import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import api from "../services/api";

function Dashboard(){

const [stats,setStats]=useState(null);

useEffect(()=>{

loadDashboard();

},[]);

async function loadDashboard(){

try{

const data=await api.get("/dashboard");

setStats(data);

}catch(err){

alert(err.message);

}

}

if(!stats){

return <h3 className="text-center mt-5">

Loading...

</h3>

}

return(

<>

<Navbar/>

<div className="container mt-4">

<div className="row">

<div className="col-md-3">

<div className="card text-center">

<div className="card-body">

<h5>Total Items</h5>

<h2>{stats.total_item_types}</h2>

</div>

</div>

</div>

<div className="col-md-3">

<div className="card text-center">

<div className="card-body">

<h5>Total Stock</h5>

<h2>{stats.total_stock}</h2>

</div>

</div>

</div>

<div className="col-md-3">

<div className="card text-center">

<div className="card-body">

<h5>Used</h5>

<h2>{stats.used_stock}</h2>

</div>

</div>

</div>

<div className="col-md-3">

<div className="card text-center">

<div className="card-body">

<h5>Remaining</h5>

<h2>{stats.remaining_stock}</h2>

</div>

</div>

</div>

</div>

</div>

</>

)

}

export default Dashboard;