import { LuAsterisk } from "react-icons/lu";

interface IProps{
    label:string;
    id:string;
    placeholder?:string ;
    type?:'text' | 'number' | 'password' ;
    required?:boolean
    
}

const Input:React.FC<IProps>= ({label,id,placeholder='start typing here..',type='text', required=false}) => {
  return (
    <div className="flex flex-col mt-4 ">
          <div className="flex "><label htmlFor={id} className="text-lg font-normal">
            {label}
          </label>
            {required && <LuAsterisk className="text-red-400"/>}
         </div>
          <input
            className=" text-gray-900 placeholder:text-gray-600 text-sm border border-blue-700 px-2 py-2 my-2 rounded-md focus: outline-purple-500"
            type={type}
            placeholder={placeholder}
            id={id}
          />
            </div>
  )
}

export default Input
