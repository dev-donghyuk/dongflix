import React, { useState } from 'react';
import Wrapper from './styles';
import { Grid } from '@material-ui/core';
const Error = ({ text }) => {
    return (
        <Wrapper>
            <h2>{text}</h2>
        </Wrapper>
    );
};

export default Error;
