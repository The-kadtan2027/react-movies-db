import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
 
//image
import searchImg from '../../images/search-icon.svg';

//styles
import { Wrapper, Content} from './SearchBarStyles.js';


const SearchBar = ({setSearchTerm}) => {
 
    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => { 
        if(initial.current) {
            initial.current = false;

            return;
        }


        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer);
    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchImg} alt='search-img' />
                <input 
                    type="text"
                    placeholder='Search Movies'
                        onChange={e => setState(e.currentTarget.value)}
                        value={state}
                    />
            </Content>
        </Wrapper>

    )

}

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func
}

export default SearchBar;