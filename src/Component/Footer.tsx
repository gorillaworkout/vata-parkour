import React, { Component } from "react";
import {AiOutlineHome,AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
import '../././Style/Home.scss'
import AOS from "aos";
import "aos/dist/aos.css";
export default function Footer() {
    AOS.init();
  return (
    <>
      <div className="card-footer" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.924819524854!2d106.75455441459874!3d-6.273616063159681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1326876a18d%3A0xb900f76c6e31673f!2sFITPARQ%20BINTARO!5e0!3m2!1sen!2sid!4v1677094910649!5m2!1sen!2sid"
          width="400"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="footer-option">
          <h3>Layanan</h3>
          <p>Parkour</p>
          <p>Parkour</p>
          <p>Parkour</p>
          <p>Parkour</p>
        </div>
        <div className="footer-option">
          <h3>Lainnya</h3>
          <p>Parkour</p>
          <p>Parkour</p>
          <p>Parkour</p>
          <p>Parkour</p>
        </div>
        <div className="footer-option">
          <h3>Kontak</h3>
          <p>
            <AiOutlineHome />
            Jalan Bintaro Bintara 30 menit
          </p>
          <p>
            <AiOutlinePhone />
            087785192296
          </p>
          <p>
            <AiOutlineMail />
            vatavata@gmail.com
          </p>
        </div>
      </div>
      <div className="copy-right">
        <p>Copyright 2023, Gorillaworkout</p>
      </div>
    </>
  );
}
