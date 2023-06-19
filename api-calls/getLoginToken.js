import * as nodeFetch from "node-fetch"
import { adminDetails } from "../data/adminDetails"

export const getLoginToken = async() => {
    const response = await nodeFetch('http://localhost:2221/api/login', {
        method: "POST",
        body:JSON.stringify({"username": adminDetails.username, "password": adminDetails.password})
    })
    if (response.status !== 200){
        throw new Error(" An error occured")
    }

    const body = await response.json()
    return body.token




    


}