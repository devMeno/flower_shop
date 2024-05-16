import { PiCaretRight } from "react-icons/pi";
import { PiCheck } from "react-icons/pi";
import { RxPencil2 } from "react-icons/rx";
import {usePaymentStepState} from "../../../hooks/usePaymentStepState.tsx";

const Step3 = () => {

	const {setPaymentSteps} = usePaymentStepState();

	const handleReturnToStep1 = ()=>{
		setPaymentSteps("step1")
	}

	const handleReturnToStep2 = ()=>{
		setPaymentSteps("step2")
	}

	return (
		<div className={'w-full'}>
			<div className="flex mb-[32px] md:mb-[40px]">
				<span className={'text-[#808080]'}>Information</span>
				<PiCaretRight className={'mt-[5px] mx-[5px] text-[#808080]'}/>
				<span className={'text-[#808080]'}>Shipping</span>
				<PiCaretRight className={'mt-[5px] mx-[5px] text-[#808080]'}/>
				<span>Payment</span>
				<PiCaretRight className={'mt-[5px] mx-[5px]'}/>
			</div>
			<div className={'flex border-black border-b-[1px] pb-[24px] mb-[40px] relative'}>
				<div className={'flex'}>
					<PiCheck className={'size-[24px] mr-[5px]'}/>
					<span className={'text-[18px] font-medium'}>Contact information</span>
				</div>
				<button className={'-mt-[20px]'} onClick={handleReturnToStep1}><RxPencil2 className={'size-[24px] absolute right-0'}/></button>
			</div>
			<div className={'flex border-black border-b-[1px] pb-[24px] relative'}>
				<div className={'flex'}>
					<PiCheck className={'size-[24px] mr-[5px]'}/>
					<span className={'text-[18px] font-medium'}>Shipping details</span>
				</div>
				<button className={'-mt-[20px]'} onClick={handleReturnToStep2}><RxPencil2 className={'size-[24px] absolute right-0'}/></button>
			</div>
			<div className={'my-[16px] text-[18px] font-medium'}>3 Payment</div>
			<div className={'my-[16px] text-[16px] font-medium'}>Pay by card. Your payment is secure.</div>
			<form action="" className={'mb-[24px]'}>
				<input type="number"
					   className={'w-full px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] mb-[10px]'}
					   placeholder={'Card Number'}/>
				<div className={'md:flex md:justify-between'}>
					<input type="text"
						   className={'w-full md:w-[49%] px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] mb-[10px]'}
						   placeholder={'MM / YY'}/>
					<input type="text" className={'w-full md:w-[49%] px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] mb-[10px]'}
						   placeholder={'CVV Code'}/>
				</div>
				<button
					className={'w-full md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] bg-black text-white mt-[5px]'}>
					MAKE A PURCHASE
				</button>
				<div className={'my-[16px] text-[16px] font-medium'}>Or pay using:</div>
				<div className={'md:flex md:justify-between'}>
					<button
						className={'w-full md:w-[49%] px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] mb-[10px]'}>
						<div className={'flex mx-auto items-center w-fit'}><img src="/public/images/icons/paymentMethods/Apple.png" alt=""
							 className={'size-[24px] mr-[5px]'}/> APPLE PAY</div>
					</button>
					<button
						className={'w-full md:w-[49%] px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] mb-[10px]'}>
						<div className={'flex mx-auto items-center w-fit'}><img
							src="/public/images/icons/paymentMethods/Google.png" alt=""
							className={'size-[24px] mr-[5px]'}/> APPLE PAY</div>
					</button>
				</div>
			</form>
			<hr className={'text-[#D9D9D9]'}/>
		</div>
	);
};

export default Step3;