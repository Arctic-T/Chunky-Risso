import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  Timestamp,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB1i4_I-0TwKWAZQ0IbPczhvBvj3Qze1aA",
  authDomain: "chunky-risso.firebaseapp.com",
  projectId: "chunky-risso",
  storageBucket: "chunky-risso.appspot.com",
  messagingSenderId: "973096537394",
  appId: "1:973096537394:web:c2f8b2976684fa0a729b2b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function getFirebase() {
  return app;
}

export async function getItemsCollection(categoryId = null) {
  const itemCollection = collection(db, "items");
  const citySnapshot = await getDocs(itemCollection);

  let cityList = citySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  if (categoryId) {
    cityList = cityList.filter((c) => c.category.path.includes(categoryId));
  }

  return cityList;
}

export async function getCategoriesCollection() {
  const categoriesCollection = collection(db, "categories");
  const categoriesSnapshot = await getDocs(categoriesCollection);
  const categoriesList = categoriesSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return categoriesList;
}

export async function getItemFromCollection(id) {
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id };
  }

  return null;
}

export async function createOrder(object) {
  try {
    const ordersColletction = collection(db, "orders");
    const res = await ordersColletction.add({
      ...object,
      date: Timestamp.fromDate(new Date()),
    });

    return res.id;
  } catch (error) {
    console.log(error);
  }
}
