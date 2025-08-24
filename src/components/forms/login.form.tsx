
import { yupResolver } from "@hookform/resolvers/yup";
import type { ILoginData } from "../../interface/interface.auth";
import Button from "../common/buttons/button";
import Input from "../common/inputs/input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { login } from "../../api/auth.api";
import {useMutation} from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { loginSchema } from "../../schema/auth.schema";




const LoginForm = () => {
  // 
  const {register,handleSubmit,formState:{errors}} = useForm({
    defaultValues:{
      email:'',
      password:''

    },
    resolver:yupResolver(loginSchema)

  })
 
    //login mutation
    const {mutate,isPending} = useMutation({
        mutationFn:login,
        mutationKey:['login'],
        onSuccess:(response)=>{
          console.log('on login success')
          toast.success(response.message) ?? 'Login Successful'
          console.log(response)
        },
        onError:(error)=>{
          console.log('on login error')
          toast.error(error.message) ?? 'Login Failed'
          console.log(error)
        }
    })

  const onSubmit = (data:ILoginData) => {
    mutate(data)
  
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
          <Button 
          disabled={isPending}
          type="submit" label={isPending?"Logging In....":"Log In"} 
          variant="fill" />
          </div>

        </div>
      </form>
    </div>
  );
};

export default LoginForm;
