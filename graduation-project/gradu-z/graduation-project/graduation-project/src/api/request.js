import axios from 'axios';
const instance = axios.create({
  baseURL:`http://124.71.180.178:8001`,
  timeout:5000
})
export function getAnime(url,params){
  return instance({
    method:"GET",
    url,
    params
  })
}