import Konva from "konva";
import { makeAutoObservable } from "mobx";
import RootStore from "./RootStore";

class ImageStore {
  rootStore;
  predictions: any[] = [];
  image: string = '';

  constructor(rootStore:RootStore){
    this.rootStore = rootStore;
    makeAutoObservable(this, {rootStore:false}, {autoBind:true})
  }

  setPredictions(predictions:any[]) {
    this.predictions =predictions.map(el=> [...el, Konva.Util.getRandomColor()])
  }
  setImage(img:string){
    this.image = img
  }

}

export default ImageStore