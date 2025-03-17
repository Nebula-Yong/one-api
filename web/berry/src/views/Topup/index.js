import { Stack, Alert } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import TopupCard from './component/TopupCard';
import InviteCard from './component/InviteCard';

const Topup = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Alert severity="warning">
          Please check the recharge records and invitation records in the logs. For recharge records, please select the type "Recharge" in the logs; for invitation records, please select "System" in the logs.
        </Alert>
      </Grid>
      <Grid xs={12} md={6} lg={8}>
        <Stack spacing={2}>
          <TopupCard />
        </Stack>
      </Grid>
      <Grid xs={12} md={6} lg={4}>
        <InviteCard />
      </Grid>
    </Grid>
  );
};

export default Topup;
