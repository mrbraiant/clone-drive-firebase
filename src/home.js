import { Search, Tune, CheckCircleOutline, HelpOutline, Settings, Apps, Add, FolderShared, Devices, PeopleOutlineOutlined, AccessTimeOutlined, StarBorderOutlined, ReportGmailerrorredOutlined, DeleteOutlineOutlined, CloudOutlined, FilterList, CalendarViewMonth, InfoOutlined } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, LinearProgress, TextField, Typography } from '@mui/material';
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
                                <IconButton>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <Tune />
                                </IconButton>
                            </InputAdornment>
                        ),
                        }}
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
            <div className='sidebar-container'>
                <div className='sidebar'>
                    <form>
                        <Button variant='contained' sx={{width: '106px', height: '56px', padding: '18px 2px', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', backgroundColor: '#fff', color: '#444746', "&:hover":{ backgroundColor: "#E7EDF9"}, textTransform: "none"}}>
                            <Add sx={{width:'26px', height:'26px', marginLeft: '-0.3rem'}} />
                            <label for='attachment'>Novo</label>
                            <input className='hidden-input' type='file' id='attachment' name='attachment' />
                        </Button>
                    </form>
                    <div className='menu-box'>
                        <div className='menu-icon-selected'>
                            <FolderShared />
                            <Typography variant='body2'>My Drive</Typography>
                        </div>
                        <div className='menu-icon-not-selected'>
                            <Devices />
                            <Typography variant='body2'>Devices</Typography>
                        </div>
                        <div className='menu-icon-not-selected'>
                            <PeopleOutlineOutlined />
                            <Typography variant='body2'>Shared with me</Typography>
                        </div>
                        <div className='menu-icon-not-selected'>
                            <AccessTimeOutlined />
                            <Typography variant='body2'>Recents</Typography>
                        </div>
                        <div className='menu-icon-not-selected'>
                            <StarBorderOutlined />
                            <Typography variant='body2'>Starred</Typography>
                        </div>
                        <div className='menu-icon-not-selected'>
                            <ReportGmailerrorredOutlined />
                            <Typography variant='body2'>Spam</Typography>
                        </div>
                        <div className='menu-icon-not-selected'>
                            <DeleteOutlineOutlined />
                            <Typography variant='body2'>Bin</Typography>
                        </div>
                        <div className='menu-icon-not-selected'>
                            <CloudOutlined />
                            <Typography variant='body2'>Storage used</Typography>
                        </div>
                        <div className='progress-box'>
                            <LinearProgress variant="determinate" value={70} />
                            <Typography variant='body2'>12 GB of 15 GB used</Typography>
                        </div>
                    </div>
                </div>

                <div className='drive-content'>
                    <div className='drive-content-header'>
                        <Button sx={{textTransform: 'none', color: 'inherit', borderRadius: '25px', padding: '4px 12px','&:hover': {backgroundColor: '#EDEDED'}}}>
                            <Typography variant='h5'>My Drive</Typography>
                        </Button>
                        <div className='header-icons'>
                            <IconButton>
                                <FilterList />
                            </IconButton>
                            <IconButton>
                                <CalendarViewMonth />
                            </IconButton>
                            <IconButton>
                                <InfoOutlined />
                            </IconButton>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Home;