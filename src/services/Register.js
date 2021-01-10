import Cookies from "universal-cookie"

const cookies = new Cookies();

export const postUser = async(username, password) => {
  const response = await fetch(process.env.REGISTER_URL, {
    method: 'POST',
    header:{"API-KEY":process.env.API_KEY},
    body: JSON.stringify({username:username, password:password})
  })
  cookies.set("user", response.json())
  return response
}