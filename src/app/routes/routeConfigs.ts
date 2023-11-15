import { IDrawerType } from '@/components/Theme/type';
import { LinkingOptions } from 'react-navigation';
export interface DrawerParamsProps {
  position: IDrawerType;
  keyWidth: string;
  showButtonBack: boolean;
}
export enum RouteName {
  Root = 'Root',
  Authenticate = 'Authenticate',
  
  Dashboard = 'Dashboard',
  
}

export const initialRouteName = RouteName.Authenticate;

export type RootStackParamList = {
  [RouteName.Root]: undefined;
  
  [RouteName.Authenticate]: undefined;
  
  [RouteName.Dashboard]: undefined;
 
};

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['/'],
  config: {
    screens: {
      [RouteName.Authenticate]: 'Authenticate',
      [RouteName.Dashboard]: 'dashboard',
    },
  },
};
