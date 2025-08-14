import React from 'react'

interface IProps{
    label:string;
    type?:"submit" | "reset" | "button";
    variant?:"fill" | "outline"
}

const Button:React.FC<IProps>= ({label,type="button",variant='fill'}) => {
  return (
            <button 
            type={type}
            className="w-full h-[40px] bg-blue-500 text-white mt-8 rounded-md curosr-pointer font-semi-bold hover:bg-blue-900 transition-all duration-300ms ">
              {label}
            </button>
        
  )
}

export default Button
