import React, {useState} from "react";
import SunriseSunsetForm from "./SunriseSunsetForm/SunriseSunsetForm";
import SunriseSunsetResult from "./SunriseSunsetResult/SunriseSunsetResult"
import {Container, Row} from "react-bootstrap";


function SunriseSunsetApp() {
    const [sunriseTime, setSunriseTime] = useState('')
    const [sunsetTime, setSunsetTime] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')
    const [coords, setCoords] = useState([0,0]) //lat lng
    const [resultsReady, setResultsReady]=useState(false)

    return (
        <Container>
            <SunriseSunsetForm

                setSelectedCountry={setSelectedCountry}
                setSunriseTime={setSunriseTime}
                setSunsetTime={setSunsetTime}
                setCoords={setCoords}
                setResultsReady={setResultsReady}
            />
            <hr/>

            <SunriseSunsetResult
                key={selectedCountry+sunriseTime}
                resultsReady={resultsReady}
                selectedCountry={selectedCountry}
                sunriseTime={sunriseTime}
                sunsetTime={sunsetTime}
                coords={coords}
            />
        </Container>
    )
}


export default SunriseSunsetApp