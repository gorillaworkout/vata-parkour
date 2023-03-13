import React, { useState } from "react";
import "../Style/Header.scss";
import logo from "../Asset/newbggw.png";
import { AiOutlineInstagram,AiOutlineYoutube,AiOutlineWhatsApp } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";


export default function Header() {
  const [menuActive, setMenuActive] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [listMenu, setListMenu] = useState(["Training", "Learn", "Help"]);

  const openMenu = (value: string) => {
    console.log(value);
    if (menuActive === value) {
      setMenuActive("");
      setToggleMenu(false);
    } else {
      setMenuActive(value);
      setToggleMenu(true);
    }
  };

  const [trainingOpen, setTrainingOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const toggleTraining = () => setTrainingOpen((prevState) => !prevState);
  const toggleLearn = () => setLearnOpen((prevState) => !prevState);
  const toggleHelp = () => setHelpOpen((prevState) => !prevState);

  return (
    <div className="container-header">
      <div className="header-card">
        <img src={logo} alt="" />
        <div className="menu-header">
          {/* {renderMenu()} */}
          <Dropdown isOpen={trainingOpen} toggle={toggleTraining} className="dropdown-container">
            <DropdownToggle caret className={`${trainingOpen? 'active'  : ''}`}>Training</DropdownToggle>
            <DropdownMenu>
              <div className="menu-hidden">
                <div className="card-menu-option">
                  <div className="menu-option card-menu-1">
                    <h4>Parkour Classes</h4>
                    <p>For all ability Levels and age ranges</p>
                  </div>
                  <div className="menu-option card-menu-2">
                    <h4>Private Session</h4>
                    <p>For all ability Levels and age ranges</p>
                  </div>
                  <div className="menu-option card-menu-3">
                    <h4>Military Training</h4>
                    <p>For all ability Levels and age ranges</p>
                  </div>
                </div>
                <div className="menu-social-media">
                  <AiOutlineInstagram className="icon-soc" />
                  <AiOutlineYoutube className="icon-soc" />
                  <AiOutlineWhatsApp className="icon-soc" />
                </div>
              </div>
            </DropdownMenu>
          </Dropdown>
          <Dropdown isOpen={learnOpen} toggle={toggleLearn} className="dropdown-container">
            <DropdownToggle caret>Learn</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem text>Dropdown Item Text</DropdownItem>
              <DropdownItem disabled>Action (disabled)</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown isOpen={helpOpen} toggle={toggleHelp}className="dropdown-container">
            <DropdownToggle caret>Help</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem text>Dropdown Item Text</DropdownItem>
              <DropdownItem disabled>Action (disabled)</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="input-card" style={{display:'none'}}>
          <input type="text" className="input-search" placeholder="Search" />
        </div>
      </div>
      {toggleMenu ? (
        <Fade>
          <div className="menu-hidden">
            <div className="card-menu-option">
              <div className="menu-option">
                <img
                  src="https://parkourlabs.com/wp-content/uploads/Essential/mainmenu/ParkourClasses.png"
                  alt=""
                />
                <h4>Parkour Classes</h4>
                <p>For all ability Levels and age ranges</p>
              </div>
              <div className="menu-option">
                <img
                  src="https://parkourlabs.com/wp-content/uploads/Essential/mainmenu/PrivateGroups.png"
                  alt=""
                />
                <h4>Parkour Classes</h4>
                <p>For all ability Levels and age ranges</p>
              </div>
              <div className="menu-option">
                <img
                  src="https://parkourlabs.com/wp-content/uploads/Essential/mainmenu/ParkourClasses.png"
                  alt=""
                />
                <h4>Parkour Classes</h4>
                <p>For all ability Levels and age ranges</p>
              </div>
            </div>
            <div className="menu-social-media">
              <AiOutlineInstagram className="icon-soc" />
              <AiOutlineInstagram className="icon-soc" />
              <AiOutlineInstagram className="icon-soc" />
            </div>
          </div>
        </Fade>
      ) : (
        <></>
      )}
    </div>
  );
}
