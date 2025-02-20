import React from 'react';

const Header = ({ handleToggleDarkMode}) => {
    return (
        <div className='header'>
            <h1>JobPreps</h1>
            <button 
                onClick = {() => 
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                } 
                className='save'
            >
                Dark Mode
            </button>
        </div>
    );
};

export default Header;