import React, { useEffect ,useState } from 'react';
import { base_url, get_users } from '../../constant';
import { get_data } from "../../Api/api";
import Form from "../Body/Form";
import Table from "../Body/Table";

 const Users = () => {

  const [data, setdata] = useState([]);

  let get_user = async ()=>{
    let res = await get_data(base_url,get_users);
    setdata(res.data);
  };
 

  useEffect(()=>{
    get_user();
  });


  console.log(data);
  return (
    <div className='row'>


      <div className="col-md-8">
        <Table data = {data} />
      </div>



      <div className="col-md-4">
        <Form />
      </div>


    </div>
  );
};

export default Users;
