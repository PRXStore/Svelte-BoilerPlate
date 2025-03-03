export async function fetchNui(eventName = "",data = {}){
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  const resourceName = window?.GetParentResourceName
    ? GetParentResourceName()
    : "svelte-prx-boilerplate";

  const resp = await fetch(`https://${resourceName}/${eventName}`, options);

  return await resp.json();
}
