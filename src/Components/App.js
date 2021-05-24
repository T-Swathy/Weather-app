import React from 'react';
import styled from 'styled-components';
import SearchCity from './SearchCity';
import device from './DeviceName.js';
import Result from './Result';
import Sidebar from './SideBar';
import { Button, Card } from 'react-bootstrap';




const WeatherWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
  position: relative;
`;



class App extends React.Component {
  state = {
    value: 'chennai',
    weatherInfo:{ city:" ",
      country:" ",
      date:" ",
      description:" ",
      main: " ",
      temp:" ",
      highestTemp:" ",
      lowestTemp:" ",
      sunrise:" ",
      sunset:" ",
      clouds:" ",
      humidity:" ",
      wind: " ",
      forecast:[],},
    error: false,
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  componentDidMount() {
    this.handleSearchCity();
  }

  handleSearchCity = () => {
    const value = this.state.value;
    const APIkey = '12345678';//Enter your API key

    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${APIkey}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${APIkey}&units=metric`;

    Promise.all([fetch(weather), fetch(forecast)])
      .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);
        }
        throw Error(res1.statusText, res2.statusText);
      })
      .then(([data1, data2]) => {
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'Nocvember',
          'December',
        ];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',, 'Friday', 'Saturday'];
        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
          months[currentDate.getMonth()]
        }`;
        const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
        const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

        const weatherInfo = {
          city: data1.name,
          country: data1.sys.country,
          date,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          forecast: data2.list,
        };
        this.setState({
          weatherInfo,
          error: false,
        });
      })
      .catch(error => {
        console.log(error);

        this.setState({
          error: true,
          weatherInfo: null,
        });
      });
  };

  handleImage = str => {
    this.setState({ value: str }, () => {
      this.handleSearchCity();
    });
  };
  render() {
    const { value, weatherInfo, error } = this.state;
    return (
      <>
       <Sidebar result={weatherInfo}/> 

        <div style={{ marginLeft: '17vw', padding: '30px' }}>
          <WeatherWrapper>
            <div className="container" style={{ marginBottom: '30px' }}>
          <div className="row">
            <SearchCity
              style={{ height: '100vh' }}
              defaultValue={value}
              showResult={(weatherInfo || error) && true}
              change={this.handleInputChange}
              submit={e => {
                e.preventDefault();
              }}
            />
            <div style={{ textAlign: 'center', padding: '10px' }} >
              <Button onClick={this.handleSearchCity} style={{ backgroundColor: '#7B68EE' }}>
                Search
              </Button>
         
            </div></div>
    
              <div className="row">

                <div className="col-md-3">
                  <button onClick={() => this.handleImage('chennai')} style={{ border: '0px' }}>
                    <Card style={{ backgroundColor:'white', color: 'black', margin: '20px' }}>
                      <Card.Img
                        variant="top"
                        height="150px"
                        src="https://static.toiimg.com/thumb/msid-78398342,width-1200,height-900,resizemode-4/.jpg"
                      />

                      <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title>CHENNAI</Card.Title>
                      </Card.Body>
                    </Card>
                  </button>
                </div>
                <div className="col-md-3">
                  <button onClick={() => this.handleImage('paris')} style={{ border: '0px' }}>
                    <Card style={{ backgroundColor: 'white', color: 'black', margin: '15px' }}>
                      <Card.Img
                        variant="top"
                        height="150px"
                        src="https://cdn.lifestyleasia.com/wp-content/uploads/sites/3/2020/11/16190957/photo-1543349689-9a4d426bee8e-1243x900.jpeg"
                      />
                      <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title>PARIS</Card.Title>
                      </Card.Body>
                    </Card>
                  </button>
                </div>
                <div className="col-md-3">
                  <button onClick={() => this.handleImage('london')} style={{ border: '0px' }}>
                    <Card style={{ backgroundColor: 'white', color: 'black', margin: '15px' }}>
                      <Card.Img
                        height="150px"
                        variant="top"
                        src="https://img.theweek.in/content/dam/week/news/world/images/2020/8/24/london-bridge.jpg"
                      />
                      <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title>London</Card.Title>
                      </Card.Body>
                    </Card>
                  </button>
                </div>
                <div className="col-md-3">
                  <button onClick={() => this.handleImage('singapore')} style={{ border: '0px'}}>
                    <Card style={{ backgroundColor: 'white', color: 'black', margin: '15px' }}>
                      <Card.Img
                        height="150px"
                        variant="top"
                        src="https://www.nationsonline.org/gallery/Singapore/Merlion-at-the-Singapore-River.jpg"
                      />
                      <Card.Body>
                        <Card.Title>Singapore</Card.Title>
                      </Card.Body>
                    </Card>
                  </button>
                </div>
              </div>
            </div>
            

            {weatherInfo && <Result weather={weatherInfo} />}
           
          </WeatherWrapper>
        </div>
      </>
    );
  }
}

export default App;
