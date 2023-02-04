import axios from "../api/axios";
import React, { useEffect, useState } from "react";

const CoverImages = ({ file }) => {
  const [url, setUrl] = useState("");
  const [fetch, setFetch] = useState(true);
  // useEffect(() => {
  //   async function getCoverImage() {
  //     try {
  //       const response = await axios.get("/coverImage", { cid: file.hash });
  //       //   console.log(response);
  //       setUrl(response.data);
  //     } catch (error) {
  //       console.log(error);
  //       setFetch(!fetch);        
  //     }
  //   }
  //   getCoverImage();
  // }, [file, fetch]);

  return (
    <div>
      <div className="">
        <div className="absoulte w-full bg-black peer:hover:block hidden "></div>
        {url ? (
          <div>
            <img
              className="h-52 w-72 rounded object-cover object-center"
              src={"data:image/jpg;base64," + url}
              alt={file.name}
            ></img>
            <div>
              <h3>{file.name}</h3>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CoverImages;
