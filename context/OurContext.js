import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const backendHost = process.env.NEXT_PUBLIC_BACKEND_HOST;

const OurContext = createContext({});

export const useG = () => useContext(OurContext);

export const OurContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [programBar, setProgramBar] = useState("summary");
  const [toursBar, setToursBar] = useState("istanbul");
  const [loading, setLoading] = useState(false);

  // screenwidth stuff
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const router = useRouter();

  return (
    <OurContext.Provider
      value={{
        user,
        screenWidth,
        setUser,
        programBar,
        setProgramBar,
        toursBar,
        setToursBar,
      }}
    >
      {loading ? null : children}
    </OurContext.Provider>
  );
};
