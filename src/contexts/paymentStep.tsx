import {createContext,useState} from "react";

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

// @ts-ignore
export const PaymentStepProvider = ({children}) => {
	const [paymentSteps, setPaymentSteps] = useState("step1");

	// @ts-ignore
	return <PaymentStepContext.Provider value={{paymentSteps , setPaymentSteps}}>
		{children}
	</PaymentStepContext.Provider>
}