/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo_2 from "../images/logo-2.png"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // allStrapiCourses {
  //   nodes {
  //     id
  //     title
  //     brief
  //     price
  //   }
  // }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          // margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>

        <footer id="footer-part">
  <div className="footer-top pt-40 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="footer-about mt-40">
            <div className="logo">
              <a href="#"><img src={Logo_2} alt="Logo" /></a>
            </div>
            <p>Gravida nibh vel velit auctor aliquetn quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate.</p>
            <ul className="mt-20">
              <li><a href="#"><i className="fa fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-instagram" /></a></li>
            </ul>
          </div> {/* footer about */}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="footer-link mt-40">
            <div className="footer-title pb-25">
              <h6>Links</h6>
            </div>
            <ul>
              <li><a href="#"><i className="fa fa-angle-right" />Home</a></li>
              <li><a href="#"><i className="fa fa-angle-right" />About us</a></li>
              <li><a href="#"><i className="fa fa-angle-right" />Courses</a></li>
              <li><a href="#"><i className="fa fa-angle-right" />Team</a></li>
              <li><a href="#"><i className="fa fa-angle-right" />News</a></li>
              
            </ul>
            <ul>
              <li><a href="#"><i className="fa fa-angle-right" />Works</a></li>
              <li><a href="#"><i className="fa fa-angle-right" />Find Graduate</a></li>
              <li><a href="#"><i className="fa fa-angle-right" />Register</a></li>
              <li><a href="#"><i className="fa fa-angle-right" />Contact</a></li>
            </ul>
          </div> {/* footer link */}
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="footer-link support mt-40">
            <div className="footer-title pb-25">
              <h6>Twitter</h6>
            </div>
           
          </div> {/* support */}
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-address mt-40">
            <div className="footer-title pb-25">
              <h6>Contact Us</h6>
            </div>
            <ul>
              <li>
                <div className="icon">
                  <i className="fa fa-home" />
                </div>
                <div className="cont">
                  <p>KG 19 Ave 9, Kigali</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fa fa-phone" />
                </div>
                <div className="cont">
                  <p>+250 785 568 718</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fa fa-envelope-o" />
                </div>
                <div className="cont">
                  <p>education@nzizatraining.ac.rw</p>
                </div>
              </li>
            </ul>
          </div> {/* footer address */}
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </div> {/* footer top */}
  <div className="footer-copyright pt-10 pb-25">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="copyright text-md-left text-center pt-15">
            <p><a target="_blank" href="https://www.pierratono.me">Pierratono</a> </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="copyright text-md-right text-center pt-15">
          </div>
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </div> {/* footer copyright */}
</footer>

<a href="#" className="back-to-top"><i className="fa fa-angle-up"></i></a>
      </div>

       {/* jquery js */}
    <script src="js/vendor/modernizr-3.6.0.min.js"></script>
      <script src="js/vendor/jquery-1.12.4.min.js"></script>

       {/* Bootstrap js */}
    <script src="js/bootstrap.min.js"></script>

       {/* Slick js */}
    <script src="js/slick.min.js"></script>

       {/* Magnific Popup js */}
    <script src="js/jquery.magnific-popup.min.js"></script>

       {/* Counter Up js */}
    <script src="js/waypoints.min.js"></script>
      {}
    <script src="js/jquery.counterup.min.js"></script>

       {/* Nice Select js */}
    <script src="js/jquery.nice-select.min.js"></script>

       {/* Nice Number js */}
    <script src="js/jquery.nice-number.min.js"></script>

       {/* Count Down js */}
    <script src="js/jquery.countdown.min.js"></script>

       {/* Validator js */}
    <script src="js/validator.min.js"></script>

       {/* Ajax Contact js */}
    <script src="js/ajax-contact.js"></script>

       {/* Main js */}
    <script src="js/main.js"></script>

       {/* Map js */}
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDC3Ip9iVC0nIxC6V14CKLQ1HZNF_65qEQ"></script>
      <script src="js/map-script.js"></script>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
