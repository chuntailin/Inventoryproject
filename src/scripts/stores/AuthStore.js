import AppDispatcher from '../dispatcher/AppDispatcher.js';
import {EventEmitter} from 'events';
import AuthConstants from '../constants/AuthConstants.js';
import assign from 'object-assign';

// Server Side Hotfix
const localStorage = localStorage || {};

const CHANGE_EVENT = 'change';

let materialArray = [50,500,100,100,500]

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


});

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action) {
    case AuthConstants.AUTH_MATCH:
      if (payload.noodle > materialArray[0]){
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
