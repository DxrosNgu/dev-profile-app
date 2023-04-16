import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}{'Developer Page '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}


export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4} md={3}>
              <Grid item>
                <Copyright />
              </Grid>
          </Grid>

          <Grid item>
            <Typography variant="caption">
              Icons made by 
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}