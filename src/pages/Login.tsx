import LoginForm from "../components/forms/login.form";

const Login = () => {
  return (
    <main className="min-h-full w-full flex justify-center items-center tracking-wider px-3">
      <div className="border border-blue-400 p-6 w-[min(350px,100%)] min-h-[400px] rounded-md shadow-gray-300 ">
        <h1 className="text-2xl font-bold text-blue-600 text-center ">Login</h1>

          {/* form */}
          <LoginForm />

          
          {/* link to signup page */}
          <div className="flex items-center justify-center text-[12px] mt-5">
            <p>
              Don&apos;t have an account ? 
              <span className="text-blue-700">
                <a href="Signup.tsx">Sign Up</a>
              </span>
            </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
