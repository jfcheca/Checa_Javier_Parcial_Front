import React from 'react'
import { useState } from 'react'
import Card from './Card';
const Form = () => {
    const [user, setUser] = useState({name: "", apellido:"", edad:"",})

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const handle = (event) =>{
        event.preventDefault();
        if(user.name.length>3 && user.name.startsWith(" ") == false && user.apellido.length>6){
            setShow(true)
            setError(false)
        }else{
            setError(true)
        }
    }

  return (

<div>
    <form onSubmit={handle}>
        <label >Nombre: </label>
        <input type="text" value={user.name} onChange={(event)=>{ setUser({...user, name: event.target.value }) }}/>
        <label >Apellido: </label>
        <input type="text" value={user.apellido} onChange={(event)=>{ setUser({...user, apellido: event.target.value }) }}/>
        <label >Edad: </label>
        <input type="text" value={user.edad} onChange={(event)=>{ setUser({...user, edad: event.target.value }) }}/>
        <button>Enviar</button>
        {error && "Por favor chequee que la información sea correcta"}
       </form>
       {show && <Card nombre={user.name} apellido={user.apellido} edad={user.edad}/>}
</div>

    )}


export default Form