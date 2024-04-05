import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function AdminDashboard() {
  return (
      <section className='container-fluid'>
          <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-3 d-lg-block d-md-block d-sm-none">
                  <div className="card border-0 show" tabIndex={'-1'}>
                    <div className="card-body">
                      <h3 className="text-dark">E-shop</h3>
                      <ul className="nav flex-column">
                          <li className="nav-item">
                            <NavLink to={`/dashboard/superadmin`} className="nav-link">
                              <i className="bi bi-house"></i>  Dashboard
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to={`/dashboard/superadmin/products`} className="nav-link">
                                Products
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to={`/dashboard/superadmin/categories`} className="nav-link">
                                Category
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to={`/dashboard/superadmin/users`} className="nav-link">
                                Users
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to={`/dashboard/superadmin/orders`} className="nav-link">
                                Orders
                            </NavLink>
                          </li>
                      </ul>
                    </div>
                  </div>
              </div>

              <div className="col-sm-12 col-md-8 col-lg-9">
                  <div className="container">
                          <div className="row">
                              <div className="col-md-12 col-sm-12 col-lg-12">
                                  <h3 className="text-dark">Dashboard</h3>
                                  <p className="text-secondary">Welcome to Admin Dashboard</p>
                              </div>
                          </div>
                          <Outlet/>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default AdminDashboard