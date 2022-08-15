import { useState } from "react";

const Login = () => {
    const [username,setUsername]=useState("")
    return ( <div className="mt-10">
        <input className="text-gray-400 p-5 ml-5 w-11/12 text-xl" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Please Enter a username"/>
        <div className="pt-2"><button className="rounded-lg px-5 py-3 ml-5 text-white mb-5 text-xl" style={{backgroundColor:"green"}}>Submit</button></div>
    </div> );
}
 
export default Login;