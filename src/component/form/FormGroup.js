import React from 'react';

function FormGroup({ type, name, placeholder, formik }) {
    function toLabel() {
        return toUpper();
    }

    function toUpper() {
        return name
            .split('_')
            .map(ar => firstToUpper(ar))
            .join(' ');
    }

    function firstToUpper(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    return (
        <div className={`flex flex-col space-y-2`}>
            <label
                htmlFor={name}
                className={`text-gray-500 text-sm font-medium`}
            >
                {toLabel()}
            </label>
            <input
                className={`p-2 rounded-md shadow border-gray-300 sm:text-sm focus:border-indigo-500 focus:ring-indigo-500 block`}
                id={name}
                type={type ?? 'text'}
                placeholder={placeholder ?? name}
                {...formik.getFieldProps(name)}
            />
            {formik.touched[name] && formik.errors[name] ? (
                <p className={`text-xs text-red-600 italic`}>
                    {formik.errors[name]}
                </p>
            ) : null}
        </div>
    );
}

export default FormGroup;
