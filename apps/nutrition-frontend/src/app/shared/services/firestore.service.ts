/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import {
  Auth,
  ConfirmationResult,
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateEmail,
  updateProfile,
  User as FirebaseUser,
} from '@angular/fire/auth';
import { doc,docData, docSnapshots, DocumentReference, Firestore } from '@angular/fire/firestore';
import { firstValueFrom, map, take } from 'rxjs';
@Injectable({
  providedIn: 'root',

})
export class FirestoreService {


  constructor(private auth: Auth, private afs:Firestore) {
  }

  public async getDocumentData<T>(docRef: DocumentReference,transformer: (data: any) => T = (data: any) => data) {
    return firstValueFrom(docData(docRef).pipe(take(1), map(transformer)));
  }

}
