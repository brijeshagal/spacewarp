import { useState } from "react";
import { createContext } from "react"

const ContractContext = createContext({});
export const ContractProvider = ({children}) => {
  const [contract, setContract] = useState();
  return (
    <ContractContext.Provider value={{contract, setContract}}>
      {children}
    </ContractContext.Provider>
  )
}

export default ContractContext;