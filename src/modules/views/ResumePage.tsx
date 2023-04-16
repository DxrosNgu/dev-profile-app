import React from "react";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ButtonBase, Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import GridResume from "../components/GridResume";
import Resume from "@/models/Resume";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ResumeList: Resume[] = [{
  id: 1,
  company: "Company 1",
  jobName: "Employment type 2",
  dateStart: new Date(2022, 4, 1),
  dateFinish: new Date(2022, 12, 1),
  detailJob: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor leo, semper sit amet massa nec, bibendum viverra lectus. Quisque tortor lacus, convallis sit amet euismod non, viverra ut urna. Etiam a tempus turpis. In est augue, ullamcorper vitae quam at, viverra semper odio. Vivamus eget mauris elementum, convallis nibh nec, posuere eros. Quisque in mauris nisl. Aliquam ut sollicitudin eros. Morbi varius sodales mauris in luctus. Nulla rutrum at felis in pharetra. Nam vitae rutrum mi, at rutrum tortor. In pharetra blandit molestie" +
  "Fusce consequat ipsum ac nulla viverra, a sagittis ligula consequat. Donec volutpat lacus lectus, ut tristique libero ultricies a. Sed vulputate elementum metus, condimentum vehicula justo suscipit in. Nullam maximus lacus a erat ultricies, a lacinia cras.",
  skills: "Object-Oriented Programming (OOP)"
},
{
  id: 2,
  company: "Company 2",
  jobName: "Employment type 2",
  dateStart: new Date(2022, 4, 1),
  dateFinish: new Date(2022, 4, 1),
  detailJob: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor leo, semper sit amet massa nec, bibendum viverra lectus. Quisque tortor lacus, convallis sit amet euismod non, viverra ut urna. Etiam a tempus turpis. In est augue, ullamcorper vitae quam at, viverra semper odio. Vivamus eget mauris elementum, convallis nibh nec, posuere eros. Quisque in mauris nisl. Aliquam ut sollicitudin eros. Morbi varius sodales mauris in luctus. Nulla rutrum at felis in pharetra. Nam vitae rutrum mi, at rutrum tortor. In pharetra blandit molestie" +
  "Fusce consequat ipsum ac nulla viverra, a sagittis ligula consequat. Donec volutpat lacus lectus, ut tristique libero ultricies a. Sed vulputate elementum metus, condimentum vehicula justo suscipit in. Nullam maximus lacus a erat ultricies, a lacinia cras.",
  skills: "Object-Oriented Programming (OOP)"
}];


function ResumePage() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    const bull = (
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
        •
      </Box>
    );

    return (
      <React.Fragment>
        <Container maxWidth={false}>
        <AppBar position="static">
          <Container maxWidth={false}>
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        </Container>
        <Container maxWidth={false} >
          <Paper
          sx={{
            p: 2,
            margin: 'auto',
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="complex" src="https://mui.com/static/images/grid/complex.jpg" />
                  </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={1}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                  Backend Developer - Ssr. Java
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Diego Arturo Anyosa Boza
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor leo, semper sit amet massa nec, bibendum viverra lectus. Quisque tortor lacus, convallis sit amet euismod non, viverra ut urna. Etiam a tempus turpis. In est augue, ullamcorper vitae quam at, viverra semper odio. Vivamus eget mauris elementum, convallis nibh nec, posuere eros. Quisque in mauris nisl. Aliquam ut sollicitudin eros. Morbi varius sodales mauris in luctus. Nulla rutrum at felis in pharetra. Nam vitae rutrum mi, at rutrum tortor. In pharetra blandit molestie.
                        Fusce consequat ipsum ac nulla viverra, a sagittis ligula consequat. Donec volutpat lacus lectus, ut tristique libero ultricies a. Sed vulputate elementum metus, condimentum vehicula justo suscipit in. Nullam maximus lacus a erat ultricies, a lacinia cras.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        </Container>
        <div >
          <Paper
          sx={{
            p: 2,
            margin: 'auto',
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid container spacing={2}>
          <Grid item xs={12}  container>
                  <Typography gutterBottom variant="subtitle1" component="div">
                   Title
                  </Typography>
            </Grid>
            {ResumeList.map((item) => (
              <GridResume key={item.id} />
            ))}
           
          </Grid>
        </Paper>
        </div>
      </React.Fragment>
        
    );
  }

export default ResumePage;