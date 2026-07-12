import { useEffect,useState } from "react";

import Navbar from "../components/Navbar";

import api from "../services/api";

function Inventory(){

const [items,setItems]=useState([]);

useEffect(()=>{

loadItems();

},[]);

async function loadItems(){

try{

const data=await api.get("/items");

setItems(data);

}catch(err){

alert(err.message);

}

}

return(

<>

<Navbar/>

<div className="container mt-4">

<h2>Inventory</h2>

<table className="table table-striped">

<thead>

<tr>

<th>Name</th>

<th>Total</th>

<th>Used</th>

<th>Remaining</th>

</tr>

</thead>

<tbody>

{items.map(item=>(

<tr key={item.id}>

<td>{item.name}</td>

<td>{item.total_stock}</td>

<td>{item.used_stock}</td>

<td>{item.remaining_stock}</td>

</tr>

))}

</tbody>

</table>

</div>

</>

)

}

export default Inventory;