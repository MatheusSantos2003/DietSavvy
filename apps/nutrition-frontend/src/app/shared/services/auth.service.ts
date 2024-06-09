import { Router } from '@angular/router';
import { FirestoreService } from './firestore.service';
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import {
  Auth,
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateEmail,
  updateProfile,
  User as FirebaseUser,
  signInWithEmailAndPassword,

  UserCredential,
} from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {
  doc,
  docData,
  addDoc,
  updateDoc,
  setDoc,
  docSnapshots,
  DocumentReference,
  Firestore,
  query,
  collection,
  where,
  getDocs,
} from '@angular/fire/firestore';
import { DocumentData } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: Auth,
    private afs: Firestore,
    private FirestoreService: FirestoreService,
    private _router: Router
  ) {
    this.auth = getAuth();
    this.auth
      .onAuthStateChanged(async (user) => {
        if (user) {
          const token = await user.getIdToken();
          console.log('user', user);
          console.log('token', token);
        }
      });
  }

  public get userState$() {
    return this.auth.onAuthStateChanged;
  }

  get getCurrentAuth(): Auth {
    return this.auth;
  }

  get getCurrentUser() {
    return this.auth.currentUser?.uid
  }

  get getCurrentUserProfile() {
    return this.auth.currentUser
  }

  async SignIn(email: string, password: string): Promise<any> {

   const result = await this.getUserFirebaseDocByEmail(email);

   if (result) {
     const credentials = await signInWithEmailAndPassword(
       this.auth,
       email.trim(),
       password.trim()
     );
     this.UpdateUserFirebaseDoc(credentials.user);
     console.log('credential', credentials);
     this._router.navigate(['/home']);
   } else {
     try {
       const credentials = await createUserWithEmailAndPassword(
         this.auth,
         email.trim(),
         password.trim()
       );
       this.UpdateUserFirebaseDoc(credentials.user);
       this._router.navigate(['/home']);
     } catch (error) {
       console.log('error', error);
       return undefined;
     }
   }
  }

  async SignInGoogle() {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(this.auth, provider);
    this.UpdateUserFirebaseDoc(credential.user);
    console.log('credential', credential);
    this._router.navigate(['/home']);
  }

  async SignOut() {
    await signOut(this.auth);
  }

  async UpdateEmail(email: string) {
    if (!email) {
      return;
    }

    if (this.auth.currentUser) await updateEmail(this.auth.currentUser, email);
  }

  async UpdateUserFirebaseDoc(user: any) {
    if (!user) {
      return;
    }
    const docRef = doc(this.afs, `users/${user.uid}`);



    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    await setDoc(docRef, data);
  }

  async getUserFirebaseDocByEmail(email: string): Promise<DocumentData | undefined> {

    const coll = collection(this.afs, 'users');
    const q = query(coll, where('email', '==', email));

    const querySnapshot = await getDocs(q);

    if(querySnapshot.empty) {
      return undefined;
    }

    return querySnapshot.docs[0].data()

  }
}
