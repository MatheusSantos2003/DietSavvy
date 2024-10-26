import { Injectable } from "@angular/core";
import { FirestoreService } from "./firestore.service";
import { Firestore, doc } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root',
})
export class PersonalInfoService {


  constructor(
    private afs: Firestore,private firestoreService : FirestoreService) { }


  public async getPersonalInfo(user: any) {

    const docRef = doc(this.afs, `users/${user.uid}`)


    return await this.firestoreService.getDocumentData(docRef)
  }


}
