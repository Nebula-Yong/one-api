import { Box, Typography, Button, Container, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { GitHub } from '@mui/icons-material';

const BaseIndex = () => (
  <Box
    sx={{
      minHeight: 'calc(100vh - 136px)',
      backgroundImage: 'linear-gradient(to right, #2C5D75, #5B93B2)',
      color: 'white',
      p: 4
    }}
  >
    <Container maxWidth="lg">
      <Grid container columns={12} wrap="nowrap" alignItems="center" sx={{ minHeight: 'calc(100vh - 230px)' }}>
        <Grid md={7} lg={6}>
          <Stack spacing={3}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: '4.5rem', 
                fontWeight: 'bold', 
                color: '#fff', 
                lineHeight: 1.4, 
                textShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)' 
              }}
            >
              Lambda Quantum
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                fontSize: '1.3rem', 
                maxWidth: '600px', 
                color: '#E0E0E0', 
                lineHeight: 1.7 
              }}
            >
              🚀 <span style={{ fontWeight: 'bold' }}>Fast AI Integration, Build Intelligent Applications</span> <br />
              🔗 <span style={{ fontWeight: 'bold' }}>Compatible with Mainstream Large Models</span>, Faster and More Stable API Access <br />
              ⚡ <span style={{ fontWeight: 'bold' }}>One-Click Deployment</span>, No Complex Configuration, Ready to Use
            </Typography>
              {/* 极速 AI 接入，打造智能应用 <br />
              兼容主流大模型，API 访问更快、更稳定 <br />
              一键部署，无需复杂配置，开箱即用 */}
            {/* <Button
              variant="contained"
              startIcon={<GitHub />}
              href="https://github.com/songquanpeng/one-api"
              target="_blank"
              sx={{ backgroundColor: '#24292e', color: '#fff', width: 'fit-content', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}
            >
              GitHub
            </Button> */}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default BaseIndex;
