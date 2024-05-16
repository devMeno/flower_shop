import {useContext} from "react";
import {PaymentStepContext} from "../contexts/paymentStep.tsx";

export const usePaymentStepState = () => useContext(PaymentStepContext)