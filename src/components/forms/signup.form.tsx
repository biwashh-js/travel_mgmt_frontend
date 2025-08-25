import Input from "../common/inputs/input";
import Button from "../common/buttons/button";
import { GenderSelect } from "../common/inputs/select-input";
import { useForm } from "react-hook-form";
import type { IRegisterData } from "../../interface/interface.auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { register as registerUser } from "../../api/auth.api";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { signupSchema } from "../../schema/auth.schema";



const SignupForm = () => {
  const { register, handleSubmit,formState:{errors} } = useForm({
    defaultValues: {
      email:'',
      password:'',
      confirm_password:'',
      firstName:'',
      lastName:'',
      gender:'',
      phone: '',
    },
     resolver:yupResolver(signupSchema)
    
  });
  console.log(errors)

    const {mutate,isPending} = useMutation({
        mutationFn:registerUser,
        mutationKey:['register'],
        onSuccess:(response)=>{
          console.log('on register success')
          toast.success(response.message) ?? 'Registered Successfully'
          console.log(response)
        },
        onError:(error)=>{
          console.log('on login error')
          toast.error(error.message) ?? 'Registration Failed'
          console.log(error)
        }
    })

  const onSubmit =(data:IRegisterData) => {
      console.log('onsubmit register')
        mutate(data)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          {/* firstName */}
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              id="firstName"
              placeholder="Ram"
              type="text"
              key="firstName_input"
              name="firstName"
              register={register}
               error = {errors.firstName?.message}
              required
            />
            {/* last name */}
            <Input
              label="Last Name"
              id="LastName"
              placeholder="Karki"
              type="text"
              key="lastName_input"
              name="lastName"
              register={register}
               error = {errors.lastName?.message}
              required
            />
          </div>
          {/* email */}
          <Input
            label="Email"
            id="email"
            placeholder="example@gmail.com"
            type="text"
            key="email_input"
            name="email"
            register={register}
             error = {errors.email?.message}
            required
          />

          {/* password */}
          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="********"
            key="password_input"
            name="password"
            register={register}
             error = {errors.password?.message}
            required
          />

          <Input
            label="Confirm Password"
            id="confirm_password"
            type="password"
            placeholder="********"
            key="confirm_password_input"
            name="confirm_password"
            register={register}
             error = {errors.confirm_password?.message}
            required
          />

          {/* phone and gender */}
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Phone No."
              id="phone"
              type="text"
              placeholder="9700000000"
              key="phone_input"
              name="phone"
              register={register}
               error = {errors.phone?.message}
              required={false}
            />
            <GenderSelect
              label="Gender"
              id="gender"
              name="gender"
              register={register}
          
            />
          </div>
          {/* button */}
          <div className="flex flex-col items-center justify-center">
            <Button type="submit" label={isPending?"Signing Up" :"Sign Up"} variant="fill" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
