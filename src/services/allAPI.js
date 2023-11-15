import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonAPI"

export const registerAPI = async (user)=>{
    return await commonAPI("POST", `${BASE_URL}/user/register`,user,"")
}