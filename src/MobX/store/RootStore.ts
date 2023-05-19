import { CountStore } from "./CountStore";

export interface IRootStore {
  countStore: CountStore;
}

// RootStore will contain multiple stores
export class RootStore implements IRootStore {
  countStore: CountStore;

  constructor() {
    this.countStore = new CountStore(this);
  }
}
