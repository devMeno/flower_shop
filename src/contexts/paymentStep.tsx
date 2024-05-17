import {createContext,useState} from "react";

export const PaymentStepContext = createContext({
	paymentSteps: "step1",
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	/**
	 * @type React.Dispatch<React.SetStateAction<string>>
	 *     */
	setPaymentSteps: () => {}
});

// @ts-ignore
export const PaymentStepProvider = ({children}) => {
	const [paymentSteps, setPaymentSteps] = useState("step1");

	// @ts-ignore
	return <PaymentStepContext.Provider value={{paymentSteps , setPaymentSteps}}>
		{children}
	</PaymentStepContext.Provider>
}