import { useEffect } from "react";
import { Navbar, Hero, Footer, Profile } from "./components";
import axios from "axios";
import { useState } from "react";
import { useContract, useProvider, useSigner } from "wagmi";
import ABI from "./contracts/PPV.json";
import {ethers } from 'ethers';


function App() {
  const [user, setUser] = useState();
  const provider = useProvider({chainId: 3141});
  const signer= provider.getSigner(user);
  const instance = useContract({
    address: "t410fq7nyuispyybmw3mm6fsyohh6muc2clxupzzs3zi",
    abi: ABI.abi,
    signerOrProvider: signer,
  });
  console.log(instance);

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
// console.log(user);
const buyTime = (async() => {
  console.log(ethers.utils.getAddress(user));
  const txn = await instance.getAccessTime(ethers.utils.getAddress(user), {value: ethers.utils.parseUnits('100', 'wei')});
  // await txn.wait();
  console.log(txn);
 }
 )

  return (
    <div className="bg-[#0f0f0f]">
      <Navbar setUser={setUser} />
      <div className="p-2 rounded bg-gray-400 cursor-pointer" onClick={buyTime}>
        Buy Access Time
      </div>
      {/* <Hero /> */}
      {/* {url ? (
        <div>
          <video
            controls
            src={"data:video/mp4;base64," + url}
            className="w-96 h-96"
          ></video>
        </div>
      ) : (
        <></>
      )} */}

      <Profile />
      <Footer />
    </div>
  );
}

export default App;
