import React from "react";
import {Field, ErrorMessage} from "formik";
import TextError from "../TextError/TextError";
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './DatePicker.css'

function DatePicker(props) {
    //console.log('props',props)
    const {label, name, ...rest} = props;

    return (
        <>
            <Row className={'date-row'}>

                <Col className="myContainter">
                    <Field name={name}>
                        {
                            ({field, form}) => {
                                const {setFieldValue} = form;
                                const {value} = field;
                                return <DateView className="myDatePicker"
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
                <Col className={'label-icon'}>
                    <label htmlFor={name}>
                        <img className={'label-img'}
                             width={30}
                             height={30}
                             src={require('../../static/images/date_picker.png')}/>
                    </label>
                </Col>
            </Row>
            <Row className={'error-row'}>
                <Col>
                    <ErrorMessage name={name} component={TextError}/>
                </Col>
            </Row>
        </>
    )
}

export default DatePicker