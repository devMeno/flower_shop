const Footer = () => {
	return (
		<div className={'xl:flex'}>
			<div className={'md:flex w-full xl:w-1/2'}>
				<div className={'border-black border-[1px] px-[16px] py-[40px] md:p-[40px] w-full md:w-1/2'}>
					<p>Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day,
						Christmas... Reminds you 7 days before. No spam or sharing your address
					</p>

					<form action="" className={'mt-[20px]'}>
						<input type="email"
							   className={'w-full px-[10px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] mb-[10px] md:mb-0'}
							   placeholder={'Your email'}/>
						<button
							className={'w-full md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] bg-black text-white mt-[5px]'}>REMIND
						</button>
					</form>
				</div>
				<div className={'border-black border-[1px] px-[16px] py-[40px] md:p-[40px] gap-[24px] w-full md:w-1/2'}>
					<div className={'mb-[16px] md:mb-[24px]'}><span
						className={'font-medium text-[18px] md:text-[21px] text-[#808080]'}>Contact Us</span></div>
					<div className={'mb-[16px] md:mb-[24px]'}>
						<span className={'text-[14px] text-[#808080]'}>Address</span><br/>
						<span className={'text-[16px] font-medium mb-[24px]'}>15/4 Khreshchatyk Street, Kyiv </span>
					</div>
					<div className={'mb-[16px] md:mb-[24px]'}>
						<span className={'text-[14px] text-[#808080]'}>Phone</span><br/>
						<span className={'text-[16px] font-medium mb-[24px]'}>+380980099777</span>
					</div>
					<div className={'mb-[16px] md:mb-[24px]'}>
						<span className={'text-[14px] text-[#808080]'}>General Enquiry:</span><br/>
						<span className={'text-[16px] font-medium mb-[24px]'}>Kiev.Florist.Studio@gmail.com</span>
					</div>
					<span className={'font-medium text-[18px] md:text-[21px] text-[#808080]'}>Follow Us</span>
					<div className={'w-full flex justify-between items-center mt-[40px]'}>
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
			<div className={'md:flex w-full xl:w-1/2'}>
				<div className={'border-black border-[1px] px-[16px] py-[40px] md:p-[40px] w-full md:w-1/2'}>
					<div className={'mb-[16px] md:mb-[24px]'}><span
						className={'font-medium text-[18px] md:text-[21px] text-[#808080]'}>Contact Us</span>
					</div>
					<div className={'mb-[16px] md:mb-[24px]'}>
						<span className={'text-[16px] font-medium mb-[24px]'}>All Products</span><br/>
						<span className={'text-[16px] font-medium mb-[24px]'}>Fresh Flowers</span><br/>
						<span className={'text-[16px] font-medium mb-[24px]'}>Dried Flowers</span><br/>
						<span className={'text-[16px] font-medium mb-[24px]'}>Live Plants</span><br/>
						<span className={'text-[16px] font-medium mb-[24px]'}>Designer Vases</span><br/>
						<span className={'text-[16px] font-medium mb-[24px]'}>Aroma Candles</span><br/>
						<span className={'text-[16px] font-medium mb-[24px]'}>Freshener Diffuser</span>
					</div>
					<div className={'mb-[16px] md:mb-[24px]'}><span
						className={'font-medium text-[18px] md:text-[21px] text-[#808080]'}>Contact Us</span>
					</div>
					<div>
						<span className={'text-[16px] font-medium mb-[24px]'}>Flower Subcription</span><br/>
						<span className={'text-[16px] font-medium mb-[24px]'}>Wedding & Event Decor</span>
					</div>
				</div>
				<div className={'border-black border-[1px] px-[16px] py-[40px] md:p-[40px] w-full md:w-1/2'}>
					<div className={'mb-[16px] md:mb-[24px]'}><span
						className={'font-medium text-[18px] md:text-[21px] text-[#808080]'}>About Us</span>
					</div>
					<div className={'mb-[16px] md:mb-[24px]'}>
						<span className={'text-[16px] font-medium mb-[24px]'}>Our story</span><br/>
						<span className={'text-[16px] font-medium mb-[24px]'}>Blog</span><br/>
					</div>
					<div>
						<span className={'text-[16px] font-medium mb-[24px]'}>Shipping & returns</span><br/>
						<span className={'text-[16px] font-medium mb-[24px]'}>Terms & conditions</span><br/>
						<span className={'text-[16px] font-medium mb-[24px]'}>Privacy policy</span><br/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;