import {createContext,ReactNode} from 'react';
import React from 'react';
import RootStore from '../stores/RootStore';

export let store;

function initializeStore(){
    const _store = store?? new RootStore();
    if (!store) store= _store;
    return _store
}

export const StoreContext = createContext(undefined);
const RootStoreProvider = ({
    children
})=> {
    const store=initializeStore();
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default RootStoreProvider;