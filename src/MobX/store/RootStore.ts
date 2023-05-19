import { CountStore } from "./CountStore";
import { GitHubUserDetailsStore } from "./GitHubUserDetailsStore";

export interface IRootStore {
  countStore: CountStore;
  githubUserDetails: GitHubUserDetailsStore;
}

// RootStore will contain multiple stores
export class RootStore implements IRootStore {
  countStore: CountStore;
  githubUserDetails: GitHubUserDetailsStore;

  constructor() {
    this.countStore = new CountStore(this);
    this.githubUserDetails = new GitHubUserDetailsStore(this);
  }
}
