const Login = () => {
  return (
    <main className="h-full w-full flex justify-center items-center tracking-wider ">
            {/* form */}
      <div className="border border-blue-400 p-6 min-w-[350px] min-h-[400px] rounded-md shadow-gray-300 ">
        <h1 className="text-2xl font-bold text-blue-600 text-center ">Login</h1>
      
        {/* email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-normal mt-4">
            Email
          </label>
          <input
            className=" text-gray-900 placeholder:text-gray-600 text-sm border border-blue-700 px-2 py-2 my-2 rounded-md focus: outline-purple-500"
            type="email"
            placeholder="example@gmail.com"
            id="email"
          />
            </div>

          {/* password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-normal mt-3">
              Password
            </label>
            <input
              type="password"
              placeholder="*********"
              id="password"
              className="text-gray-900 placeholder:text-gray-600 border border-blue-700 px-2 py-2 my-2 text-sm rounded-md focus: outline-purple-500"
            />
          </div>

          {/* button */}
          <div className="flex flex-col items-center justify-center">
            <button className="w-full h-[40px] bg-blue-500 text-white mt-8 rounded-md curosr-pointer font-semi-bold hover:bg-blue-900 transition-all duration-300ms">
            Login
          </button>
          </div>
          
          {/* link to signup page */}
          <div className="flex items-center justify-center text-[12px] mt-5">
            <p>Don&apos;t have an account ?
            <span className="text-blue-700"> Sign Up</span>
            </p>
          </div>
          
        </div>

    </main>
  );
};

export default Login;
