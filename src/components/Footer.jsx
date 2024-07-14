import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
export default function App() {
  return (
    <div style={{ paddingTop: "5px" }}>
      <MDBFooter bgColor="success" className="text-white text-center text-lg-left">
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
              <h4 className="text-uppercase">About</h4>

              <p className="para">
              We understand the importance of cost-effective solutions for your business. That's why we offer competitive pricing on bulk purchases, helping you keep your costs low while maintaining high standards for your customers.
              </p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Catogeries:</h5>
              <div className="footer">
                <ul className="list-unstyled mb-0">
                 
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/product">Men Outfit</NavLink>
                  </li>

                  <li>
                    <NavLink to="/product"> Women Wear</NavLink>
                  </li>

                  <li>
                    <NavLink to="/aboutpage"> AboutUs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactus"> ContactUs</NavLink>
                  </li>
                </ul>
              </div>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Customer Care</h5>
              <div style={{ paddingTop: "5px" }}>
                <ul className="list-unstyled">
                  <li>
                    <p> Ph#: 0307-5620090</p>
                  </li>
                  <li>
                    <p><b>Made By:</b><br/>Nabeel Usman</p>
                  </li>
                  <li>
                    <p><b>Adress:</b></p>
                  </li>
                  <li>
                    <p>Shama , ichra maqbool road, , Lahore</p>
                  </li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{" "}
        NB-Store
         
        </div>
      </MDBFooter>
    </div>
  );
}
