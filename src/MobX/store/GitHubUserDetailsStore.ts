import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";
import axios from "axios";

// https://api.github.com/users

export interface IUserDetails {
  id: number;
  name: string;
  url: string;
  location: string;
}

export class GitHubUserDetailsStore {
  userDetails: IUserDetails = {} as IUserDetails;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      userDetails: observable,
      fetchGitHubUserDetails: action,
      getUserDetails: computed,
    });
    this.rootStore = rootStore;
  }

  async fetchGitHubUserDetails(userName: string) {
    const response = axios.get(`https://api.github.com/users/${userName}`);
    this.userDetails = (await response).data;
    console.log(this.userDetails);
  }
  get getUserDetails() {
    return this.userDetails;
  }
}
