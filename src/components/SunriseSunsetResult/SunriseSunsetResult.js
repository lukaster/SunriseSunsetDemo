import React from "react";
import {Container, Row, Col, Media} from "react-bootstrap";
import './SunriseSunsetResult.css'

function SunriseSunsetResult(props) {
    const {resultsReady, selectedCountry, sunriseTime, sunsetTime, coords} = props
    console.log(`country: ${selectedCountry}, latlng: ${Math.round(coords[0] * 100) / 100} ${Math.round(coords[1] * 100) / 100} `)
    const imageSize = 40;
    return (
        <>
            <div style={{display: resultsReady ? 'block' : 'none'}}>
                <Media>
                    <img
                        width={imageSize}
                        height={imageSize}
                        className="result-img"
                        src={require('../../static/images/sun.png')}
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>
                            Sunrise is at {sunriseTime}
                        </h5>
                    </Media.Body>
                </Media>
                <Media>
                    <img
                        width={imageSize}
                        height={imageSize}
                        className="result-img"
                        src={require('../../static/images/moon.png')}
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>
                            Sunset is at {sunsetTime}
                        </h5>
                    </Media.Body>
                </Media>
            </div>
        </>
    )
}

export default SunriseSunsetResult