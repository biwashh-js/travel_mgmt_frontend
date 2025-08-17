import React from 'react'
import { LuAsterisk } from 'react-icons/lu';
import Select from 'react-select'

interface IProps{
    label:string;
    required?:boolean;
    id:string;
    name:string;
    register?:any
}
const options = [
  { value: 'MALE', label: 'Male' },
  { value: 'FEMALE', label: 'Female' },
  { value: 'RATHER_NOT_SAY', label: 'Rather Not Say' }
]

export const GenderSelect:React.FC<IProps> = ({label,required,id,name,register}) => (
  <div>
     <div className="flex "><label htmlFor={id} className="text-lg font-normal mb-2">
                {label}
              </label>
                {required && <LuAsterisk className="text-red-400"/>}
             </div>
    <Select
     {...register(name)}
      options={options} className='border border-blue-700 rounded-md'
      id={id}
      name={name}/>
  </div>
)