import React, { useState } from 'react';
import { ReactComponent as FishingRod } from './icons/fishing.svg'
import { ReactComponent as Hamburger } from './icons/fast-food.svg'
import { ReactComponent as List } from './icons/list.svg'
import { ReactComponent as LeftChevron } from './icons/left-chevron.svg'
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as Arrow} from './icons/right-arrow.svg'

import './index.css';



function App() {
  return (
   <Navbar>
     <NavItem icon={<FishingRod />}/>
     <NavItem icon={<Hamburger />}></NavItem>
     <NavItem icon="🌶️"/>
     <NavItem icon={<LeftChevron />}/>

     <NavItem icon ={<List />}>
       <DropdownMenu></DropdownMenu>
     </NavItem>
   </Navbar>
  );
}
function Navbar (props) {
  return (
<nav className="navbar">
  <ul className="navbar-nav"> { props.children }</ul>

</nav>

  )
}



function DropdownMenu () {

  const [activeMenu, setActiveMenu] = useState('main'); //setting animals
  const [menuHeight, setMenuHeight] = useState(null)

  function calcHeight(el) {
    const height = el.offsetHeight;
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu (props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>

        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return(
    <div className="dropdown" style = {{height : menuHeight}}>
      <CSSTransition in={activeMenu === 'main'}
       unmountOnExit timeout={500}
       classNames="menu-primary"
       onEnter={calcHeight}>
         <div className="menu">
      <DropdownItem>My Profile</DropdownItem>

      <DropdownItem
      leftIcon={<FishingRod />}
      goToMenu="settings"
      
      >
      Fishing
      </DropdownItem>
      </div>
</CSSTransition>

<CSSTransition 
  in={activeMenu === 'settings'}
       unmountOnExit timeout={500}
       classNames="menu-secondary">
         <div className="menu">
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Settings</DropdownItem>

      <DropdownItem
      
      leftIcon={<LeftChevron />}
      goToMenu="main">

      </DropdownItem>
      </div>
</CSSTransition>
    </div>
  )
}



function NavItem(props){

  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

       {open && props.children}
    </li>
  )
}

export default App;
