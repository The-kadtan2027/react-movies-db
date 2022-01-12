import React from 'react'
import PropTypes from 'prop-types'

//styles
import { Wrapper } from './ButtonStyles.js'


const Button = ({text, callback}) => {



    return (
        <Wrapper type='button' onClick={callback}>
        {text}
        </Wrapper>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func
}


export default Button;
