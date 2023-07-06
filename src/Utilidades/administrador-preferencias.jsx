import { db } from "../firebase/config";
import { auth } from "../firebase/config";
import { collection, getDocs, addDoc, deleteDoc, doc, query, where, } from "firebase/firestore"


export const MEGUSTA = "megusta";
export const FAVORITO = "favorito";
export const LATE = "late";

const getData = async (nombreCollection) => {
    const data = await getDocs(collection(db, nombreCollection));
    if (Object.keys(data.docs).length) {
        localStorage.removeItem(nombreCollection);
        localStorage.setItem(nombreCollection, JSON.stringify(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
    }
}

export const getUserPreferences = () => {
    getData(MEGUSTA);
    getData(FAVORITO);
    getData(LATE);
}

export const guardarPreferencia = async (nombreCollection, idJuego, userEmail) => {
    await addDoc(collection(db, nombreCollection), {
        usuario: userEmail,
        idJuego
    });
    getData(nombreCollection);
}

export const borrarPreferencia = async (nombreCollection, idJuego) => {
    const juegoDoc = doc(db, nombreCollection, idJuego);
    await deleteDoc(juegoDoc);
    getData(nombreCollection);
}

export const obtenerIdDocDelLocalStorage = (nombreCollection, idJuego) => {
    if (localStorage.getItem(nombreCollection) !== null) {
        return JSON.parse(localStorage.getItem(nombreCollection)).map(juego => {
            if (juego.idJuego === idJuego) {
                return juego;
            }
        })
    }
}
