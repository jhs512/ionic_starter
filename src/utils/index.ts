import { alertController } from '@ionic/vue';

export async function showAlert(msg: string) {
  const alert = await alertController
    .create({
      header: 'Notice',
      message: msg,
      buttons: ['OK'],
    });
  return alert.present();
}

export function isEmptyObject(param: {}) {
  return Object.keys(param).length === 0 && param.constructor === Object;
}

export function toInt(data: any, defaultValue: any) {
  if ( data == undefined || data == null || isNaN(data) ) {
    return defaultValue;
  }

  return parseInt(data)
}

export function toIntOrUnd(data: any) {
  return toInt(data, undefined);
}

export function toIntOrNull(data: any) {
  return toInt(data, null);
}

export function toStringOrNull(data: any) {
  if ( data == null ) {
    return null;
  }

  if ( data == "null" ) {
    return null;
  }

  return data;
}