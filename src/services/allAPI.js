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

// home projects

export const homeProjectAPI = async ()=>{
    return await commonAPI("GET", `${BASE_URL}/project/home`,"","" )
}

// all projects

export const allProjectsAPI = async (searchkey,reqHeader) => {
    return await commonAPI("GET", `${BASE_URL}/project/all?search=${searchkey}`, "", reqHeader)
}

// userproject

export const userProjectAPI = async (reqHeader)=>{
    return await commonAPI('GET', `${BASE_URL}/user/allprojects`,"",reqHeader)
}