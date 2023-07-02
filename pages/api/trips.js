import {getFirestore, collection, getDocs} from "firebase/firestore";
import app from "../../firebase";
export default async function handler(req, res) {
  try {
    const db = getFirestore(app);
    const tripsRef = collection(db, "trips");
    const querySnapshot = await getDocs(tripsRef);
    const trips = querySnapshot.docs.map(doc => doc.data());
    console.log(trips);
    res.status(200).json(trips);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
