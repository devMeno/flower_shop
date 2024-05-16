import "../App.css"
import Navbar from "../components/globalComponents/navbar.tsx";
import Footer from "../components/globalComponents/footer.tsx";
import SectionTitle from "../components/globalComponents/sectionTitle.tsx";
import Box from "../components/globalComponents/box.tsx";
import Plan1 from "../../public/images/pictures/subscription/plan1.png"
import Plan2 from "../../public/images/pictures/subscription/plan2.png"
import Plan3 from "../../public/images/pictures/subscription/plan3.png"
import Left from "../../public/images/pictures/subscription/left colum (1).png"
import SubscriptionPicture from '../../public/images/pictures/subscription/subscription_image.png'


const Subscription = () => {
	return (
		<div>
			<Navbar/>
			<div className={'xl:flex'}>
				<div className={'xl:w-1/2 border-[1px] border-black'}>
					<img src={SubscriptionPicture} alt="" className={'w-full'}/>
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
			<div className={'w-full xl:flex'}>
				<div className={'w-full xl:w-1/2'}>
					<SectionTitle title={'How does it work?'}/>
				</div>
				<div className={'w-full xl:w-1/2'}>
					<Box title={'Choose a plan'} text={"'Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.'"}
					/>
					<Box title={'Frequency and Duration'} text={'Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different needs, and we aim to provide flexible subscription options that cater to your specific preferences.'}
					/>
					<Box title={'Pay once'} text={'After entering your contact and delivery information and paying for your subscription, you can sit back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved ones'}/>
				</div>
			</div>
			<div className={'xl:flex xl:flex-row-reverse'}>
				<div className={'xl:w-1/2 border-[1px] border-black'}>
					<img src={Left} alt="" className={'w-full'}/>
				</div>
				<div
					className={'xl:w-1/2 py-[40px] px-[16px] md:py-[80px] md:px-[40px] border-black border-[1px]'}>
					<span className={'font-medium text-[14px]'}>Build Your Subscription</span>
					<div className={'my-[24px]'}>
						<span className={'font-medium text-[38px]'}>Selecting a Plan</span>
						<p>Enjoy free shipping on every order and save up to 30%.
							Every bouquet we deliver is carefully curated to ensure it arrives fresh and stunning. To
							modify, pause, or cancel your subscription, simply log in to your account dashboard. You're
							in complete control of your flower delivery experience.</p>
					</div>
					<div className={'w-full mb-[16px]'}>
						<div className={'md:flex w-full'}>
							<div className={'w-full md:w-1/2 border-[1px] border-[#D2D2D7]'}>
								<img src={Plan1} alt="" className={'w-full'}/>
							</div>
							<div className={'w-full md:w-1/2 px-[16px] py-[20px] border-[2px] border-[#D2D2D7]'}>
								<span className={'font-medium text-[18px]'}>Classic</span>
								<ul className={'ml-[25px] mt-[24px]'}>
									<li>Price $45</li>
									<li>Free Delivery</li>
									<li>Best for a budget</li>
									<li>Glass vase with first delivery</li>
									<li>Save up to 25%</li>
								</ul>
							</div>
						</div>
						<button
							className={'w-full md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] bg-black text-white'}>
							SELECT
						</button>
					</div>
					<div className={'w-full mb-[16px]'}>
						<div className={'md:flex w-full'}>
							<div className={'w-full md:w-1/2 border-[1px] border-[#D2D2D7]'}>
								<img src={Plan2} alt="" className={'w-full'}/>
							</div>
							<div className={'w-full md:w-1/2 px-[16px] py-[20px] border-[2px] border-[#D2D2D7]'}>
								<span className={'font-medium text-[18px]'}>Classic</span>
								<ul className={'ml-[25px] mt-[24px]'}>
									<li>Price $45</li>
									<li>Free Delivery</li>
									<li>Best for a budget</li>
									<li>Glass vase with first delivery</li>
									<li>Save up to 25%</li>
								</ul>
							</div>
						</div>
						<button
							className={'w-full md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] bg-black text-white'}>
							SELECT
						</button>
					</div>
					<div className={'w-full mb-[40px]'}>
						<div className={'md:flex w-full'}>
							<div className={'w-full md:w-1/2 border-[1px] border-[#D2D2D7]'}>
								<img src={Plan3} alt="" className={'w-full'}/>
							</div>
							<div className={'w-full md:w-1/2 px-[16px] py-[20px] border-[2px] border-[#D2D2D7]'}>
								<span className={'font-medium text-[18px]'}>Classic</span>
								<ul className={'ml-[25px] mt-[24px]'}>
									<li>Price $45</li>
									<li>Free Delivery</li>
									<li>Best for a budget</li>
									<li>Glass vase with first delivery</li>
									<li>Save up to 25%</li>
								</ul>
							</div>
						</div>
						<button
							className={'w-full md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] bg-black text-white'}>
							SELECT
						</button>
					</div>
					<hr/>
					<div className={'my-[40px]'}>
						<span className={'text-[28px]'}>How often do you want flowers delivered ?</span><br/>
						<span>Select the delivery frequency</span>
						<div className={'w-full md:flex md:justify-between md:gap-[15px] mt-[24px]'}>
							<button
								className={'w-full mb-[10px] md:mb-0 md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] hover:bg-black hover:text-white'}>MONDAY
							</button>
							<button
								className={'w-full mb-[10px] md:mb-0 md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] hover:bg-black hover:text-white'}>BI-WEEKLY
							</button>
							<button
								className={'w-full mb-[10px] md:mb-0 md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] hover:bg-black hover:text-white'}>WEEKLY
							</button>
						</div>
					</div>
					<hr/>
					<div className={'my-[40px]'}>
						<span className={'text-[28px]'}>How many deliveries would you like ?</span><br/>
						<span>Pay once and do not worry about flowers, our bouquets will be beautiful and on time, as many times as you need </span>
						<div className={'flex border-black border-[1px] h-[44px] w-fit mt-[24px]'}>
							<button className={'size-[44px] border-r-[1px] border-black text-center flex items-center'}>
								<span className={'text-[24px] mx-auto'}>-</span></button>
							<div className={'border-r-[1px] border-black w-[58px] text-center flex items-center'}><span
								className={'text-[18px] mx-auto'}>1</span></div>
							<button className={'size-[44px] text-center flex items-center'}><span
								className={'text-[24px] mx-auto'}>+</span></button>
						</div>
					</div>
					<hr/>
					<button
						className={'w-full mt-[40px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] bg-black text-white'}>
						CHECKOUT
					</button>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Subscription;