import React from 'react'
import { Helmet } from 'react-helmet'

function Add_services() {
    return (
        <>
            <Helmet>
                <link href="admin/assets/css/bootstrap.css" rel="stylesheet" />
                <link href="admin/assets/css/font-awesome.css" rel="stylesheet" />
                <link href="admin/assets/css/style.css" rel="stylesheet" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />

                <script src="admin/assets/js/jquery-1.10.2.js"></script>
                <script src="admin/assets/js/bootstrap.js"></script>
                <script src="admin/assets/js/custom.js"></script>

            </Helmet>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            Add Services
                        </div>
                        <div className="panel-body">
                            <form role="form">
                                <div className="form-group">
                                    <label>Enter Name</label>
                                    <input className="form-control" type="text" />
                                    <p className="help-block">Help text here.</p>
                                </div>
                                <div className="form-group">
                                    <label>Enter Email</label>
                                    <input className="form-control" type="text" />
                                    <p className="help-block">Help text here.</p>
                                </div>
                                <div className="form-group">
                                    <label>Text area</label>
                                    <textarea className="form-control" rows={3} defaultValue={""} />
                                </div>
                                <button type="submit" className="btn btn-info">Send Message </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Add_services