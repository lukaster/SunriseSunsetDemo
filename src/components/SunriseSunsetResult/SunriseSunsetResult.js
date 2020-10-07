import React from "react";
import {Container, Row, Col} from "react-bootstrap";


function SunriseSunsetResult(props) {
    const {resultsReady, selectedCountry, sunriseTime, sunsetTime, coords} = props
    console.log(`country: ${selectedCountry}, latlng: ${Math.round(coords[0] * 100) / 100} ${Math.round(coords[1] * 100) / 100} `)
    return (
        <Container>
            <Row>
                <Col>
                    <div style={{display: resultsReady ? 'block' : 'none'}}>
                        {/*  <h3>{selectedCountry}:</h3> */}

                        <Row>
                            <img className={'button-img'} src={require('../static/images/sun.png')}/>
                            <h5>Sunrise is at{sunriseTime}</h5>
                        </Row>
                        <Row>
                            <img className={'button-img'} src={require('../static/images/moon.png')}/>
                            <h5>Sunset is at {sunsetTime}</h5>
                        </Row>
                        {/*  <hr/>
                          <h5>Map coordinates</h5>
                          <h6>lat: {Math.round(coords[0] * 100) / 100} lng: {Math.round(coords[1] * 100) / 100}</h6>
                         <h6>Times are in UTC, summer time adjustments not included</h6> */}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SunriseSunsetResult