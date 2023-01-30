const express = require("express");
const app = express();
const { Blob } = require('buffer')
const { ethers } = require("ethers");
const fs = require("fs");
const lighthouse = require('@lighthouse-web3/sdk');
const bodyparser = require("body-parser");

require("dotenv").config();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("files"))
app.use(bodyparser.json())



app.get('/', async (req, res) => {

  console.log("Hello")
  const cid = "QmXzD1TfdBCiaFDqU7RhdnpHcppewYC6ecFysi39w9fUPZ";
  const publicKey = "0x0595EA5B16e3378F1Af2b24ad8066bC7decE6bE2";
  const privateKey = process.env.PRIVATE_KEY;

  // Get file encryption key
  try {
    const signed_message = await sign_auth_message(publicKey, privateKey);
    console.log("Hello")
    const fileEncryptionKey = await lighthouse.fetchEncryptionKey(
      cid,
      publicKey,
      signed_message
    );

    // Decrypt File
    console.log("Hello")
    // Decrypt File
    const decrypted = await lighthouse.decryptFile(
      cid,
      fileEncryptionKey.data.key
    );

    console.log("Hello")
    // Save File
    // const file = fs.createWriteStream("video.jpg").write(Buffer.from(decrypted))
    const buf = Buffer.from(decrypted);
    const data = buf.toString('base64');
    // console.log(buf); 
    res.status(201).json(data);

  }
  catch (e) {
    console.log(e)

  }

});



// Decrypt file nodejs


const sign_auth_message = async (publicKey, privateKey) => {
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = new ethers.Wallet(privateKey, provider);
  const messageRequested = (await lighthouse.getAuthMessage(publicKey)).data.message
  const signedMessage = await signer.signMessage(messageRequested);
  return (signedMessage)
}

const decrypt = async () => {
  console.log("Hello")
  const cid = "QmXxU4Kn2uFAghvkjaXFJsXeDH18E7fmpcBQLAzDYFeDhp";
  const publicKey = "0x0595EA5B16e3378F1Af2b24ad8066bC7decE6bE2";
  const privateKey = process.env.PRIVATE_KEY;

  // Get file encryption key
  try {
    const signed_message = await sign_auth_message(publicKey, privateKey);
    console.log("Hello")
    const fileEncryptionKey = await lighthouse.fetchEncryptionKey(
      cid,
      publicKey,
      signed_message
    );

    // Decrypt File
    console.log("Hello")
    // Decrypt File
    const decrypted = await lighthouse.decryptFile(
      cid,
      fileEncryptionKey.data.key
    );

    console.log("Hello")
    // Save File
    // const file = fs.createWriteStream("video.jpg").write(Buffer.from(decrypted))
    const buf = Buffer.from(decrypted);
    console.log(buf);
    let rawData = new Uint8Array(buf);
    let blob1 = new Blob([new Uint8Array(rawData)], { type: 'image/jpg' });
    console.log(blob1);

    // const ans = buf.toString('utf8');
    // console.log(ans);
    console.log("Hello")

  }
  catch (e) {
    console.log(e)

  }
}



// decrypt()





// const sign_auth_message = async(publicKey, privateKey) =>{
//   const provider =  new ethers.providers.JsonRpcProvider();
//   const signer = new ethers.Wallet(privateKey, provider);
//   const messageRequested = (await lighthouse.getAuthMessage(publicKey)).data.message;
//   const signedMessage = await signer.signMessage(messageRequested);
//   return(signedMessage)
// }


// const deployEncrypted = async() =>{
//   const path = "C:\\Users\\jrsai\\OneDrive\\Pictures\\Screenshots\\video.mp4";	
//   const apiKey = process.env.API_KEY;
//   const publicKey = "0x0595EA5B16e3378F1Af2b24ad8066bC7decE6bE2";
//   const privateKey = process.env.PRIVATE_KEY;
//   const signed_message = await sign_auth_message(publicKey, privateKey);

//   const response = await lighthouse.uploadEncrypted(
//     path,
//     apiKey,
//     publicKey,
//     signed_message
//   );

//   console.log(response);

// }

// deployEncrypted()


app.listen("5000", () => {
  console.log("Backend is running.");
});

