import API from "./api";

export async function getAllMembers(group_id) {
    // console.log(group_id);
    
    const res = await API.get(`/members/${group_id}`);
    if (res.status != 200) return;
    
    return res.data
}

export async function addMember(group_id, member_id) {
    const res = await API.post(`/members/${group_id}/${member_id}/add_member`);
    console.log(res);
    
}