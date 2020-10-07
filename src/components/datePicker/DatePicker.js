import React from "react";
import {Field, ErrorMessage} from "formik";
import TextError from "./TextError";
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function DatePicker(props) {
    const {label, name, ...rest} = props;
    return (
        <>
            <Row>

                <Col md={'8'} xs={'6'}>
                    <Field name={name}>
                        {
                            ({field, form}) => {
                                const {setFieldValue} = form;
                                const {value} = field;
                                return <DateView
                                    id={name}
                                    {...field}
                                    {...rest}
                                    selected={value}
                                    dateFormat="dd/MM/yyyy"
                                    onChange={val => setFieldValue(name, val)}/>
                            }
                        }
                    </Field>
                </Col>
                <Col md={'4'} xs={'1'}>
                    <label htmlFor={name}>{label}</label>
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

export default DatePicker