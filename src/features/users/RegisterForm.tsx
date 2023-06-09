import { Formik, Form, ErrorMessage } from "formik";
import TextInput from "../../app/common/form/textInput";
import { Button, Header, Label } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import * as Yup from 'yup'
import ValidationError from "../errors/ValidationError";

export default observer(function RegisterForm() {
    const { userStore } = useStore();
    return (
        <Formik
            initialValues={{ displayName: '', userName: '', email: '', password: '', error: null }}
            onSubmit={(values, { setErrors }) => userStore.register(values)
                .catch(error => setErrors({ error }))}
            validationSchema={Yup.object({
                displayName: Yup.string().required(),
                userName: Yup.string().required(),
                email: Yup.string().required(),
                password: Yup.string().required(),
            })}
        >
            {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
                <Form className='ui form error' onSubmit={handleSubmit} autoComplete="off">
                    <Header as='h2' content='Sign up to Reactivities' color='teal' textAlign="center" />
                    <TextInput placeholder="Display Name" name="displayName" label="Display Name" />
                    <TextInput placeholder="Username" name="username" label="Username" />
                    <TextInput placeholder="Email" name="email" label="Email" />
                    <TextInput placeholder="Password" name="password" type='password' label="Password" />
                    <ErrorMessage name='error' render={() =>
                       <ValidationError errors={errors.error} /> }
                       />
                    <Button
                        disabled={!isValid  || isSubmitting}
                        loading={isSubmitting}
                        positive content='Register'
                        type="submit" fluid />
                </Form>
            )}
        </Formik>
    )
})