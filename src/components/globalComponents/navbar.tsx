import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IoClose } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import {ImPinterest2} from "react-icons/im";
import {FaInstagram} from "react-icons/fa";
import {LuFacebook} from "react-icons/lu";
import {RxTwitterLogo} from "react-icons/rx";
import {LiaTelegram} from "react-icons/lia";

const Navbar = () => {

	const [open1, setOpen1] = useState(false)
	const [open2, setOpen2] = useState(false)

	const handleCart = () => {
		setOpen1(open1 === false ? true : false)
	}

	const handleMenu = () => {
		setOpen2(open2 === false ? true : false)
	}

	return (
		<>

			<Transition.Root show={open1} as={Fragment}>
				<Dialog className="relative z-10" onClose={setOpen1}>
					<div className="fixed inset-0" />

					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
								<Transition.Child
									as={Fragment}
									enter="transform transition ease-in-out duration-500 sm:duration-700"
									enterFrom="translate-x-full"
									enterTo="translate-x-0"
									leave="transform transition ease-in-out duration-500 sm:duration-700"
									leaveFrom="translate-x-0"
									leaveTo="translate-x-full"
								>
									<Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
										<div className={'w-full xl:flex bg-white'}>

											<div className={'w-full relative h-[100vh]'}>
												<div
													className={'border-black border-[1px] flex items-center justify-between py-[20px] md:py-[32px] px-[24px] md:px-[40px]'}>
													<span className={'font-medium'}>Shopping Cart</span>
													<button onClick={() => setOpen1(false)}><IoClose className={'size-[24px]'}/></button>
												</div>

												<div
													className={'md:flex border-[1px] border-black py-[24px] px-[16px] md:p-[40px]'}>
													<img src="/public/images/pictures/home/products/card item.png" alt="" className={'size-[160px] border-black border-[1px]'}/>
													<div
														className={'flex items-center justify-between md:ml-[15px] w-full'}>
														<div className={'mt-[16px] md:mt-0'}>
															<span className={'font-medium text-[18px]'}>Snowfall</span><br/>
															<span className={'text-[16px]'}>Quantity (1)</span><br/>
															<span className={'font-medium text-[18px]'}>$100</span>
														</div>
														<button
															className={'text-[18px] text-[#808080] font-medium border-none'}>Remove
														</button>
													</div>
												</div>
												<div
													className={'border-black border-[1px] flex items-center justify-between py-[26px] px-[24px] md:p-[40px]'}>
													<span className={'font-medium text-[18px]'}>Subtotal</span>
													<span className={'font-medium text-[21px]'}>$100.00</span>
												</div>
												<div aria-placeholder={'Gift message'} className={'border-black border-[1px] py-[26px] px-[24px] md:p-[40px] h-[148px] md:h-[120px]'}></div>
												<div
													className={'hidden md:block border-black border-[1px] py-[26px] px-[24px] md:p-[40px] text-center'}>
													Shipping & taxes calculated at checkout <br/>
													Free standard shipping within Kyiv
												</div>

												<div className={'absolute bottom-0 bg-red-500 w-full'}>
													<button
														className={'w-full md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] bg-black text-white'}>
														CHECK OUT
													</button>
												</div>
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>

			<Transition.Root show={open2} as={Fragment}>
				<Dialog className="relative z-10" onClose={setOpen2}>
					<div className="fixed inset-0" />

					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
								<Transition.Child
									as={Fragment}
									enter="transform transition ease-in-out duration-500 sm:duration-700"
									enterFrom="-translate-x-full"
									enterTo="-translate-x-100"
									leave="transform transition ease-in-out duration-500 sm:duration-700"
									leaveFrom="-translate-x-100"
									leaveTo="-translate-x-full"
								>
									<Dialog.Panel className="pointer-events-auto w-screen">
										<div className={'w-full md:w-1/2 bg-white'}>
											<div className={'w-full relative h-[100vh] font-medium text-[21px]'}>
												<div
													className={'py-[8px] px-[14px] md:py-[12px] md:px-[16px] border-black border-[1px]'}>
													<IoClose className={'size-[24px]'} onClick={() => setOpen2(false)}/></div>
												<div className={'p-[24px] border-black border-[1px]'}>Sign in</div>
												<div className={'p-[24px] border-black border-[1px]'}>Shop</div>
												<div className={'p-[24px] border-black border-[1px]'}>Service</div>
												<div className={'p-[24px] border-black border-[1px]'}>Contact</div>
												<div className={'p-[24px] border-black border-[1px]'}>About us</div>
												<div className={'p-[24px] border-black border-[1px]'}>
													<span className={'text-[16px]'}>Shipping & returns</span><br/>
													<span className={'text-[16px]'}>Terms & conditions</span><br/>
													<span className={'text-[16px]'}>Privacy policy</span>
												</div>
												<div className={'border-black border-[1px]'}>
													<div className={'w-full flex justify-between items-center p-[24px]'}>
														<ImPinterest2 className={'size-[24px]'}/>
														<FaInstagram className={'size-[24px]'}/>
														<LuFacebook className={'size-[24px]'}/>
														<RxTwitterLogo className={'size-[24px]'}/>
														<LiaTelegram className={'size-[24px]'}/>
													</div>
												</div>
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>

			<div className={'flex justify-between border-[1px] border-black'}>
			<button className={'xl:hidden size-[56px] border-[1px] border-black py-[32px] flex items-center'} onClick={handleMenu}>
				<IoMenuSharp className={'size-[24px] mx-auto'}/></button>
			<div className={'hidden xl:block w-1/4'}>
				<div className={' w-full flex font-medium'}>
					<button className={'w-1/2 border-[1px] border-black py-[32px]'}>Shop</button>
					<button className={'w-1/2 border-[1px] border-black py-[32px]'}>Contact</button>
				</div>
			</div>
			<div className={'hidden xl:block w-1/4'}>
				<div className={' w-full flex font-medium'}>
					<button className={'w-1/2 border-[1px] border-black py-[32px]'}>Sign in</button>
					<button className={'w-1/2 border-[1px] border-black py-[32px]'} onClick={handleCart}>Cart</button>
				</div>
			</div>
			<button className={'xl:hidden size-[56px] border-[1px] border-black py-[32px] flex items-center'}>
				<BiShoppingBag className={'size-[24px] mx-auto'} onClick={handleCart}/></button>
		</div>

		</>
	);
};

export default Navbar;