import { useState } from "react";
import { Link } from "react-router-dom";

function Form (props){

    
    const [data,setData] = useState({Name:"",FatherName:"",Gender:"",Date:"",Email:"",Level:"",Mobile:"",Address:""})
  //  const {Name,FatherName,Gender,Date,Email,Level,Mobile,Address} = data;
  
    const handleKeyUp = (e) => { 
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
      // console.log(e.target.value);
      //  setData(e.target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault();
       console.log(data);
      //document.write(data)

    }

    // const backToHome = () => {
    //     props?.history?.push("/home");
    //   //  console.log("hello")
      
	// };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    return(
        <>
             <h1>Student details</h1>
             <form>
                Full Name : <input type="text" name="Name" onChange={(e)=>handleKeyUp(e)} /><br/><br/>
                Father Name : <input type="text" name="FatherName" onChange={handleKeyUp}/><br/><br/>
                Gender : <input type="radio" name="Gender" value="Male"   onChange={handleKeyUp}/>Male
                         <input type="radio" name="Gender" value="Female"  onChange={handleKeyUp}/>Female<br/><br/>
                Date of Birth : <input type="date" name="Date"  onChange={handleKeyUp}/><br/><br/>
                Email : <input type="text" name="Email" onChange={handleKeyUp}/><br/><br/>
                Level: <select name="Level" onChange={handleKeyUp}>
                    <option>select one</option>
                    <option>HighSchool</option>
                    <option>Inter</option>
                    <option>Degree</option>
                    <option>B.tech</option>
                </select><br/><br/>
                Mobile : <input type="number" name="Mobile" onChange={handleKeyUp}/><br/><br/>
                Address : <textarea name="Address" onChange={handleKeyUp}/><br/><br/>

                <button onClick={(e)=>onSubmit(e)}>Submit</button><br/>
                
             </form>
             <Link to="/screen4">
             <button>BackToHome</button>
             </Link>
             {/* <div>
                {data.map((x)=>{
                    return(
                        <p>{x.Email}</p>
                    )
                })}
             </div> */}
        </>
    )
}
export default Form;


