import Step1 from "../components/pagesComponents/paymentSteps/step1.tsx";
import Step2 from "../components/pagesComponents/paymentSteps/step2.tsx";
import Step3 from "../components/pagesComponents/paymentSteps/step3.tsx";
import { Accordion, AccordionTab } from 'primereact/accordion';
import Footer from "../components/globalComponents/footer.tsx";


const Checkout = () => {
	return (
		<div>
			<div className={'xl:flex xl:flex-row-reverse'}>
				<div className={'hidden xl:block xl:w-1/2 border-[1px] border-black py-[40px] px-[16px] md:py-[40px] md:px-[80px] bg-[#F5F5F7]'}>
					<div className="relative h-full">
						<div className={'w-full'}>
							<span className={'font-medium text-[14px]'}>Order summary</span>
							<div className={'md:flex mt-[40px] pb-[24px] border-b-[1px] border-[#808080]'}>
								<img src="/public/images/pictures/home/products/card item.png" alt=""
									 className={'size-[160px] border-black border-[1px]'}/>
								<div className={'flex items-center justify-between md:ml-[15px] w-full'}>
									<div className={'mt-[16px] md:mt-0'}>
										<span className={'font-medium text-[18px]'}>Snowfall</span><br/>
										<span className={'text-[16px]'}>Quantity (1)</span>
									</div>
									<div className={'text-[18px] font-medium'}>$100</div>
								</div>
							</div>
							<div className={'my-[24px]'}>If you have our gift card, enter the code to get discounts
							</div>
							<div>
								<form action="" className={'w-full md:flex md:justify-between'}>
									<input type="text"
										   className={'w-full md:w-[49%] px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px]'}
										   placeholder={'Gift card'}/>
									<button
										className={'w-full md:w-[49%] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] bg-black text-white'}>
										APPLY
									</button>
								</form>
							</div>
							<div
								className={'w-full border-t-[1px] border-b-[1px] border-[#808080] py-[24px] my-[24px]'}>
								<div className={'flex justify-between mb-[16px]'}>
									<div>Subtotal</div>
									<div>$100.00</div>
								</div>
								<div className={'flex justify-between'}>
									<div>Shipping</div>
									<div>Calculated at next step</div>
								</div>
							</div>
							<div className={'flex justify-between font-medium'}>
								<div className={'text-[18px]'}>Total</div>
								<div className={'text-[21px]'}>$100.00</div>
							</div>
						</div>
						<div className={'absolute bottom-0 w-full'}>
							<div className={'mx-auto w-fit flex'}>Secure Checkout <img
								src="/public/images/icons/locked.png" alt="" className={'size-[22px] ml-[5px]'}/></div>
						</div>
					</div>
				</div>

				<div className={'block xl:hidden xl:w-1/2 border-[1px] border-black py-[40px] px-[16px] md:py-[40px] md:px-[80px] bg-[#F5F5F7]'}>
					<div className="card">
						<Accordion activeIndex={0}>
							<AccordionTab
								header={
									<span className="flex align-items-center gap-2 w-full">
									<div className={'flex items-center'}><img
										src="/public/images/icons/shopping_cart.png" alt=""
										className={'size-[24px] mx-[5px]'}/><span
										className="font-medium text-[18px] white-space-nowrap">Show order summary</span></div>
										<span className="ml-auto">$100</span>
								</span>
								}
								className={'h-full w-full'}
							>
								<div>
									<div className="h-full mt-[24px]">
										<div className={'w-full'}>
											<span className={'font-medium text-[14px]'}>Order summary</span>
											<div className={'md:flex mt-[24px] pb-[24px] border-b-[1px] border-[#808080]'}>
												<img src="/public/images/pictures/home/products/card item.png" alt=""
													 className={'size-[160px] border-black border-[1px]'}/>
												<div className={'flex items-center justify-between md:ml-[15px] w-full'}>
													<div className={'mt-[16px] md:mt-0'}>
														<span className={'font-medium text-[18px]'}>Snowfall</span><br/>
														<span className={'text-[16px]'}>Quantity (1)</span>
													</div>
													<div className={'text-[18px] font-medium'}>$100</div>
												</div>
											</div>
											<div className={'my-[16px]'}>If you have our gift card, enter the code to get
												discounts
											</div>
											<div>
												<form action="" className={'w-full md:flex md:justify-between'}>
													<input type="text" className={'w-full md:w-[49%] px-[10px] md:px-[24px] mb-[10px] md:mb-0 py-[16px] border-black border-[1px] font-medium text-[16px]'} placeholder={'Gift card'}/>
													<button
														className={'w-full md:w-[49%] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] bg-black text-white'}>
														APPLY
													</button>
												</form>
											</div>
											<div
												className={'w-full border-t-[1px] border-b-[1px] border-[#808080] py-[16px] my-[16px]'}>
												<div className={'flex justify-between mb-[16px]'}>
													<div>Subtotal</div>
													<div>$100.00</div>
												</div>
												<div className={'flex justify-between'}>
													<div>Shipping</div>
													<div>Calculated at next step</div>
												</div>
											</div>
											<div className={'flex justify-between font-medium'}>
												<div className={'text-[18px]'}>Total</div>
												<div className={'text-[21px]'}>$100.00</div>
											</div>
										</div>
								</div>
									<div className={'mt-[24px] w-full'}>
										<div className={'mx-auto w-fit flex'}>Secure Checkout <img
											src="/public/images/icons/locked.png" alt=""
											className={'size-[22px] ml-[5px]'}/></div>
									</div>
								</div>
							</AccordionTab>
						</Accordion>
					</div>
				</div>

				<div className={'xl:w-1/2 border-[1px] border-black py-[40px] px-[16px] md:py-[40px] md:px-[80px]'}>
					<Step3/>
				</div>
			</div>

			<Footer/>
		</div>
	);
};

export default Checkout;