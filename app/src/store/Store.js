import {observable, makeAutoObservable} from 'mobx';

class Store {
  longitude = 28.5934;
  latitude = 77.2223;
  imageBase64=''

  constructor() {
    makeAutoObservable(this);
  }
  setLongitude(longitude) {
    console.log('longitude', longitude);
    this.longitude = longitude;
  }
  setLatitude(latitude) {
    console.log('latitude', latitude);
    this.latitude = latitude;
  }
  setImageBase64(imageBase64) {
    this.imageBase64 = imageBase64;
  }
}

export default new Store();
