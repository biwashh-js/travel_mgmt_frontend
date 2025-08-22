import { Link } from "react-router"


const Home = () => {
  return (
    <div>
      home page
       <div className="flex items-center justify-center text-[12px] mt-5">
            <p>
              <Link to ={'/sign-up'}>
              <span className="text-blue-700">
                Sign Up
              </span>
              </Link>
            </p>
        </div>
         <div className="flex items-center justify-center text-[12px] mt-5">
          <p>
            <Link to ={'/login'}>
            <span className="text-blue-700">
              Login
            </span>
            </Link>
          </p>
        </div>
    </div>
  )
}

export default Home
