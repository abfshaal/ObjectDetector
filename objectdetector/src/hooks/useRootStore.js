import {useContext} from 'react';
import { StoreContext } from '../provider/RootStoreProvider';

const useRootStore = () => {
    const context=  useContext(StoreContext);
    if(context === undefined){
        throw new Error('useRootStore must be used within RootStore')
    }
    return context
}

export default useRootStore;