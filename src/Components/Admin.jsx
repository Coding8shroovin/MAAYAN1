import React,{useEffect,useState
} from "react"
import axios from "axios"
function Admin(){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000").
        then(res=>{
          console.log(res.data);
          setUsers(res.data);
            // console.log();
        }).catch(err=>{
          console.log(err);
        })
      },[])
    return (
        <div className="h-screen bg-[#3a5a40] text-[#dad7cd] flex justify-center items-center">
    <div className="overflow-x-auto w-full max-w-5xl p-4">
        <table className="min-w-full table-auto border-collapse border border-[#dad7cd] shadow-md">
            <thead className="">
                <tr className="text-left text-[#dad7cd]">
                    <th className="p-4 border ">Name</th>
                    <th className="p-4 border ">Email</th>
                    <th className="p-4 border">Phone Number</th>
                    <th className="p-4 border ">Country</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => (
                        <tr 
                            className={`text-center   hover:bg-[#6a994e] transition duration-200`}
                            key={index}
                        >
                            <td className="p-4 border ">{user.name}</td>
                            <td className="p-4 border ">{user.email}</td>
                            <td className="p-4 border ">{user.phone}</td>
                            <td className="p-4 border">{user.country}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
</div>

    )
}
export default Admin;