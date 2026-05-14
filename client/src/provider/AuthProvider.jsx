import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase.config";

export const AuthContex = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [user?.email]);

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          const user = result.user;
          console.log("Redirect login successful:", user);
          // You can set user in your state/context here if needed
        }
      })
      .catch((error) => {
        console.error("Redirect login error:", error);
      });
  }, []);

  const updateUser = (updatename, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: updatename,
      photoURL: photo,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const AuthInfo = {
    user,
    createUser,
    loginWithGoogle,
    updateUser,
    loginUser,
    logOut,
    loading,
  };
  return <AuthContex.Provider value={AuthInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
