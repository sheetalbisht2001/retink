import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'src/config';
import Logo from 'src/ui-component/Logo';
import { MENU_OPEN } from 'src/store/actions';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state: any) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath} style={{ width: '100%' }}>
      <Logo />
    </ButtonBase>
  );
};

export default LogoSection;
