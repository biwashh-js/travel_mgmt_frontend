import SignupForm from "../components/forms/signup.form";

const Signup = () => {
  return (
    <main className="min-h-full w-full flex justify-center items-center tracking-wider">
      {/* form */}
      <div className="border border-blue-400 p-6 w-[min(500px,100%)] min-h-[500px] rounded-md shadow-gray-300">
        <h1 className="text-2xl font-bold text-blue-600 text-center">
          Register
        </h1>

       <SignupForm/>

        {/* link to login page */}
        <div className="flex items-center justify-center text-[12px] mt-5">
          <p>
            Already have an account?
            <span className="text-blue-700">
              <a href="Login.tsx">Login</a>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;
