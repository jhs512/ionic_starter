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