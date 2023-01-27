const express = require("express");
const app = express();

require("dotenv").config();



// Decrypt file nodejs
const {ethers} = require("ethers");
const fs = require("fs");
const lighthouse = require('@lighthouse-web3/sdk');

const sign_auth_message = async(publicKey, privateKey) =>{
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = new ethers.Wallet(privateKey, provider);
  const messageRequested = (await lighthouse.getAuthMessage(publicKey)).data.message
  const signedMessage = await signer.signMessage(messageRequested);
  return(signedMessage)
}

const decrypt = async() =>{
  console.log("Hello")
  const cid = "QmXxU4Kn2uFAghvkjaXFJsXeDH18E7fmpcBQLAzDYFeDhp";
  const publicKey = "0x0595EA5B16e3378F1Af2b24ad8066bC7decE6bE2";
  const privateKey = process.env.PRIVATE_KEY;
  
  // Get file encryption key
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
     const file= fs.createWriteStream("video.jpg").write(Buffer.from(decrypted)) 
     console.log(file); 
      console.log("Hello")
}

decrypt()

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

 