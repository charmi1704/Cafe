import React from 'react'
import { Helmet } from 'react-helmet'

function Dashboard() {
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
            <div>
                <div className="content-wrapper">
                    <div className="container">
                        <div className="row pad-botm">
                            <div className="col-md-12">
                                <h4 className="header-line">ADMIN DASHBOARD</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-6">
                                <div className="alert alert-info back-widget-set text-center">
                                    <i className="fa fa-history fa-5x" />
                                    <h3>500+&nbsp; <i className="fa fa-dollar" /></h3>
                                    Amount Pending For Approval
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-6">
                                <div className="alert alert-success back-widget-set text-center">
                                    <i className="fa fa-bars fa-5x" />
                                    <h3>300+ Tasks</h3>
                                    Pending For New Events
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-6">
                                <div className="alert alert-warning back-widget-set text-center">
                                    <i className="fa fa-recycle fa-5x" />
                                    <h3>56+ Calls</h3>
                                    To Be Made For New Orders
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-6">
                                <div className="alert alert-danger back-widget-set text-center">
                                    <i className="fa fa-briefcase fa-5x" />
                                    <h3>30+ Issues </h3>
                                    That Should Be Resolved Now
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* CONTENT-WRAPPER SECTION END*/}

            </div>


        </>
    )
}

export default Dashboard