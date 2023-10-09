// assets
import { IconBrandChrome, IconHelp, IconHome2, IconSettings , IconLogout} from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp, IconHome2,
  IconSettings, IconLogout };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const adhoc = {
  id: 'finder',
  type: 'group',
  children: [
    {
      id: 'setting',
      title: 'Setting',
      type: 'item',
      url: '/',
      icon: icons.IconSettings,
      breadcrumbs: false
    },
    {
      id: 'logout',
      title: 'Logout',
      type: 'item',
      url: '/',
      icon: icons.IconLogout,
      breadcrumbs: false
    }
  ]
};

export default adhoc;
