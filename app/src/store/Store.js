import {observable, makeAutoObservable} from 'mobx';

class Store {
  longitude = 28.5934;
  latitude = 77.2223;

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
}

export default new Store();
