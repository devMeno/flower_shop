const AboutUs = () => {
	return (
		<div>
			<div className={'xl:flex'}>
				<div className={'xl:w-1/2 border-[1px] border-black'}>
					<img src="/public/images/pictures/subscription/subscription_image.png" alt="" className={'w-full'}/>
				</div>
				<div className={'xl:w-1/2 py-[40px] px-[16px] md:p-[80px] border-[1px] border-black'}>
					<div className={'text-[34px] md:text-[50px] mb-[24px]'}>Flower Subscription</div>
					<div className={'mb-[24px]'}>
						<span className={'text-[16px] font-medium'}>For Yourself</span><br/>
						<ul className={'ml-[20px]'}>
							<li>
								The perfect way to keep your home fresh and beautiful. Get a regular delivery of
								stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty
								and fragrance of fresh flowers hassle-free!
							</li>
						</ul>
					</div>
					<div className={'mb-[24px]'}>
						<span className={'text-[16px] font-medium'}>As a Gift</span><br/>
						<ul className={'ml-[20px]'}>
							<li>
								Simply provide us with their address and let us take care of the rest, delivering
								beautiful blooms straight to their doorstep at the frequency and duration of your
								choosing.
							</li>
						</ul>
					</div>
					<div>
						<span className={'text-[16px] font-medium'}>For Business</span><br/>
						<ul className={'ml-[20px]'}>
							<li>
								Is a great way to create a pleasant atmosphere and leave a good impression on your
								guests and customers. Fresh floral arrangements will improve the aesthetic image of your
								business, and our service guarantees timely replacement without extra care or effort on
								your part.
							</li>
						</ul>
					</div>
					<button
						className={'w-full mt-[40px] md:mt-[80px] md:px-[24px] py-[16px] md:w-auto border-black border-[1px] font-medium text-[16px] hover:bg-black hover:text-white'}>EXPLORE
						PLANS
					</button>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;