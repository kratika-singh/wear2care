import React,{useState}from 'react'
import Layout from './../../components/Layout/Layout';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import "../../Styles/AuthStyles.css";




const Login = () => {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
      
    //form function
    const handleSubmit =async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("/api/v1/auth/login",
              {
                email,
                password,
              });
            if(res.data.success){
              toast.success(res.data.message);
              navigate("/");
            }else{
              toast.error(res.data.message);
            }
        }catch(error){
            console.log(error)
            toast.error('Something went wrong');
        }
    };

  return (
    <Layout title = "Register- E-Commerce App">
    <div className='form-container'>
 
      <h1>Login Form</h1>
     <form onSubmit={handleSubmit}>
     
     <div className="mb-3">
     <input type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)} 
      className="form-control" 
      id="exampleInputEmail1"
      placeholder='Enter your Email'
      required/>
     </div>
 
     <div className="mb-3">
     <input type="text"
      value={password}
      onChange={(e) => setPassword(e.target.value)} 
      className="form-control" 
      id="exampleInputEmail1"
      placeholder='Enter your Password'
      required/>
     </div>
 
     <button type="submit" className="btn btn-primary">LOGIN</button>
     </form>
 
    </div>
     </Layout>
  )
}

export default Login
