import Button from "../common/buttons/button";
import Input from "../common/inputs/input";

const LoginForm = () => {
  return (
    <div>
      <form action="">
        <div className="flex flex-col">
          {/* email */}
          <Input
            label="Email"
            id="email"
            placeholder="example@gmail.com"
            type="text"
            key="email_input"
            required
          />

          {/* password */}
          <Input
            label="Password"
            id="passwprd"
            type="password"
            placeholder="********"
            key="password_input"
            required
          />

          {/* button */}
           <div className="flex flex-col items-center justify-center">
          <Button type="submit" label="Login" variant='outline' />
          </div>

        </div>
      </form>
    </div>
  );
};

export default LoginForm;
