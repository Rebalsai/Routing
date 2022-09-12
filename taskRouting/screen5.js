import { Link } from "react-router-dom";

function App1 (){


    let user = [
        {name:"venkat",id:17850136},
        {name:"upendra",id:174013},
        {name:"divya",id:17151194},
        {name:"naresh",id:174769},
    ]
    return (
        <>
        Welcome To Students id
        {
            user.map((val)=>
            <div><Link to={"/screen5/"+val.id}>{val.name}</Link></div>)
        }
        </>
    )
}
export default App1;