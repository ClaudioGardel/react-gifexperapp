
import React, { useState }from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {


    const [InputValue, setInputValue] = useState('')

    const handleInputChange = ( e )=>{
        setInputValue(  e.target.value );
    }
 
    const handleSubmit = (e)=> {
        e.preventDefault();
        if (InputValue.trim().length>2){
            setCategories(cats => [InputValue, ...cats])
            setInputValue('')
        }
        
        // setCategories([categories.concat('SpiderMan')])
        
    }
 

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'  
                placeholder='Buscar Gifs' 
                value={InputValue}
                onChange={handleInputChange}
            />
            <hr/>
            <button onClick={handleSubmit}>Buscar</button>
            
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
