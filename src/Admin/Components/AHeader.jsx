import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

function AHeader() {
    return (
        <>
            <Helmet>
                <link href="admin/assets/css/bootstrap.css" rel="stylesheet" />
                <link href="admin/assets/css/font-awesome.css" rel="stylesheet" />
                <link href="admin/assets/css/style.css" rel="stylesheet" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />

                <script src="admin/assets/js/bootstrap.js"></script>
                <script src="admin/assets/js/custom.js"></script>
                <script src="admin/assets/js/jquery-1.10.2.js"></script>

            </Helmet>
            <div className="navbar navbar-inverse set-radius-zero">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <NavLink className="navbar-brand" href="index.html">
                            <img src="admin/assets/img/logo.png" />
                        </NavLink>
                    </div>
                    <div className="right-div">
                        <NavLink href="#" className="btn btn-danger pull-right">LOG ME OUT</NavLink>
                    </div>
                </div>
                <section className="menu-section">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-12">
                                <div className="navbar-collapse collapse ">
                                    <ul id="menu-top" className="nav navbar-nav navbar-right">
                                        <li><NavLink to="/admin-dashboard" className="menu-top-active">DASHBOARD</NavLink></li>
                                        <li>
                                            <NavLink href="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Category<i className="fa fa-angle-down" /></NavLink>
                                            <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Add_categories">Add Categories</NavLink></li>
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Manage_categories">Manage Categories</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink href="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Employee<i className="fa fa-angle-down" /></NavLink>
                                            <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Add_categories">Add Employee</NavLink></li>
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Manage_employee">Manage Employee</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink href="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Service<i className="fa fa-angle-down" /></NavLink>
                                            <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Add_categories">Add Services</NavLink></li>
                                                <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/Manage_services">Manage Services</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to="/Manage_user">User</NavLink></li>
                                        <li><NavLink to="/Manage_contact">Contact</NavLink></li>
                                        <li><NavLink to="/Manage_feedback">Feedback</NavLink></li>

                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default AHeader