import React from 'react'
import { nav } from './navData'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
  return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" >User</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

                {
                    nav.map((val,ind)=>{
                            return(
                                <li class="nav-item active">
                                    <Link to={`${val.path}`} class="nav-link" >{val.name}</Link>
                                 </li>
                            )
                    })

                }
           
        
            </ul>
        
        </div>
        </nav>
  )
}

export default UserNavbar
