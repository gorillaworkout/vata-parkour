import React, { useState } from "react";
import "../../Style/Home.scss";
import Header from "../../Component/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import CarouselSlider from "../../Component/Carousel";
import Parkour1 from "../../Asset/parkour/parkour1.jpg";
import Accordion from "react-bootstrap/Accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import {AiOutlineHome,AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
export default function Home() {
  AOS.init();

  toast.configure();
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="container-home">
        <div className="container-ins">
          <CarouselSlider data-aos="fade-up" />
          <h1 data-aos="fade-up">WELCOME TO VATA PARKOUR</h1>
          <h3 data-aos="fade-up">
            Parkour Tutorials, Demonstrations & Articles
          </h3>
          <div className="detail-class" data-aos="fade-up">
            <div className="detail-card">
              <img src={Parkour1} alt="" />
              <div className="detail-category">
                <p>13 Categoriees</p>
                <p>13 Categoriees</p>
              </div>
              <div className="detail-title">
                <p>All Tutorials</p>
                <p>in-Depth video series on specific movement topics</p>
              </div>
            </div>
            <div className="detail-card">
              <img src={Parkour1} alt="" />
              <div className="detail-category">
                <p>13 Categoriees</p>
                <p>13 Categoriees</p>
              </div>
              <div className="detail-title">
                <p>All Tutorials</p>
                <p>in-Depth video series on specific movement topics</p>
              </div>
            </div>
            <div className="detail-card">
              <img src={Parkour1} alt="" />
              <div className="detail-category">
                <p>13 Categoriees</p>
                <p>13 Categoriees</p>
              </div>
              <div className="detail-title">
                <p>All Tutorials</p>
                <p>in-Depth video series on specific movement topics</p>
              </div>
            </div>
          </div>
          <div className="explore-card" data-aos="fade-up">
            <h1 data-aos="fade-up">Explore Series</h1>
            <p data-aos="fade-up">
              Our Tutorials give in-depth help and advice. Demonstrations are a
              reference guide to see how to perform a movement
            </p>
          </div>
          <div className="detail-skill">
            <div className="small-card-skill" data-aos="fade-up">
              <div className="skill-left">
                <p>Balancing</p>
                <div className="skill-demot">
                  <p>Demonstration</p>
                </div>
              </div>
              <div className="skill-right">
                <img src={Parkour1} alt="" />
              </div>
            </div>
            <div className="small-card-skill" data-aos="fade-up">
              <div className="skill-left">
                <p>Balancing</p>
                <div className="skill-demot">
                  <p>Demonstration</p>
                </div>
              </div>
              <div className="skill-right">
                <img src={Parkour1} alt="" />
              </div>
            </div>
            <div className="small-card-skill" data-aos="fade-up">
              <div className="skill-left">
                <p>Balancing</p>
                <div className="skill-demot">
                  <p>Demonstration</p>
                </div>
              </div>
              <div className="skill-right">
                <img src={Parkour1} alt="" />
              </div>
            </div>
            <div className="small-card-skill" data-aos="fade-up">
              <div className="skill-left">
                <p>Balancing</p>
                <div className="skill-demot">
                  <p>Demonstration</p>
                </div>
              </div>
              <div className="skill-right">
                <img src={Parkour1} alt="" />
              </div>
            </div>
            <div className="small-card-skill" data-aos="fade-up">
              <div className="skill-left">
                <p>Balancing</p>
                <div className="skill-demot">
                  <p>Demonstration</p>
                </div>
              </div>
              <div className="skill-right">
                <img src={Parkour1} alt="" />
              </div>
            </div>
            <div className="small-card-skill" data-aos="fade-up">
              <div className="skill-left">
                <p>Balancing</p>
                <div className="skill-demot">
                  <p>Demonstration</p>
                </div>
              </div>
              <div className="skill-right">
                <img src={Parkour1} alt="" />
              </div>
            </div>
            <div className="small-card-skill" data-aos="fade-up">
              <div className="skill-left">
                <p>Balancing</p>
                <div className="skill-demot">
                  <p>Demonstration</p>
                </div>
              </div>
              <div className="skill-right">
                <img src={Parkour1} alt="" />
              </div>
            </div>
            <div className="small-card-skill" data-aos="fade-up">
              <div className="skill-left">
                <p>Balancing</p>
                <div className="skill-demot">
                  <p>Demonstration</p>
                </div>
              </div>
              <div className="skill-right">
                <img src={Parkour1} alt="" />
              </div>
            </div>
            <div className="small-card-skill" data-aos="fade-up">
              <div className="skill-left">
                <p>Balancing</p>
                <div className="skill-demot">
                  <p>Demonstration</p>
                </div>
              </div>
              <div className="skill-right">
                <img src={Parkour1} alt="" />
              </div>
            </div>
            <div className="small-card-skill" data-aos="fade-up">
              <div className="skill-left">
                <p>Balancing</p>
                <div className="skill-demot">
                  <p>Demonstration</p>
                </div>
              </div>
              <div className="skill-right">
                <img src={Parkour1} alt="" />
              </div>
            </div>
            <div className="small-card-skill" data-aos="fade-up">
              <div className="skill-left">
                <p>Balancing</p>
                <div className="skill-demot">
                  <p>Demonstration</p>
                </div>
              </div>
              <div className="skill-right">
                <img src={Parkour1} alt="" />
              </div>
            </div>
          </div>
          <div className="accordion-card">
            <h1 data-aos="fade-up">FAQ</h1>
            <Accordion data-aos="fade-up">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="card-footer" data-aos="fade-up">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.924819524854!2d106.75455441459874!3d-6.273616063159681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1326876a18d%3A0xb900f76c6e31673f!2sFITPARQ%20BINTARO!5e0!3m2!1sen!2sid!4v1677094910649!5m2!1sen!2sid" width="400" height="300"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                <AiOutlineHome/> 
                Jalan Bintaro Bintara 30 menit</p>
              <p>
                <AiOutlinePhone/>
                087785192296</p>
              <p>
                <AiOutlineMail/>
                vatavata@gmail.com</p>
              
            </div>
          </div>
          <div className="copy-right">
            <p>Copyright 2023, Gorillaworkout</p>
          </div>
        </div>
      </div>
    </>
  );
}
