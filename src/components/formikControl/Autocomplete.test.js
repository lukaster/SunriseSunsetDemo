import React from "react";
import AutocompleteSelect from "../select/AutocompleteSelect";
import {render} from '@testing-library/react'
import FormikControl from "./FormikControl";
import {Formik, Form} from 'formik'
import * as Yup from "yup";


const initialValues = {
    country: ''
};
const validationSchema = Yup.object({
    country: Yup.string().required('Required')
});

describe('Formik', () => {

    describe('render', () => {
        it('should return a container', ()=> {
            const {container} = render(<Formik initialValues={initialValues}
                                               validationSchema={validationSchema}
                                               onSubmit={() => {
                                               }}>
                {
                    formik => {
                        //console.log(formik.errors)
                        return <Form>
                            <FormikControl
                                control={'select'} label={''}
                                name={'country'}
                                options={[{key: 'Select country', value: ''}, {key: 'a', value: 'a'}, {
                                    key: 'b',
                                    value: 'b'
                                }]}
                            />
                        </Form>
                    }
                }
            </Formik>);
            console.log(container)
            expect(container).toBeDefined();
        });
    })
});