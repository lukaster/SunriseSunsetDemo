import React from "react";
import {Field, ErrorMessage} from "formik";
import TextError from "../TextError/TextError";
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Autocomplete} from '@material-ui/lab'
import {TextField} from '@material-ui/core'
import './AutocompleteSelect.css'

function AutocompleteSelect(props) {
    const {label, name, options, ...rest} = props
    //options = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola"]
    return (
        <>
            <Row>
                <Col className={'autocomplete-col'}>
                    <Field name={name}>
                        {
                            ({field, form}) => {
                                const {setFieldValue} = form;
                                const {value} = field;
                                return (<Autocomplete
                                    id={name}
                                    {...field}
                                    {...rest}
                                    options={options}
                                    getOptionLabel={(option) => option}

                                    style={{width: 300}}
                                    onInputChange={(event, value) => {
                                        console.log(value)
                                        form.values.country = value
                                    }}
                                    renderInput={(params) => {

                                        return (<TextField {...params} label="Country" variant="outlined"/>)
                                    }
                                    }

                                />)
                            }
                        }
                    </Field>

                </Col>
            </Row>
            <Row >
                <Col>
                    <ErrorMessage name={name} component={TextError}/>
                </Col>
            </Row>
        </>
    )
}

export default AutocompleteSelect