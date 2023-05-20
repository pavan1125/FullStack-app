import React,{useState} from 'react'

export default function LoginPage() {
    const [loginDetails,setLoginDetails]=useState({
          userName:"",
          password:""
    })

    const changeHandler=(e)=>{
          setLoginDetails((prev)=>{
            return{
                   ...prev,
                [e.target.name]:e.target.value
            }
          })
    }

    const submitHandler= async(e)=>{
         e.preventDefault()
         let response= await fetch("http://localhost:4000/api/login",{
             method:"POST",
             body:JSON.stringify(loginDetails),
             headers:{
                 "Content-Type": "application/json"
             }
         })
         if(response.ok){
             let data=await response.json()  
             localStorage.setItem("token",data.token)
         }
         else{
            console.log("error")
         }
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
             <input type="text" name="userName" value={loginDetails.userName} onChange={changeHandler}/>
             <input type="text" name="password" value={loginDetails.password} onChange={changeHandler}/>
             <button type='submit'>submit</button>
        </form>
    </div>
  )
}
