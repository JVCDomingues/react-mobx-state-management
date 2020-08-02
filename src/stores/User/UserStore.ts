import { observable, action } from 'mobx';

import fetchUser from '../../services/FetchUser';
import { createContext } from 'react';

class UserStore {
  @observable name: string | undefined = '';
  @observable avatar_url: string = '';
  @observable bio: string | undefined = '';
  @observable repositories: string | undefined = '';
  @observable url: string | undefined = '';
  @observable followers: number | undefined = 0;
  @observable following: number | undefined = 0;

  get userName() {
    return this.name;
  }

  get avatar() {
    return this.avatar_url;
  }

  @action
  async setValues(username: string) {
    const response = await fetchUser(username);
    const { 
      name, avatar_url, bio, public_repos, followers, following, html_url
    } = response;
    
    this.name = name;
    this.avatar_url = avatar_url;
    this.repositories = public_repos;
    this.followers = followers;
    this.following = following;
    this.bio = bio;
    this.url = html_url;
  }
}

export const UserStoreContext = createContext(new UserStore());