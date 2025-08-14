const Signup = () => {
  return (
    <main className="h-full w-full flex justify-center items-center tracking-wider">
      {/* form */}
      <div className="border border-blue-400 p-6 min-w-[500px] min-h-[500px] rounded-md shadow-gray-300">
        <h1 className="text-2xl font-bold text-blue-600 text-center">
          Sign Up
        </h1>

        {/* first name + last name */}
        <div className="flex gap-4 mt-4">
          {/* first name */}
          <div className="flex flex-col flex-1">
            <label htmlFor="firstname" className="text-lg font-normal">
              First Name
            </label>
            <input
              className="text-gray-900 placeholder:text-gray-600 text-sm border border-blue-700 px-2 py-2 mt-2 rounded-md focus:outline-purple-500"
              type="text"
              placeholder="John"
              id="firstname"
            />
          </div>

          {/* last name */}
          <div className="flex flex-col flex-1">
            <label htmlFor="lastname" className="text-lg font-normal">
              Last Name
            </label>
            <input
              className="text-gray-900 placeholder:text-gray-600 text-sm border border-blue-700 px-2 py-2 mt-2 rounded-md focus:outline-purple-500"
              type="text"
              placeholder="Doe"
              id="lastname"
            />
          </div>
        </div>

        {/* phone */}
        <div className="flex flex-col mt-3">
          <label htmlFor="phone" className="text-lg font-normal">
            Phone
          </label>
          <input
            className="text-gray-900 placeholder:text-gray-600 text-sm border border-blue-700 px-2 py-2 mt-2 rounded-md focus:outline-purple-500"
            type="tel"
            placeholder="98XXXXXXXX"
            id="phone"
          />
        </div>

        {/* email */}
        <div className="flex flex-col mt-3">
          <label htmlFor="email" className="text-lg font-normal">
            Email
          </label>
          <input
            className="text-gray-900 placeholder:text-gray-600 text-sm border border-blue-700 px-2 py-2 mt-2 rounded-md focus:outline-purple-500"
            type="email"
            placeholder="example@gmail.com"
            id="email"
          />
        </div>

        {/* password */}
        <div className="flex flex-col mt-3">
          <label htmlFor="password" className="text-lg font-normal">
            Password
          </label>
          <input
            type="password"
            placeholder="*********"
            id="password"
            className="text-gray-900 placeholder:text-gray-600 border border-blue-700 px-2 py-2 mt-2 text-sm rounded-md focus:outline-purple-500"
          />
        </div>

        {/* gender */}
        <div className="flex flex-col mt-3">
          <label htmlFor="gender" className="text-lg font-normal">
            Gender
          </label>
          <select
            id="gender"
            className="text-gray-900 border border-blue-700 px-2 py-2 mt-2 text-sm rounded-md focus:outline-purple-500"
          >
            <option value="">Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="RATHER_NOT_SAY">Rather Not Say</option>
          </select>
        </div>

        {/* button */}
        <div className="flex flex-col items-center justify-center">
          <button className="w-full h-[40px] bg-blue-500 text-white mt-8 rounded-md cursor-pointer font-semibold hover:bg-blue-900 transition-all duration-300">
            Sign Up
          </button>
        </div>

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
