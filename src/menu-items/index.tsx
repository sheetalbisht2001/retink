import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import adhoc from './adhoc';
import patientStudies from './patientStudies'
// ==============================|| MENU ITEMS ||============================== //
const isDevEnv = process.env.NODE_ENV === 'development'

const menuItems = {
  items: [
    other,
  ]
};


const adhocMenuItems = {
  items: [
    adhoc
  ]
};

export {menuItems, adhocMenuItems};
