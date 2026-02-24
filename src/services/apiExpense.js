import API from "./api";

export async function groupExpense(group_id) {
    const res = await API.get(`/spend/${group_id}`);
    // console.log(res);
    return res.data;
}

export async function addExpence({group_id, payload}) {
    await API.post(`/spend/${group_id}/spend`, payload)
    // console.log(res);
}