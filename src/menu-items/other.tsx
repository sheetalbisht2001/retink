// assets
import { IconBrandChrome, IconHelp, IconHome2 } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp, IconHome2 };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'finder',
  type: 'group',
  children: [
    {
      id: 'home',
      title: 'Home',
      type: 'item',
      url: '/',
      icon: icons.IconHome2,
      breadcrumbs: false
    },
    {
      id: 'finder',
      title: 'Finder',
      type: 'item',
      url: '/',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    }
    // {
    //   id: 'documentation',
    //   title: 'Documentation',
    //   type: 'item',
    //   url: 'https://codedthemes.gitbook.io/berry/',
    //   icon: icons.IconHelp,
    //   external: true,
    //   target: true
    // }
  ]
};

export default other;
