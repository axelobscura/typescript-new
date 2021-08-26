/// <reference types="@types/google.maps" />
import { User } from './User';

const user = new User();
console.log(user);

new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});