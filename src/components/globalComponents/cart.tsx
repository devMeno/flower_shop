import { IoClose } from "react-icons/io5";

const Cart = () => {
	return (
		<div className={'w-full xl:flex'}>
			<div className={'hidden xl:block w-1/2 blur-[7px] bg-transparent'}></div>
			<div className={'w-full xl:w-1/2 relative h-[100vh]'}>
				<div
					className={'border-black border-[1px] flex items-center justify-between py-[26px] px-[24px] md:px-[40px]'}>
					<span className={'font-medium'}>Shopping Cart</span>
					<IoClose className={'size-[24px]'}/>
				</div>
				<div className={'overflow-y-scroll'}>
					<div className={'md:flex border-[1px] border-black py-[24px] px-[16px] md:p-[40px]'}>
						<img src="/public/images/pictures/home/products/card item.png" alt=""
							 className={'size-[160px] border-black border-[1px]'}/>
						<div className={'flex items-center justify-between md:ml-[15px] w-full'}>
							<div className={'mt-[16px] md:mt-0'}>
								<span className={'font-medium text-[18px]'}>Snowfall</span><br/>
								<span className={'text-[16px]'}>Quantity (1)</span><br/>
								<span className={'font-medium text-[18px]'}>$100</span>
							</div>
							<button className={'text-[18px] text-[#808080] font-medium border-none'}>Remove</button>
						</div>
					</div>
					<div
						className={'border-black border-[1px] flex items-center justify-between py-[26px] px-[24px] md:p-[40px]'}>
						<span className={'font-medium text-[18px]'}>Subtotal</span>
						<span className={'font-medium text-[21px]'}>$100.00</span>
					</div>
					<div aria-placeholder={'Gift message'} className={'border-black border-[1px] py-[26px] px-[24px] md:p-[40px] h-[148px] md:h-[120px]'}></div>
					<div className={'hidden md:block border-black border-[1px] py-[26px] px-[24px] md:p-[40px] text-center'}>
						Shipping & taxes calculated at checkout <br/>
						Free standard shipping within Kyiv
					</div>
				</div>
				<div className={'absolute bottom-0 bg-red-500 w-full'}>
					<button
						className={'w-full md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] bg-black text-white'}>
						CHECK OUT
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;