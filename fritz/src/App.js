import { useEffect } from "react";
import { Navbar, Hero, Footer, Profile } from "./components";
import axios from "axios";
import { useState } from "react";
import { useContract as Contract } from 'wagmi';
import ABI from "./contracts/PPV.json";

function App() {
  const instance = Contract('t410fq7nyuispyybmw3mm6fsyohh6muc2clxupzzs3zi', ABI.abi);

  const [run, setRun] = useState(true);
  const [url, setUrl] = useState();
  useEffect(() => {
    // if (run) {
    //   async function demo() {
    //     const res = await axios.get("http://localhost:5000/");
    //     console.log(res);
    //     setUrl(res.data);
    //   }
    //   demo()
    // }
    return () => setRun(false);
  }, []);

  return (
    <div className="bg-[#0f0f0f]">
          <Navbar />
          {/* <Hero /> */}
          {url ? (
            <div>
              <video
                controls
                src={"data:video/mp4;base64," + url}
                className="w-96 h-96"
              ></video>
            </div>
          ) : (
            <></>
          )}

          <Profile />
          <Footer />
    </div>
  );
}

export default App;
