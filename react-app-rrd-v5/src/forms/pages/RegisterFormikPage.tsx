import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { MyTextInput } from "../components";
import "../styles/styles.css";

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password1: "",
                    password2: "",
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema = { Yup.object({
                    name: Yup.string()
                        .max(15, "Maximo 15 caracteres")
                        .min(2, 'Minimo 3 caracteres')
                        .required("Required"),
                    email: Yup.string()
                        .required("Required")
                        .email("Invalid email address"),
                    password1: Yup.string()
                        .min(6, 'Minimo 6 caracteres')
                        .required("Required"),
                    password2: Yup.string()
                        .oneOf([Yup.ref('password1')], 'Debe ser igual que password1')
                        .required("Required")
                })}
            >
                {
                    ({ handleReset}) => (
                        <Form>
                            <MyTextInput
                                label="Name"
                                name="name"
                                placeholder="Name ..."
                            />

                            <MyTextInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Email ..."
                            />

                            <MyTextInput
                                label="Password"
                                name="password1"
                                type="password"
                                placeholder="******"
                            />

                            <MyTextInput
                                label="Confirm Password"
                                name="password2"
                                type="password"
                                placeholder="******"
                            />

                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleReset}>Reset Form</button>
                        </Form>
                    )
                }
            </Formik>


        </div>
    );
};
