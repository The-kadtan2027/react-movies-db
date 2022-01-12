import React from 'react';
import PropTypes from 'prop-types';

//styles

import { Wrapper, Content } from './GridStyles.js'

const Grid = ({ header, children}) => {

    return (
        <Wrapper>
            <h1>{header}</h1>
            <Content>{children}</Content>
        </Wrapper>
    )
}

Grid.propTypes = {
    header: PropTypes.string,
}

export default Grid
