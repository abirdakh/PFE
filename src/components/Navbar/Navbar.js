import {useState} from 'react';
import "./navbar.css";



function Navbar(props)
{
    const [nom,setNom]=useState("Dakhlaoui");  
    const [newName,setNew]=useState("");
    const [age,setAge] = useState(18);
    
    function changerNom() {
    setNom("DAKHLAOUI");
    }
    
    if(age>=18)
    {
        console.log("Allowed")
    }
    else
    {
        console.log("Not allowed")
    }
}
    changerNom() 

    return (
    
        <div className="nav">
        navbar
        <h2>{props.nom}</h2>
        <h2>{nom}</h2>
        {age>=18?<h1>Allowed</h1> :<h1>Not allowed</h1>  }
        </div>
      );
      
    }
    export default Navbar;



