import AppDispatcher from '../dispatcher/AppDispatcher.js';
import {EventEmitter} from 'events';
import AuthConstants from '../constants/AuthConstants.js';
import assign from 'object-assign';

// Server Side Hotfix
const localStorage = localStorage || {};

const CHANGE_EVENT = 'change';

let materialArray = [1000,500,100,100,500]

const AuthStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    return this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(listener) {
    return this.removeListener(CHANGE_EVENT, listener);
  },

  getNoodle(){
    return materialArray[0];
  },

  getMother(){
    return materialArray[1];
  },

  getEgg(){
    return materialArray[2];
  },

  getSugar(){
    return materialArray[3];
  },

  getMilk(){
    return materialArray[4];
  }
});

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action) {
    case AuthConstants.AUTH_MATCHNOODLE:
      if (payload.noodle > materialArray[0]){
        console.log("Enough");
      }else{
        console.log("Not Enough");
      }
      AuthStore.emitChange();
    break;

    case AuthConstants.AUTH_MATCHMOTHER:
      if (payload.mother > materialArray[1]){
        console.log("Enough");
      }else{
        console.log("Not Enough");
      }
      AuthStore.emitChange();
    break;

    case AuthConstants.AUTH_MATCHEGG:
      if (payload.egg > materialArray[2]){
        console.log("Enough");
      }else{
        console.log("Not Enough");
      }
      AuthStore.emitChange();
    break;

    case AuthConstants.AUTH_MATCHSUGAR:
      if (payload.sugar > materialArray[3]){
        console.log("Enough");
      }else{
        console.log("Not Enough");
      }
      AuthStore.emitChange();
    break;

    case AuthConstants.AUTH_MATCHMILK:
      if (payload.milk > materialArray[4]){
        console.log("Enough");
      }else{
        console.log("Not Enough");
      }
      AuthStore.emitChange();
    break;
  }
  return true;
});

export default AuthStore;
