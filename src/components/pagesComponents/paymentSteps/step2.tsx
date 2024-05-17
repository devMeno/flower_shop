import { PiCaretRight } from "react-icons/pi";
import { PiCheck } from "react-icons/pi";
import { RxPencil2 } from "react-icons/rx";
import {usePaymentStepState} from "../../../hooks/usePaymentStepState.tsx";

const Step2 = () => {

	const {setPaymentSteps} = usePaymentStepState();


	const handleGoToStep3 = ()=>{
		setPaymentSteps('step3')
	}

	const handleReturnToStep1 = ()=>{
		setPaymentSteps('step1')
	}

	return (
		<div className={'w-full'}>
			<div className="flex mb-[32px] md:mb-[40px]">
				<span className={'text-[#808080]'}>Information</span>
				<PiCaretRight className={'mt-[5px] mx-[5px] text-[#808080]'}/>
				<span>Shipping</span>
				<PiCaretRight className={'mt-[5px] mx-[5px]'}/>
				<span className={'text-[#808080]'}>Payment</span>
				<PiCaretRight className={'mt-[5px] mx-[5px] text-[#808080]'}/>
			</div>
			<div className={'flex border-black border-b-[1px] pb-[24px] relative'}>
				<div className={'flex'}>
					<PiCheck className={'size-[24px] mr-[5px]'}/>
					<span className={'text-[18px] font-medium'}>Contact information</span>
				</div>
				<button className={'-mt-[20px]'} onClick={handleReturnToStep1}><RxPencil2 className={'size-[24px] absolute right-0'}/></button>
			</div>
			<div className={'my-[16px] text-[18px] font-medium'}>1 Contact information</div>
			<form action="" className={'mb-[24px]'}>
				<input type="text"
					   className={'w-full px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] mb-[10px]'}
					   placeholder={'Your name'}/>
				<input type="text"
					   className={'w-full px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] mb-[10px]'}
					   placeholder={'Your phone number'}/>
				<input type="date"
					   className={'w-full px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] mb-[10px]'}
					   placeholder={'Data of Delivery'}/>
				<input type="time"
					   className={'w-full px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] mb-[10px]'}
					   placeholder={'Delivery Time'}/>
				<div className={'md:flex md:justify-between'}>
					<input type="text"
						   className={'w-full md:w-[49%] px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] mb-[10px]'}
						   placeholder={'Street'}/>
					<input type="text"
						   className={'w-full md:w-[49%] px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] mb-[10px]'}
						   placeholder={'Apartment Number'}/>
				</div>
				<div className={'mb-[10px] flex items-center'}>
					<input type="checkbox" id={'check'} className={'mr-[5px] size-[24px]'}/>
					<label htmlFor={'check'} className={'font-medium text-[14px]'} >I don't know the address, please call the recipient.</label>
				</div>
				<button className={'w-full md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] bg-black text-white mt-[5px]'}
				onClick={handleGoToStep3}>
					Continue to Payment
				</button>
			</form>
			<hr className={'text-[#D9D9D9]'}/>
			<div className={'mt-[40px] mb-[24px] text-[#D9D9D9] text-[18px] font-medium'}>3 Payment</div>
			<hr className={'text-[#D9D9D9]'}/>
		</div>
	);
};

export default Step2;