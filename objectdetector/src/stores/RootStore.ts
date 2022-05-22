import ImageStore from "./imagestore";

class RootStore {
    ImageStore?;
    constructor(){
        this.ImageStore = new ImageStore(this)
    }
}

export default RootStore;