import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initialization from "../Firebase/firebase.init";
import Register from "../Register/Register";

initialization();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();

  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {});
  };

  return {
    setUser,
    user,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
