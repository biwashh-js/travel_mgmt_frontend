
import type { ILoginData } from "../../interface/interface.auth";
import Button from "../common/buttons/button";
import Input from "../common/inputs/input";
import { useForm } from "react-hook-form";

const LoginForm = () => {


  
  // const [formData, setFormData] = useState({ 
  //   email: '', 
  //   password:''
  // }) 
  
  const {register,handleSubmit} = useForm({
    defaultValues:{
      email:'',
      password:''

    }

  })
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
  //   console.log(`input changes`, e.target.name, e.target.value)
  //   const name = e.target.name 
  //   const value = e.target.value 

  //   setFormData({ ...formData, [name]: value})
  // } 
  
  const onSubmit = (data:ILoginData) => { 
     console.log("form Submitted",data)
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
