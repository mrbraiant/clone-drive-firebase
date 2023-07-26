import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import './home.css';
// import Search from '@material-design-icons/svg/outlined/search.svg';

function Home(props) {
    return (
        <header className='header'>
            <div className='navbar'>
                <div className='logo'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png" alt="logo" />
                    <h2>Drive</h2>
                </div>

                <TextField
                    id="input-with-icon-textfield"
                    // label="TextField"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                    }}
                    // variant="standard"
                />

                {/* <input type="text" placeholder="Search on Drive" /> */}
                <div className='profile'>
                    <img src={props.login.image} alt="profile" data-s />
                </div>
            </div>
        </header>
    )
}

export default Home;