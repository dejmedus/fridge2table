import firebase_app from "@/firebase/config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import addData from "@/db/addData";

const auth = getAuth(firebase_app);

export default async function signUp(email, password) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);

    // // Add data to db
    const data = {
      email: result.user.email,
      cookbook: []
    }
    const { dataResult, error } = await addData('users', result.user.uid, data)

    if (error) {
      return console.log(error)
    }

  } catch (e) {
    error = e;
  }

  return { result, error };
}
