import {createContext,useState} from "react";

export const PaymentStepContext = createContext({
	paymentSteps: "step1",
	setPaymentSteps: () => {}
});

export const PaymentStepProvider = ({children}) => {
	const [paymentSteps, setPaymentSteps] = useState("step1");

	return <PaymentStepContext.Provider value={{paymentSteps , setPaymentSteps}}>
		{children}
	</PaymentStepContext.Provider>
}