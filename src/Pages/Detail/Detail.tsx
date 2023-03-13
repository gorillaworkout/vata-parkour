import React, { Component } from "react";
import "../../Style/Home.scss";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function Detail() {
  return (
    <>
      <Header />
      <div className="container-home">
        <div className="container-ins">
          <div className="card-title-detail">
            <p>Tutorials</p>
            <p>Parkour Movement hierarchy,structure & vocabulary</p>
            <div className="card-option-menu">
              <div className="option-small-card">
                <p>Demontrations</p>
              </div>
              <div className="option-small-card">
                <p>Blog </p>
              </div>
            </div>
          </div>
          <div className="video-box">
            <div className="video-card-tutorial">
              <LiteYouTubeEmbed
                id="L2vS_050c-M"
                title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                activatedClass="lyt-activated"
              />
            </div>
            <div className="video-card-tutorial">
              <LiteYouTubeEmbed
                id="L2vS_050c-M"
                title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                activatedClass="lyt-activated"
              />
            </div>
            <div className="video-card-tutorial">
              <LiteYouTubeEmbed
                id="L2vS_050c-M"
                title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                activatedClass="lyt-activated"
              />
            </div>
            <div className="video-card-tutorial">
              <LiteYouTubeEmbed
                id="L2vS_050c-M"
                title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                activatedClass="lyt-activated"
              />
            </div>
            <div className="video-card-tutorial">
              <LiteYouTubeEmbed
                id="L2vS_050c-M"
                title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                activatedClass="lyt-activated"
              />
            </div>
            <div className="video-card-tutorial">
              <LiteYouTubeEmbed
                id="L2vS_050c-M"
                title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                activatedClass="lyt-activated"
              />
            </div>
            
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
}
