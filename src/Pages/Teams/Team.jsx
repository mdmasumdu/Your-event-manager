/* eslint-disable react/prop-types */


const Team = ({member}) => {
    const {role,name,age,experience,email,phone,image} = member
    return (
        <div className="text-center bg-slate-100 shadow-2xl p-5 font-semibold text-xl" data-aos="fade-right"  data-aos-duration='1000'>
            <div className="avatar">
            <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} />
            </div>
            </div>
            <h1 className="text-xl font-bold">{name}</h1>
            <h1>{role}</h1>
            <h1>age:{age}</h1>
            <h1>experience:{experience}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
   
        </div>
    );
};

export default Team;