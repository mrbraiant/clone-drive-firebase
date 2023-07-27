import { Search, Tune, CheckCircleOutline, HelpOutline, Settings, Apps, Add } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import './home.css';



function Home(props) {
    return (
        <div className='content'>
            <div className='navbar'>
                <div className='logo'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png" alt="logo" />
                    <h2>Drive</h2>
                </div>

                <div style={{display: 'flex', flexDirection: 'row', width: 'calc(100% - 256px)', justifyContent: 'space-between'}}>
                    <TextField
                        id="input-with-icon-textfield"
                        // label="TextField"
                        size='small'
                        placeholder='Search on Drive'
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <Tune />
                            </InputAdornment>
                        ),
                        }}
                        // fullWidth
                        sx={{
                            width: '100%',
                            maxWidth: '722px',
                            backgroundColor: '#EDF2FC',
                            borderRadius: 100,
                            [`& fieldset`]: {
                                border: 0,
                                borderRadius: 100,
                            },
                        }}
                        // variant="standard"
                    />

                    <div className='icons-box'>
                        <IconButton>
                            <CheckCircleOutline />
                        </IconButton>
                        <IconButton>
                            <HelpOutline />
                        </IconButton>
                        <IconButton>
                            <Settings />
                        </IconButton>
                        <IconButton>
                            <Apps />
                        </IconButton>
                    </div>

                    <div className='profile'>
                        <img src={props.login.image} alt="profile" />
                    </div>
                </div>
                
            </div>
            <div className='sidebar'>
                <form>
                    <Button variant='contained' sx={{width: '106px', height: '56px', padding: '18px 20px', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', backgroundColor: '#fff', color: '#444746', "&:hover":{ backgroundColor: "#E7EDF9"}, textTransform: "none"}}>
                        <Add />
                        <label for='attachment'>Novo</label>
                        <input className='hidden-input' type='file' id='attachment' name='attachment' />
                    </Button>
                </form>
                <Typography>Folder 1</Typography>
                <Typography>Folder 2</Typography>
                <Typography>Folder 3</Typography>
            </div>
        </div>
    )
}

export default Home;