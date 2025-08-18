import { LuAsterisk } from "react-icons/lu";

interface IProps{
    label:string;
    id:string;
    placeholder?:string ;
    type?:'text' | 'number' | 'password' ;
    required?:boolean;
      name: string;
    register?:any
    error?:string
}

const Input:React.FC<IProps>= ({label,id,placeholder='start typing here..',type='text', required=false,name,register,error}) => {
  return (
    <div className="flex flex-col ">
          <div className="flex "><label htmlFor={id} className="text-lg font-normal">
            {label}
          </label>
            {required && <LuAsterisk className="text-red-400"/>}
         </div>
          <input
            {...register(name)}
            className= {` text-gray-900 placeholder:text-gray-600 text-sm border border-blue-700 px-2 py-2 my-2 rounded-md focus: outline-purple-500 ${error?'border-red-400 focus:outline-red-500 focus: outline-purple-500'  : ' border-blue-700 b '}`}
            type={type}
            placeholder={placeholder}
            id={id}
            name={name}
            
          />
          <p className="h-1 text-xs text-red-500">{error? error : ''}</p>
            </div>
  )
}

export default Input
