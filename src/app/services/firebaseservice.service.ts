import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService {

  storage = getStorage();
  storageRef = ref(this.storage, 'imgs');


  constructor(public firestore: Firestore) { }

  async addtodo(data: any) {
    const todo_data = await addDoc(collection(this.firestore, 'todo'), {
      title: data.title,
      description: data.description,
      Img: data.Img
    })
    
  }

  async uploadImage(data: any) {
    // const filepath = 'images/' + data.name;
    // const task = await this.firestore.upload(filepath, data)

    uploadBytes(this.storageRef, data).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });

  }
}
