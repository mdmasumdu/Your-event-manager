/* eslint-disable react/prop-types */


const Client = ({client}) => {

   
    return (
        <div className="text-center bg-slate-100 p-5 shadow-2xl">
            <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={client.image_link} />
  </div>
</div>
            <h1 className="text-xl font-bold">{client.client_name}</h1>
            <p>{client.comment}</p>
            <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  checked/>
</div>

        </div>
    );
};

export default Client;