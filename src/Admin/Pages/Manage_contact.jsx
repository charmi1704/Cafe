import React from 'react'
import { Helmet } from 'react-helmet'

function Manage_contact() {
  return (
    <>
            <Helmet>
                <link href="admin/assets/css/bootstrap.css" rel="stylesheet" />
                <link href="admin/assets/css/font-awesome.css" rel="stylesheet" />
                <link href="admin/assets/js/dataTables/dataTables.bootstrap.css" rel="stylesheet" />
                <link href="admin/assets/css/style.css" rel="stylesheet" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />

                <script src="admin/assets/js/jquery-1.10.2.js"></script>
                <script src="admin/assets/js/bootstrap.js"></script>
                <script src="admin/assets/js/dataTables/jquery.dataTables.js"></script>
                <script src="admin/assets/js/dataTables/dataTables.bootstrap.js"></script>
                <script src="admin/assets/js/custom.js"></script>
            </Helmet>
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        Manage_contact
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>Rendering engine</th>
                                            <th>Browser</th>
                                            <th>Platform(s)</th>
                                            <th>Engine version</th>
                                            <th>CSS grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="odd gradeX">
                                            <td>Trident</td>
                                            <td>Internet Explorer 4.0</td>
                                            <td>Win 95+</td>
                                            <td className="center">4</td>
                                            <td className="center">X</td>
                                        </tr>
                                        <tr className="even gradeC">
                                            <td>Trident</td>
                                            <td>Internet Explorer 5.0</td>
                                            <td>Win 95+</td>
                                            <td className="center">5</td>
                                            <td className="center">C</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
  )
}

export default Manage_contact