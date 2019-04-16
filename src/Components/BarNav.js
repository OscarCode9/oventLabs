import React, { useEffect, useContext, useReducer, useState } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { reducer, initialState  } from '../Redux/store'
const styles = {
  root: {
    flexGrow: 1,

  },
  grow: {
    flexGrow: 1,

  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {

  const [ scrollW, setScrollW ] = useState(0);
  
  const { classes, lenguage } = props;

  const styleNav = {
    backgroundColor: '#2196f300',
    position: 'fixed'
  }

  function handleScroll(event) {
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
    let scroll = {
       x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
       y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    };
    setScrollW(scroll.y)
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll, { passive: true })
  }, [])

    return (
      <div className={classes.root}>
        <AppBar position="static" style={scrollW <= 80 ? styleNav : { position: 'fixed', transition: '.8s' } }>
          <Toolbar style={{ padding: '0px', paddingLeft: '24px', paddingRight: '0px',  }}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <span style={{ fontFamily: "'Pacifico', cursive" }} > Ovent </span> Labs 
            </Typography>
  
            <ul style={{ fontFamily: "'Fira Sans', sans-serif", }} className='navBarUl' >
              <li className='navBarLi' >
                {lenguage.ourServices}
              </li>
              <li className='navBarLi'>
                {
                  lenguage.aboutUs
                }
              </li>
              <li className='navBarLi'>
                Blog
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      </div>
    );
  
  
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);