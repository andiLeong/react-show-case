import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormGroup from 'component/form/FormGroup';

function Register(props) {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            password: '',
            confirm_password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(2).required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(3).required(),
            confirm_password: Yup.string()
                .oneOf([Yup.ref('password')], 'Your passwords do not match')
                .required(),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const formGroups = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'Your name here',
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'Your email here',
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Your password here',
        },
        {
            name: 'confirm_password',
            type: 'password',
            placeholder: 'Your password confirmation here',
        },
    ];

    return (
        <div className={`mx-auto max-w-xl p-4 bg-white  rounded shadow-md`}>
            <form onSubmit={formik.handleSubmit}>
                <div className={`my-4`}>
                    <h1
                        className={`text-sky-400 text-xl font-bold text-center uppercase`}
                    >
                        register
                    </h1>
                </div>

                <div className={`space-y-4`}>
                    {formGroups.map((group, index) => (
                        <FormGroup
                            key={index}
                            name={group.name}
                            formik={formik}
                            placeholder={group.placeholder}
                            type={group.type ?? 'text'}
                        />
                    ))}
                </div>

                <div className={`space-x-4 mt-10 flex justify-end`}>
                    <button
                        onClick={() => formik.resetForm()}
                        type={`button`}
                        className={`btn default-btn`}
                    >
                        Reset
                    </button>
                    <button type={`submit`} className={`btn primary-btn`}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;
