import React from "react";

import Autocomplete from "./select/Autocomplete";

import DatePicker from "./datePicker/DatePicker";

function FormikControl(props) {
    const {control, ...rest} = props
    switch (control) {
        case 'input':
            return null
        case 'textarea':
            return null
        case 'select':
            return <Autocomplete {...rest}/>
        case 'radio':
            return null
        case 'checkbox':
            return null
        case 'date':
            return <DatePicker {...rest}/>
        default:
            return null
    }
}

export default FormikControl

//decide which of the different form field will be rendered based on control prop