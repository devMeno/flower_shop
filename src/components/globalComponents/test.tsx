import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IoClose } from "react-icons/io5";

export default function Test() {
	const [open2, setOpen2] = useState(true)

	return (
		<Transition.Root show={open2} as={Fragment}>
			<Dialog className="relative z-10" onClose={setOpen2}>
				<div className="fixed inset-0" />

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="-translate-x-100"
								leaveTo="-translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
									<div className={'w-full'}>
										<div className={'w-full md:w-1/2 relative h-[100vh] font-medium text-[21px]'}>
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
													<img src="/public/images/icons/socialMedias/pinterest.png" alt=""
														 className={'w-[24px] h-[24px]'}/>
													<img src="/public/images/icons/socialMedias/Instagram.png" alt=""
														 className={'w-[24px] h-[24px]'}/>
													<img src="/public/images/icons/socialMedias/facebook.png" alt=""
														 className={'w-[24px] h-[24px]'}/>
													<img src="/public/images/icons/socialMedias/telegram.png" alt=""
														 className={'w-[24px] h-[24px]'}/>
													<img src="/public/images/icons/socialMedias/Twitter.png" alt=""
														 className={'w-[24px] h-[24px]'}/>
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
	)
}