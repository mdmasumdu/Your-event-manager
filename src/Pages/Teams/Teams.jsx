import { useEffect, useState } from "react";
import Team from "./Team";


const Teams = () => {

    const [members,setMembers] = useState([]);

    useEffect(()=>{
   fetch('Team.json')
   .then(res=> res.json())
   .then(data=>setMembers(data))

    },[])

    return (
        <div className="bg-white">
          <h1 className="font-bold text-4xl text-center">Our Team Members</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          {
                members.map(member=><Team key={member.age} member={member}></Team>)
            }
          </div>
        </div>
    );
};

export default Teams;