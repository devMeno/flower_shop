import { PiCaretRight } from "react-icons/pi";
import {usePaymentStepState} from "../../../hooks/usePaymentStepState.tsx";

const Step1 = () => {

	const {setPaymentSteps} = usePaymentStepState();

	const handleGoToStep2 = ()=>{
		setPaymentSteps("step2");
	}

	return (
		<div className={'w-full'}>
			<div className="flex mb-[32px] md:mb-[40px]">
				<span>Information</span>
				<PiCaretRight className={'mt-[5px] mx-[5px]'}/>
				<span className={'text-[#808080]'}>Shipping</span>
				<PiCaretRight className={'mt-[5px] mx-[5px] text-[#808080]'}/>
				<span className={'text-[#808080]'}>Payment</span>
				<PiCaretRight className={'mt-[5px] mx-[5px] text-[#808080]'}/>
			</div>
			<div className={'px-[16px] py-[24px] md:p-[40px] bg-[#D2D2D7]'}>Already have an account? Log in for faster
				checkout
			</div>
			<div className={'my-[16px] text-[18px] font-medium'}>1 Contact information</div>
			<form action="" className={'mb-[24px]'}>
				<input type="text"
					   className={'w-full px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] mb-[10px]'}
					   placeholder={'Your name'}/>
				<input type="email"
					   className={'w-full px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] mb-[10px]'}
					   placeholder={'Your email'}/>
				<input type="text"
					   className={'w-full px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] mb-[10px]'}
					   placeholder={'Your phone number'}/>
				<button className={'w-full md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] bg-black text-white mt-[5px]'}
				onClick={handleGoToStep2}>
					Continue to shipping
				</button>
			</form>
			<hr className={'text-[#D9D9D9]'}/>
			<div className={'mt-[40px] mb-[24px] text-[#D9D9D9] text-[18px] font-medium'}>2 Shipping details</div>
			<hr className={'text-[#D9D9D9]'}/>
			<div className={'mt-[40px] mb-[24px] text-[#D9D9D9] text-[18px] font-medium'}>3 Payment</div>
			<hr className={'text-[#D9D9D9]'}/>
		</div>
	);
};

export default Step1;