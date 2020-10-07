import React from "react";
import {Field, ErrorMessage} from "formik";
import TextError from "../TextError";
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Autocomplete} from '@material-ui/core'

function Autocomplete(props) {
    const {label, name, options, ...rest} = props
    return (
        <>
            <Row>
                <Col>
                    <label htmlFor={name}>{label}</label>
                    <Field as={'select'} id={name} name={name} {...rest} >
                        {
                            options.map(option => {
                                return (
                                    <option key={option.value} value={option.value}>
                                        {option.key}
                                    </option>)
                            })
                        }

                    </Field>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ErrorMessage name={name} component={TextError}/>
                </Col>
            </Row>
        </>
    )
}

export default Autocomplete