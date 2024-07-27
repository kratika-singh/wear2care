import React from 'react'
import { NavLink } from 'react-router-dom'
const UserMenu = () => {
  return (
    <div>
      <div className="text-center">
      <div className="list-group">
        <h4> User Dashboard</h4>
        <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">
          Profile
        </NavLink>
        <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">
          Orders
        </NavLink>
        <NavLink to="/dashboard/user/products-sold" className="list-group-item list-group-item-action">
         Products
        </NavLink>
        
      </div>
      </div>
    </div>
  )
}

export default UserMenu
