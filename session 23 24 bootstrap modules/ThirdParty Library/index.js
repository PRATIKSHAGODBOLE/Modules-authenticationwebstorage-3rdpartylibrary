
import axios from "axois";

const covidUrl = "https://jsonplaceholder.typicode.com/users"

function getdata(url)
{
 axios.get(url)
 .then(res=>console.log(res))
 .catch(err=>console.log(err))
}
getdata(covidUrl)