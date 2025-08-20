import Input from "../common/inputs/input";
import Button from "../common/buttons/button";
import { GenderSelect } from "../common/inputs/select-input";
import { useForm } from "react-hook-form";
import type { IRegisterData } from "../../interface/interface.auth";

const SignupForm = () => {
  
     
     const {register,handleSubmit} = useForm({
       defaultValues:{
         email:'',
         password:'',
         confirm_password:'',
         firstName:'',
         lastName:'',
         gender:'',
         phone:'',
   



         
       }
   
     })
    
    // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    //   console.log(`input changes`, e.target.name, e.target.value)
    //   const name = e.target.name 
    //   const value = e.target.value 
  
    //   setFormData({ ...formData, [name]: value})
    // } 
    
    const onSubmit = (data:IRegisterData) => { 
     
       console.log("form Submitted",data)
   }

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
              key="name_input"
              name="firstName"
              register={register}
              required 
            />
            {/* last name */}
            <Input
              label="Last Name"
              id="LastName"
              placeholder="Karki"
              type="text"
              key="name_input"
              name="lastName"
              register={register}
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
            required
          />

            <Input
            label="Confirm Password"
            id="confirm_password"
            type="password"
            placeholder="********"
            key="confirm_password_input"
            name="confrim_password"
            register={register}
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
              required={false}
            />
            <GenderSelect
            label="Gender"
            id="gender"
            name="gender"
            register={register}/>
             
            
          </div>
          {/* button */}
          <div className="flex flex-col items-center justify-center">
            <Button type="submit" label="SignUp" variant="fill" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
