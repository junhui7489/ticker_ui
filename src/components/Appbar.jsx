import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "../App.css";
import logo from "../assets/logo-social.png";


class ButtonAppBar extends React.PureComponent{ //pureComponent only renders if prop and state is passed, not even when parent component is updated, to increase performance

  constructor(props){
    super(props);
    this.state = {info: []};
  }

  render(){
    return (
      <React.Fragment>
        <div className={this.props.className}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar >
              <img src={logo} style={{width:'5%', marginRight: '10px'}} alt="Logo" />
                <Typography
                  variant="h6"
                  component="div"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                > 
              LOGO
            </Typography>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
      </React.Fragment>
      );
    }
}

export default ButtonAppBar;