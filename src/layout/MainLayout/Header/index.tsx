// import PropTypes from 'prop-types';
import React from 'react'
// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, ButtonBase, Chip } from '@mui/material';
import CoinCountIcon from 'src/assets/images/coinCountIcon'
// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// assets
import { IconMenu2 } from '@tabler/icons';
import CalendarSection from './CalenderSection';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }: any) => {
  const theme: any = useTheme();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light
              }
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 1,
        paddingRight: '10px'
      }}
      >
        {/* header search */}
        <SearchSection />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '280px'
        }}>
          <Button variant="contained" style={{ background: '#754DE8', color: '#ffffff', borderRadius: '50px', width: '190px' }}>
            Create Content
          </Button>
          <Chip icon={<CoinCountIcon />} label="20" style={{ background: '#F1EDFD' }} />
        </div>
      </div>
      {/* <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} /> */}
      <div
        style={{
          width: '350px',
          height: '80px',
          padding: '10px 0px',
          borderRadius: '10px'
        }}
      >
        <div
          style={{
            background: '#F1EDFD',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            borderRadius: '10px'
          }}
        >
          {/* notification & profile */}
          <CalendarSection />
          <NotificationSection />
          <ProfileSection />
        </div>
      </div>
    </>
  );
};

// Header.propTypes = {
//   handleLeftDrawerToggle: PropTypes.func
// };

export default Header;
