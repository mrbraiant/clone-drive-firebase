/* eslint-disable react/prop-types */
import {
  Search,
  Tune,
  CheckCircleOutline,
  HelpOutline,
  Settings,
  Apps,
  Add,
  FolderShared,
  Devices,
  PeopleOutlineOutlined,
  AccessTimeOutlined,
  StarBorderOutlined,
  ReportGmailerrorredOutlined,
  DeleteOutlineOutlined,
  CloudOutlined,
  FilterList,
  CalendarViewMonth,
  InfoOutlined,
  Download,
  Image,
} from '@mui/icons-material';
import {
  Button,
  IconButton,
  InputAdornment,
  LinearProgress,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { db, storage, auth } from './firebase';
import React, { useEffect, useState } from 'react';
import './home.css';

function Home(props) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [files, setFiles] = useState();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        alert('Signed out successfully');
        props.setLogin(null);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleUpload = (uid) => {
    let attachment = document.querySelector(
      '[name=attachment]',
    ).files[0];

    const uploadTask = storage
      .ref('drive/' + uid + '/files/' + attachment.name)
      .put(attachment);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred /
            snapshot.totalBytes) *
          1;
        setUploadProgress(progress);
      },
      function (error) {
        console.log('error', error);
      },
      function () {
        storage
          .ref('drive/' + uid + '/files/' + attachment.name)
          .getDownloadURL()
          .then((url) => {
            db.collection('drive')
              .doc(uid)
              .collection('files')
              .add({
                attachmentURL: url,
                attachmentName: attachment.name,
                attachmentType: attachment.type,
              });
          });
        alert('Upload realizado com sucesso!');
        setUploadProgress(0);
      },
    );
  };

  useEffect(() => {
    db.collection('drive')
      .doc(props.login.uid)
      .collection('files')
      .onSnapshot((snapshot) => {
        setFiles(
          snapshot.docs.map((snap) => {
            return snap.data();
          }),
        );
      });
  }, [props]);

  return (
    <div className="content">
      <div className="navbar">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png"
            alt="logo"
          />
          <h2>Drive</h2>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 'calc(100% - 256px)',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            id="input-with-icon-textfield"
            // label="TextField"
            size="small"
            placeholder="Search on Drive"
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

          <div className="icons-box">
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

          <div className="profile">
            <img
              src={`${props?.login?.image}`}
              alt="profile"
              style={{ cursor: 'pointer' }}
              onClick={handleOpenMenu}
            />

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem
                onClick={() => {
                  handleSignOut();
                  handleClose();
                }}
              >
                Sign out
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div className="sidebar-container">
        <div className="sidebar">
          <form
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              width: '100%',
            }}
          >
            <label htmlFor="attachment">
              <Paper
                elevation={2}
                sx={{
                  width: '106px',
                  height: '56px',
                  padding: '18px 2px',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                  color: '#444746',
                  '&:hover': { backgroundColor: '#E7EDF9' },
                  textTransform: 'none',
                }}
              >
                <Add
                  sx={{
                    width: '26px',
                    height: '26px',
                    marginLeft: '-0.3rem',
                  }}
                />
                Novo
                <input
                  className="hidden-input"
                  onChange={() =>
                    handleUpload(props.login.uid)
                  }
                  type="file"
                  id="attachment"
                  name="attachment"
                />
              </Paper>
            </label>
            {uploadProgress > 0 && (
              <div style={{ width: '100%' }}>
                <Typography>Uploading</Typography>
                <LinearProgress
                  variant="determinate"
                  value={uploadProgress * 100}
                />
              </div>
            )}
          </form>

          <div className="menu-box">
            <div className="menu-icon-selected">
              <FolderShared />
              <Typography variant="body2">
                My Drive
              </Typography>
            </div>
            <div className="menu-icon-not-selected">
              <Devices />
              <Typography variant="body2">
                Devices
              </Typography>
            </div>
            <div className="menu-icon-not-selected">
              <PeopleOutlineOutlined />
              <Typography variant="body2">
                Shared with me
              </Typography>
            </div>
            <div className="menu-icon-not-selected">
              <AccessTimeOutlined />
              <Typography variant="body2">
                Recents
              </Typography>
            </div>
            <div className="menu-icon-not-selected">
              <StarBorderOutlined />
              <Typography variant="body2">
                Starred
              </Typography>
            </div>
            <div className="menu-icon-not-selected">
              <ReportGmailerrorredOutlined />
              <Typography variant="body2">Spam</Typography>
            </div>
            <div className="menu-icon-not-selected">
              <DeleteOutlineOutlined />
              <Typography variant="body2">Bin</Typography>
            </div>
            <div className="menu-icon-not-selected">
              <CloudOutlined />
              <Typography variant="body2">
                Storage used
              </Typography>
            </div>
            <div className="progress-box">
              <LinearProgress
                variant="determinate"
                value={70}
              />
              <Typography variant="body2">
                12 GB of 15 GB used
              </Typography>
            </div>
          </div>
        </div>

        <div className="drive-content">
          <div className="drive-content-header">
            <Button
              sx={{
                textTransform: 'none',
                color: 'inherit',
                borderRadius: '25px',
                padding: '4px 12px',
                '&:hover': { backgroundColor: '#EDEDED' },
              }}
            >
              <Typography variant="h5">My Drive</Typography>
            </Button>
            <div className="header-icons">
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
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              margin: '1rem 0px',
            }}
          >
            {files?.map((file, index) => {
              return (
                <div key={index}>
                  <Paper
                    elevation={0}
                    style={{
                      width: '266px',
                      maxWidth: '266px',
                      height: '199px',
                      padding: '1rem',
                      backgroundColor: '#F2F6FC',
                      borderRadius: '15px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        gap: '0.5rem',
                      }}
                    >
                      <Image />
                      <Typography>
                        {file.attachmentName}
                      </Typography>
                    </div>
                    <div style={{ margin: '0.5rem 0px' }}>
                      <img
                        src={file.attachmentURL}
                        style={{
                          width: '100%',
                          height: '105px',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '0.5rem',
                      }}
                    >
                      <Download sx={{ color: 'blue' }} />
                      <Typography>
                        <a
                          href={file.attachmentURL}
                          target="blank"
                        >
                          Download
                        </a>
                      </Typography>
                    </div>
                  </Paper>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
