import React from 'react'
import { Helmet } from 'react-helmet'


function AFooter() {
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
            <section className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            © 2014 Yourdomain.com |<a href="http://www.binarytheme.com/" target="_blank"> Designed by : binarytheme.com</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AFooter