import { MenuItem } from "../interfaces/appinterfaces";

export const menuItems: MenuItem[] = [
    {
      name: 'Animation 101',
      icon: 'cube-outline',
      component: 'Animation101Screen',
    },
    {
      name: 'Animation 102',
      icon: 'albums-outline',
      component: 'Animation102Screen',
    },
    {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwichScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  }
  
  ];