import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const ErrorPage = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  return (
  <div>
    <div id="main">
    	<div class="fof">
        		<h1>Error 404</h1>
            {userInfo?.isAdmin ? (
            <NavLink to='/admin'>Back to homepage</NavLink>
            ):(
              <NavLink to='/'>Back to homepage</NavLink>
            )}
    	</div>
      
</div>
  </div>
  )
}

export default ErrorPage
