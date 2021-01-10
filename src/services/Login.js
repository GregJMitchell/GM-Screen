// import Cookies from "universal-cookie"

// const cookies = new Cookies();

export const getUser = async(username, password) => {
  const response = await fetch("http://localhost:3001/api/v1/login", {
    method: 'post',
    body: JSON.stringify({username:username, password:password})
  })
  .then(response => response.json()) 
  // cookies.set("user", response.json())
  return response.json
}