import React, { useEffect, useRef } from 'react'
import { add_data } from '../../Api/api';
import { base_url, post_users } from '../../constant';

 const Form = () => {

  const name = useRef()
  const email = useRef()
  const password = useRef()


  let addUser = async ()=>{
      let user = {
        name:name.current.value,
        email:email.current.value,
        password:password.current.value
      };

      await add_data(base_url,post_users,user);
  };

  return (
    <div>
       <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <div class="form-group">
          <label for="email"> Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Enter name"
            ref={name}
          />
        </div>

        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="email"
            placeholder="Enter email"
            ref={email}
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            aria-describedby="password"
            placeholder="Enter password"
            ref={password}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={addUser}>
          Submit
        </button>
      </div>
    </div>
    </div>
  );
};

export default Form;
