import API from "./api";

export async function getAllMembers(group_id) {
    // console.log(group_id);
    
    const res = await API.get(`/members/${group_id}`);
    if (res.status != 200) return;
    // console.log(res.data);
    
    return res.data
}

export async function addMember(group_id, member_id) {
    await API.post(`/members/${group_id}/${member_id}/add_member`);
    // console.log(res);
}

export async function exit_from_group(group_id, user_id) {
    await API.put(`/members/${group_id}/${user_id}/remove`);
    // console.log(res);
}