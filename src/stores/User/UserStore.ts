import { observable, action, computed } from 'mobx';

import fetchUser from '../../services/FetchUser';
import { createContext } from 'react';

class UserStore {
  @observable name: string = '';
  @observable avatar_url: string = '';

  get userName() {
    return this.name;
  }

  get avatar() {
    return this.avatar_url;
  }

  @action
  async setValues(username: string) {
    const response = await fetchUser(username);
    
    this.name = response.name;
    this.avatar_url = response.avatar_url;
  }
}

export const UserStoreContext = createContext(new UserStore());