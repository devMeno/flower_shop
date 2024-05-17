import React, {createContext,useState} from "react";

interface ContextProps {
	paymentSteps : string,
	setPaymentSteps : React.Dispatch<React.SetStateAction<string>>
}

/*export const PaymentStepContext = createContext({
	paymentSteps: 'step1',
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setPaymentSteps: () => {}
});*/
export const PaymentStepContext = createContext<ContextProps>({
	paymentSteps : "step1",
	setPaymentSteps : ()=>{}
});


export const PaymentStepProvider = ({children}:any) => {
	const [paymentSteps, setPaymentSteps] = useState("step1");


	return <PaymentStepContext.Provider value={{paymentSteps , setPaymentSteps}}>
		{children}
	</PaymentStepContext.Provider>
}