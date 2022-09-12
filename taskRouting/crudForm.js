
import { useState } from "react";
import { PlusCircleOutlined,EditOutlined,DeleteOutlined,StopOutlined} from '@ant-design/icons'
import { Modal,Button,Form } from 'antd';
import uuid from "react-uuid";
import { Link } from "react-router-dom";

function Crud (){

    const[fName,setFName] = useState("")
    const[lName,setLName] = useState("")
    const[dob,setDob] = useState("")
    const[date,setDate] = useState("")
    const[designation,setDesignation] = useState("")
    const[department,setDepartment] = useState("")
    const[email,setEmail] = useState ("")
    const[number,setNumber] = useState("")
    const[gender,setGender] = useState("")
    const[ex,setEx] = useState("")
    const[list,setList] = useState([])
    const[isChecked,setIsChecked] = useState([])
    const[error,setError] = useState(false)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    const[status,setStatus] = useState("active")
     const [modal,setModal]=useState(false)
     const[datas,setDatas] = useState([])
     const[hide,setHide] = useState(false)


     const [form] = Form.useForm();
    const onSubmit = (e)=>{
      // debugger
        e.preventDefault();
        if(fName.length==0 || lName.length==0 || dob.length==0 || date.length==0 || designation.length==0 || department.length==0 || email.length==0 || number.length==0 || gender.length==0 || ex.length==0){
           setError(true)
           
         }
      // console.log(fName,lName,dob,date,designation,department,email,number,gender,ex)
        const date2 ={id:uuid(),fName,lName,dob,date,designation,department,email,number,gender,ex}
        console.log(date2)
        if(fName&&lName&&dob&&date&&designation&&department&&email&&number&&gender&&ex){
          //  setList((val)=>[...val,date2])
          list.push(date2)
            setFName("")
            setLName("")
            setDob("")
            setDate("")
            setDesignation("")
            setDepartment("")
            setEmail("")
            setNumber("")
            setGender("")   
            setEx("")

     }
     if(date2.fName!=="",date2.lName!=="",date2.dob!=="",date2.date!=="",date2.designation!=="",
     date2.department!=="",date2.email!=="",date2.number!=="",date2.gender!=="",date2.ex!==""){
      setHide(true)
     }
    
    }

    // const DeleteRecord = () =>{
    //     let arrayids = [];
    //     list.forEach(d=>{
    //         if(d.select){
    //             arrayids.push(d.fName) 
    //         }
            
    //     });
    //  console.log(arrayids)
      
    // }

    const EditRecord = (e) =>{
      let isChecked = e.target.value;
      console.log(isChecked)
    }

  // const  handleChange = (e) =>{
  //   debugger
  //       let data= e.target.checked
  //        console.log(data)
  //   }

  const handleDelete = (e) =>{
    // debugger
       const{value,checked} = e.target;
      // console.log(value)
      if(checked){
        setIsChecked([...isChecked,value])
      } else{
           setIsChecked(isChecked.filter((e)=>e!== value));
      }
  }

  const allDelete = (index)=>{
    // debugger;
   // alert("delete")
  // console.log(isChecked);
  //isChecked.splice(index,1)
  //setIsChecked([...isChecked])

  if(isChecked == 0){
     alert("please select one record")
  }
   else {
    console.log(isChecked)
   
  }
  }

  const showModal = () => {
    if(isChecked == 0){
      alert("please select one record")
     } else{
      setModal(true)
     }
   
  };

  const handleCancel = () => {
    setModal(false)
  }

  const fDisable =(a)=>{
  //  debugger
    // console.log(status)
     if(a.isChecked){
      alert("please select one record")
     } else{
      if(status == "inactive"){
        setStatus("active")
         setModal(false)
      }else{
        setStatus("inactive")
        setModal(false)
      }
     }
  }
 
  const editData = (e) =>{
   let data = datas;
   fName.value = data.fName;
   lName.value = data.lName;
   dob.value = data.dob;
   lName.value = datas.lName;
   lName.value = datas.lName;
   lName.value = datas.lName;
   lName.value = datas.lName;
   lName.value = datas.lName;
   lName.value = datas.lName;
   lName.value = datas.lName;
   setDatas({
    data : e
   })
  }


  const backToForm = () => {
    form.resetFields();
    setHide(false)
  }

  
 
    return(
        <>
         <Form form={form}>
        { hide == false && <div>
           <div class="row">
  <div class="column">
  <div>FirstName </div>
  {/* <Form.Item rules={[{ required: true }]}></Form.Item > */}
  <input type="text" required={true} value={fName} onChange={(e)=>setFName(e.target.value)}/>
  {error && fName.length<=0?
    <label >firstName can't empty</label>:""}
  </div>
  <div class="column">
   <div>LastName </div>
   <input type="text" value={lName} onChange={(e)=>setLName(e.target.value)}/>
   {error && lName.length<=0?
    <label >LasttName can't empty</label>:""}
  </div>
  <div class="column">
   <div>DOB </div>
   <input type="date"  onChange={(e)=>setDob(e.target.value)}/>
   {error && dob.length<=0?
    <label >Date can't empty</label>:""}
  </div>
   <div class="column">
   <div>join date </div>
   <input type="date"  onChange={(e)=>setDate(e.target.value)}/>
   {error && date.length<=0?
    <label >Join date can't empty</label>:""}
  </div>
  </div>

  <div class="row">
    <div class="column">
    <div>Designation</div>
    <select  onChange={(e)=>setDesignation(e.target.value)}>
         <option>selectone</option>
        <option>FrentEnd</option>
        <option>BackEnd</option>
    </select>
    {error && designation.length<=0?
    <label >Designation can't empty</label>:""}
  </div>

  <div class="column">
    <div>Department</div>
    <select  onChange={(e)=>setDepartment(e.target.value)}>
       <option>selectone</option>
        <option>Jr.developer</option>
        <option>Sr.developer</option>
    </select>
    {error && department.length<=0?
    <label >Department can't empty</label>:""}
  </div>

  <div class="column">
   <div>Email </div>
   <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
   {error && email.length<=0?
    <label >Email can't empty</label>:""}
  </div>

  <div class="column">
   <div>PhoneNumber </div>
   <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
   {error && number.length<=0?
    <label >PhoneNumber can't empty</label>:""}
  </div>

  </div>

  <div class="row">
  <div class="">
    <div>Gender</div>
    <input type="radio" name="gender" value="Male" onChange={(e)=>setGender(e.target.value)}/>Male
    <input type="radio" name="gender" value="Female"  onChange={(e)=>setGender(e.target.value)}/>Female
    {error && gender.length<=0?
    <label >Gender can't empty</label>:""}
  </div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;

  <div class="">
    <div>Experience</div>
    <input type="number" value={ex} onChange={(e)=>setEx(e.target.value)}/>
    {error && ex.length<=0?
    <label >Experience can't empty</label>:""}
  </div>
  
  </div>
  <button  onClick={onSubmit}>Submit</button><br/><br/>
  <Link to="/screen4">
             <button>BackToHome</button>
             </Link>
  </div>}
  
  </Form>
 
  
                    
{hide == true && <>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
  <PlusCircleOutlined onClick={backToForm}/>&emsp;
  <EditOutlined  onClick={editData}/>&emsp;
  <DeleteOutlined  onClick={allDelete}/>&emsp;
  <StopOutlined onClick={(e)=>showModal(e)} style={{color:'blue' ,FontSize:30}} />
  <Modal visible={modal} title={status == "active" ? "confirm inactive" : "confirm active"}
                    footer={
                      <>
                        <Button
                          onClick={handleCancel}

                       >
                          Cancel
                        </Button>
                        <Button
                          onClick={(a)=>fDisable(a)}
                        >
                          Ok
                        </Button>
                      </>
                    }></Modal>
         <table border="1">
            <thead>
            <tr>
                <th>Check</th>
                <th>FirstName</th>
                <th>LastName</th>
                {/* <th>DOB</th> */}
                <th>joining date</th>
                {/* <th>Designation</th> */}
                {/* <th>Department</th>
                <th>Email</th>
                <th>PhoneNumber</th>
                <th>Gender</th> */}
                <th>Experience</th>
                <th>Status</th>
            </tr>
            </thead>
            {
        list.map((a)=>
            <tr>
                <th><input type="checkbox" onChange={(e)=>handleDelete(e)} value={a.id} checked={a.isChecked}/></th>
                <th> {a.fName}  </th>
                <th> {a.lName}  </th>
                {/* <th> {a.dob}    </th> */}
                <th> {a.date}   </th>
                {/* <th> {a.designation} </th> */}
                {/* <th> {a.department}</th>
                <th> {a.email}</th>
                <th> {a.number}</th>
                <th> {a.gender}</th> */}
                <th> {a.ex}</th>
                {/* <th> {a.status}</th> */}
                <th>{status ==="active" ? "active" : "inactive"}</th>
           </tr>
       )
       }
         </table>
         </>}
        </>
    )
}
export default Crud;