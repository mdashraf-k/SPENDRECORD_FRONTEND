import API from "../services/api";

export async function getGroups() {
  const res = await API.get("/groups/");
  // console.log(res.data);
  return res.data;
}

export async function createGroup({ name, description }) {
  const res = await API.post("/groups/create_group", {
    name,
    description,
  });
  
  if (res.status != 200) {
    throw new Error("Failed to create groups");
  }

  return res;
}


export async function delete_group(group_id) {
  const res = await API.delete(`/groups/delete/${group_id}`);

  if (res.status != 200) {
    throw new Error("Failed to create groups");
  }
  // console.log(res);
}