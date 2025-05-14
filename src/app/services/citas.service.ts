import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  Firestore,
  collection,
  collectionData,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  DocumentData,
  CollectionReference,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cita } from '../models/cita.model';

@Injectable({
  providedIn: 'root',
})
export class CitasService {
  private citasRef: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.citasRef = collection(this.firestore, 'citas');
  }

 getCitas(): Observable<Cita[]> {
  const citasRef = collection(this.firestore, 'citas');
  return collectionData(citasRef, { idField: 'id' }).pipe(
    map((docs: any[]) =>
      docs.map(doc => ({
        id: doc.id ?? '',
        nombre: String(doc.nombre ?? ''),
        fecha: String(doc.fecha ?? ''),
        hora: String(doc.hora ?? ''),
        motivo: String(doc.motivo ?? '')
      }))
    )
  );
}


  agregarCita(cita: Omit<Cita, 'id'>) {
    return addDoc(this.citasRef, cita);
  }

  eliminarCita(id: string) {
    const citaRef = doc(this.firestore, `citas/${id}`);
    return deleteDoc(citaRef);
  }

  editarCita(cita: Cita) {
    const citaRef = doc(this.firestore, `citas/${cita.id}`);
    return updateDoc(citaRef, { ...cita });
  }
}
