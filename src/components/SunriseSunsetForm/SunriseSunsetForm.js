import React from "react";
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './formikControl/FormikControl'
import {Button, Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import countryList from '../static/data/countryList.json'


function SunriseSunsetForm(props) {
    //console.log(countryList)
    var dropdownCountryOptions = countryList.map(countryName=>{
        return  {key: countryName, value: countryName}
    })
    dropdownCountryOptions.unshift({key: 'Select country', value: ''})


    const initialValues = {
        date: new Date(),
        country: ''
    };
    const validationSchema = Yup.object({
        date: Yup.date().required('Required').nullable(),
        country: Yup.string().required('Required')
    });
    const onSubmit = async values => {
        console.log('Form data', values)

        const country = values.country;
        props.setSelectedCountry(country)
        const countryInfo = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
        console.log(countryInfo)

        const lat = countryInfo.data[0].latlng[0];
        const lng = countryInfo.data[0].latlng[1];
        props.setCoords([lat,lng])

        const date = values.date.toISOString().split('T')[0]
        const resp = await axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}`);
        console.log(resp)

        console.log(resp.data.results.sunrise)
        const sunrise = resp.data.results.sunrise;
        props.setSunriseTime(sunrise)
        console.log(resp.data.results.sunset)
        const sunset = resp.data.results.sunset;
        props.setSunsetTime(sunset)

        props.setResultsReady(true)
    };
    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {
                formik => {
                    //console.log(formik.errors)
                    return <Form className={'sunrise-form'}>
                        <Container>
                            <Row>
                                <Col md={'6'}>
                                    <FormikControl
                                        control={'date'} label={'date'}
                                        name={'date'}
                                    />
                                </Col>
                                <Col md={'6'}>
                                    <FormikControl
                                        control={'select'} label={''}
                                        name={'country'}
                                        options={dropdownCountryOptions}
                                    />
                                </Col>
                            </Row>
                            <Row  className="show-grid" float="center">
                                <Col md={{ size: 4, offset: 4 }} >
                                    <Button className={'btn'}
                                        variant="outline-dark" type={'submit'}
                                        disabled={!formik.isValid}>

                                        <div id="btn_container"><img className={'button-img'} src={require('../static/images/sun.png')}/>
                                        <span className="btn-txt">Show</span>
                                        </div>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                }
            }
        </Formik>
    );
}

export default SunriseSunsetForm