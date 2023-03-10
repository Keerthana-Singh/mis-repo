import React from "react";
import './Login.css'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
export function Login(){

    return(
        <>      
                {/* <div class="section color"> */}
                    <div class="container-fluid color">
                        <div class="row full-height justify-content-center">
                            <div class="col-12 text-center align-self-center py-5">
                                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                    <div class="card-3d-wrap mx-auto">
                                        <div class="card-3d-wrapper">
                                            <div class="card-front">
                                                <div class="center-wrap">
                                                    <div class="section text-center">
                                                        <h4 class="mb-4 pb-3">Please Login To Your Account</h4>
                                                        <div class="form-group">
                                                            <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
                                                            <i class="input-icon uil uil-at"></i>
                                                        </div>	
                                                        <div class="form-group mt-2">
                                                            <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
                                                            <i class="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <Link to='/Dashboard' className="btn btn-primary mt-3">Log In</Link>
                                                        <p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
        </>
    );
}