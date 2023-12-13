import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const NotFoundContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const NotFoundContent = styled('div')({
  textAlign: 'center',
});

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Box component="div" className="container">
        <Box component="div" className="row">
          <Box component="div" className="col-sm-12">
            <Box component="div" className="col-sm-10 col-sm-offset-1 text-center">
              <Box component="div" className="four_zero_four_bg">
                <Typography variant="h1">404</Typography>
              </Box>
              <Box component="div" className="contant_box_404">
                <Typography variant="h3">Looks like you are lost</Typography>
                <Typography variant="body1">
                  The page you are looking for is not available!
                </Typography>
                <Button component={Link} to="/" variant="contained" color="primary">
                  Go to Home
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </NotFoundContainer>
  );
};

export default NotFound;
