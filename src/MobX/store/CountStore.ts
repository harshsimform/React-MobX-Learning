// -> observable:- defines a trackable field that stores the state.
// -> action:- marks a method as an action that will modify the state.
// -> computed:- marks a getter that will derive new facts from the state and cache its output.

import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";

export class CountStore {
  count = 1;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
      getCountValue: computed,
    });
    this.rootStore = rootStore;
  }
  increment = () => {
    this.count++;
  };
  decrement = () => {
    this.count--;
  };

  get getCountValue() {
    return this.count;
  }
}
