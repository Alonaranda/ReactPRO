import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput} from '../components';
import '../styles/styles.css';


export const FormikAbstract = () => {

    return (
        <div>
            <h1>Formik Abstract</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={ ( values ) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
                        lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
                        email: Yup.string().required('Required').email('Invalid email address'),
                        terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                        jobType: Yup.string().required('Required').notOneOf(['it-jr'], 'No debe ser it-jr'),
                    })
                }
            >
                {
                    (formik) => (
                        <Form >
                            <MyTextInput 
                                label="FirstName" 
                                name="firstName" 
                                placeholder="First name..."
                            />
                            
                            <MyTextInput 
                                label="Last Name" 
                                name="lastName" 
                                placeholder="Last name..."
                            />

                            <MyTextInput 
                                label="Email" 
                                name="email" 
                                placeholder="Email..."
                            />
                            
                            <MySelect label="Job Type" name="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT-Senior</option>
                                <option value="it-jr">IT-junior</option>
                            </MySelect> 

                            <MyCheckbox
                                label="Terms and Conditions"
                                name="terms"
                            />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>


        </div>
    )
}
