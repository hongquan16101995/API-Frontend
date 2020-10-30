import {Group} from '../group/group';

export interface User {
  id?: number;
  name?: string;
  email?: string;
  role?: number;
  groups?: Group;
  password?: any;
}
