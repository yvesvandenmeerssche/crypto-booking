import React from 'react';

import LogoEB from '../../img/content/logo-ethberlin.png';

export default class HeroSection extends React.Component {


  render() {

    return (
      <article className="mb-2">
        <div className="section-wrapper bg--gradient">
          <div className="container">
            <div className="index-banner__inner text-center">
              <div className="row justify-content-md-center">
                <h3 className="col-md-10 mb-1 text-white lead">
                  ETH Berlin accomodation service
                </h3>

                <p className="col-md-10 mb-2 text-white h1">
                  Book a room and save <span className="font--alt">20%</span> with Winding Tree
                </p>

                <a href="/" className="btn btn-primary btn-lg">
                  <span className="h5">Book with discount</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a className="bg-white block-shadow d-block"  style={{padding: '16px 0 14px 0'}} href="https://ethberlin.com" title="Visit the oficial website.">
          <div className="row">
            <div className="col text-center">
              <img src={LogoEB} width="150" alt="ETH Berlin" style={{position: 'relative', top: -4}} className="mr-1"/>
              <span className="h5 mr-1"><b>Berlin, Germany</b></span>
              <span className="h5">September 7-9, 2018</span>
            </div>
          </div>
        </a>
      </article>
    );
  }

}