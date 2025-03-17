// Material-UI
import { Link, Container, Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

// ==============================|| FOOTER - CUSTOM VERSION ||============================== //

const Footer = () => {
  const siteInfo = useSelector((state) => state.siteInfo);

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '64px' }}>
      <Box sx={{ textAlign: 'center' }}>
        {siteInfo.footer_html ? (
          <div className="custom-footer" dangerouslySetInnerHTML={{ __html: siteInfo.footer_html }}></div>
        ) : (
          <>
            <Typography variant="body2" color="textSecondary">
              © 2025 Lambda Quantum. All rights reserved.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              📩 Contact us: <Link href="mailto:support@lq-ltd.com">support@lq-ltd.com</Link> | 
              <Link href="/privacy" sx={{ marginLeft: '8px' }}>Privacy Policy</Link> | 
              <Link href="/terms" sx={{ marginLeft: '8px' }}>Terms of Service</Link>
            </Typography>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Footer;
