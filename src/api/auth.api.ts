 
 //api function send http request
 import api from "."

import axios from "axios"
import type { ILoginData, IRegisterData } from "../interface/interface.auth"

export const login =async(data:ILoginData)=>{
  try{
    const response = await api.post('/auth/login',data)
    return response.data
  }
  catch(error:any){
    console.log(error)
    throw error.response.data
  }
 }


 
export const register = async(data:IRegisterData)=>{
  try{
    const response = await api.post('/auth/register',data)
    return response.data
  }
  catch(error:any){
    console.log(error)
    throw error.response.data
  }
 }
