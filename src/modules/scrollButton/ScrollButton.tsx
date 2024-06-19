import React, {useState} from 'react'; 
import Fab from '@mui/material/Fab';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';

const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };
  
const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

const buttonStyled = {
    display: visible ? 'inline' : 'none',
    position: 'fixed',
    bottom: 20,
    right: 30,
    zIndex: 99,
    cursor: 'pointer',
} as React.CSSProperties;

return (
    <Fab color="primary" onClick={scrollToTop} style={buttonStyled}>
        <UpIcon sx={fabStyle}/>
    </Fab>
); 
} 

export default ScrollButton;