import React from 'react';
import Form from './Form';
import ConfigButton from "../ConfigButton";
import { Divider } from '@material-ui/core';

const FormPage = () => {
    return (
        <div>
            <ConfigButton />
            <Form />
        </div>
    );
}

export default FormPage;