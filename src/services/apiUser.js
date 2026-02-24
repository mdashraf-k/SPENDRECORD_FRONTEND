import API from "./api";

export async function getUserData() {
    const res = await API.get("/user/");
    // console.log(res);
    if (res.status != 200) {
        throw new Error("Having trouble while getting your Data.");
        
    }
    // console.log(res);
    
    return res.data;
}

export async function UpdateUserDetail(data) {
    const res = await API.patch("/user/edit_info", data);
    return res.data
}

export async function seachUser(query) {
    const res = await API.get(`/user/search?query=${query}`);
    console.log(res.data);
    
    return res.data

}