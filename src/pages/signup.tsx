import { Link } from "react-router";
import SignupForm from "../components/forms/signup.form";

const Signup = () => {
  return (
    <main className="min-h-full w-full flex justify-center items-center tracking-wider">
      {/* form */}
      <div className="border border-blue-400 p-6 w-[min(500px,100%)] min-h-[500px] rounded-md shadow-gray-300 ">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-3">
          Sign Up
        </h1>

       <SignupForm/>

        {/* link to login page */}
        <div className="flex items-center justify-center text-[12px] mt-5">
          <p>
            Already have an account?{" "}
            <Link to ={'/login'}>
            <span className="text-blue-700">
              Login
            </span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;
