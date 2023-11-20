import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonAPI"

export const registerAPI = async (user)=>{
    return await commonAPI("POST", `${BASE_URL}/user/register`,user,"")
}
//login

export const loginAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

//Add project

export const AddProjectApi = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
}