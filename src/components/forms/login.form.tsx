
import { yupResolver } from "@hookform/resolvers/yup";
import type { ILoginData } from "../../interface/interface.auth";
import Button from "../common/buttons/button";
import Input from "../common/inputs/input";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import axios from "axios";


const loginSchema = yup.object({
    email:yup.string().required('email is required.').email('invalid email format'),
    password:yup.string().required('password is required.')
})

const LoginForm = () => {


    
  const {register,handleSubmit,formState:{errors}} = useForm({
    defaultValues:{
      email:'',
      password:''

    },
    resolver:yupResolver(loginSchema)

  })
 
  console.log(errors)

  const onSubmit = async (data:ILoginData) => {
    try{ 
    console.log("form Submitted",data)
    const response = await login(data)
    console.log('on submit response', response)
     }
     catch(error){
      console.log(error)
     }
 }
 
 //api function send http request

 const login =async(data:ILoginData)=>{
  try{
    const response = await axios.post('https://travel-mgmt.onrender.com/api/auth/login',data)
    return response.data
  }
  catch(error){
    console.log(error)
  }
 }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          {/* email */}
          <Input
            label="Email"
            id="email"
            placeholder="example@gmail.com"
            type="text"
            key="email_input"
            required ={true}
            name="email"
            error = {errors.email?.message}
            register={register}
           
          />

          {/* password */}
          <Input
            label="Password"
            id="passwprd"
            type="password"
            placeholder="********"
            key="password_input"
            required = {true}
            name='password'
             error = {errors.password?.message}
            register={register}

          />

          {/* button */}
           <div className="flex flex-col items-center justify-center">
          <Button type="submit" label="Login" variant='fill' />
          </div>

        </div>
      </form>
    </div>
  );
};

export default LoginForm;
