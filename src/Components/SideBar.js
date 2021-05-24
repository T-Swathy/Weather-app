import React from 'react';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';
import device from './DeviceName.js';
import styled from 'styled-components';
import MediumFont from './MediumFont';
import SmallLabel from './SmallFont';
const drawerWidth = 240;


const WeatherIcon = styled.div`
  display: flex;
  justify-content:left;
  align-items: center;
  font-size: 70px;
  color: black;
  @media ${device.tablet} {
    font-size: 100px;
    justify-content: flex-end;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.laptopL} {
    font-size: 140px;
  }
`;
const Temperature = styled.h3`
  display: block;
  font-size: 50px;
  font-weight: 400;
  color: black;
  @media ${device.tablet} {
    font-size: 70px;
  }
  @media ${device.laptop} {
    font-size: 80px;
  }
  @media ${device.laptopL} {
    font-size: 110px;
  }`

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
 
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    color:'white',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#7B68EE'  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor:'blue',
    padding: theme.spacing(3),
  
  },
}));


 const Sidebar=({result}) =>{
  const {
    city,
    country,
    date,
    description,
    main,
    temp,
    sunset,
    sunrise,
    humidity,
    wind,
    highestTemp,
    lowestTemp,
    forecast,
  } = result;
  let weatherIcon = null;

  if (main === 'Thunderstorm') {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (main === 'Drizzle') {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (main === 'Rain') {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (main === 'Snow') {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (main === 'Clear') {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (main === 'Clouds') {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }
  const classes = useStyles();
  
 
  return (

   
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"

    >
         <List >
        {['METEOROLOG'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><WbSunnyRoundedIcon style={{ color:'white' }}/></ListItemIcon>
            <ListItemText primary={text} style={{color: 'white' }}></ListItemText>
          </ListItem>
        ))}
      </List>
      <Divider/>
     
      <List>
        {['Dashboard'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><DashboardRoundedIcon style={{ color:'white' }}/></ListItemIcon>
            <ListItemText primary={text}  style={{color: 'white' }}/>
          </ListItem>
        ))}
      </List>
      <List>
        {['Statistics'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><BarChartRoundedIcon style={{ color:'white' }} /></ListItemIcon>
            <ListItemText primary={text}  style={{color: 'white' }}/>
          </ListItem>
        ))}
      </List>
      <List>
        {['Map'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><EditLocationRoundedIcon style={{ color:'white' }}/></ListItemIcon>
            <ListItemText primary={text}  style={{color: 'white' }}/>
          </ListItem>
        ))}
      </List>
      <List>
        {['Calendar'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><CalendarTodayRoundedIcon style={{ color:'white' }}/></ListItemIcon>
            <ListItemText primary={text}  style={{color: 'white' }}/>
          </ListItem>
        ))}
      </List>
    
      <Card style={{ backgroundColor:'white', color: 'black', margin: '15px' }}>

                      <Card.Body style={{ textAlign: 'center' }}>
                      <MediumFont>
          {city}, {country}
        </MediumFont>
        <SmallLabel weight="400">{date}</SmallLabel>
        <WeatherIcon>{weatherIcon}</WeatherIcon>
        <Temperature>{Math.floor(temp)}&#176;</Temperature>
          <SmallLabel weight="400" firstToUpperCase>
            {description}
          </SmallLabel>
                      </Card.Body>
                    </Card>
      
      
    
    </Drawer>
   
  
  );
}
export default Sidebar;



