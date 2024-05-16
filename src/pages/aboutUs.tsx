import Navbar from "../components/globalComponents/navbar.tsx";
import Footer from "../components/globalComponents/footer.tsx";
import Facebook from '../../public/images/pictures/aboutUs/socialMedia/Link_Facebook.png'
import Pinterest from '../../public/images/pictures/aboutUs/socialMedia/Link_Pinterest.png'
import Telegram from '../../public/images/pictures/aboutUs/socialMedia/Link_Telegram.png'
import Twitter from '../../public/images/pictures/aboutUs/socialMedia/Link_Twitter.png'
import Instagram from '../../public/images/pictures/aboutUs/socialMedia/Link_Insta.png'
import Subscription from '../../public/images/pictures/subscription/subscription_image.png'
import Left1 from '../../public/images/pictures/aboutUs/grid_colum_left1.png'
import Right from '../../public/images/pictures/aboutUs/grid_colum_Right.png'
import Left2 from '../../public/images/pictures/aboutUs/grid_colum_left2.png'

const AboutUs = () => {
	return (
		<div>
			<Navbar/>
			<div className={'xl:flex'}>
				<div
					className={'xl:w-1/2 py-[40px] px-[16px] md:p-[80px] border-[1px] border-black flex items-center justify-center'}>
					<div className={'text-center mx-auto'}>
						<span className={'font-semibold text-[34px] md:text-[50px]'}>Our Story</span>
						<div className={'my-[24px]'}>
							<span className={'text-[20px] md:text-[28px]'}>About</span>
						</div>
						<span className={'font-semibold text-[34px] md:text-[50px]'}>Kyiv LuxeBouquets</span>
						<div className={'mt-[24px] mb-[64px]'}>
							<p>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our <span
								className={'font-semibold'}>Online Flower Delivery Service</span></p>
						</div>
						<div className={'w-[343px] md:w-[368px] px-[15px] md:px-0 mx-auto flex justify-between'}>
							<img src={Facebook} alt=""
								 className={'size-[48px]'}/>
							<img src={Pinterest} alt=""
								 className={'size-[48px]'}/>
							<img src={Instagram} alt=""
								 className={'size-[48px]'}/>
							<img src={Twitter} alt=""
								 className={'size-[48px]'}/>
							<img src={Telegram} alt=""
								 className={'size-[48px]'}/>
						</div>
					</div>
				</div>
				<div className={'xl:w-1/2 border-[1px] border-black'}>
					<img src={Subscription} alt="" className={'w-full'}/>
				</div>
			</div>
			<div className={'w-full py-[40px] px-[16px] text-center md:py-[80px]'}>
				<span className={'font-medium text-[14px]'}>OUR STORY</span>
				<div className={'my-[16px]'}><span className={'font-semibold text-[34px] md:text-[50px]'}>Our Founder's Passion </span>
				</div>
				<p className={'w-[90%] md:w-[50%] mx-auto'}>Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska
					with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always
					had a passion for flowers and design, and his vision was to create a local floral studio that would
					specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.</p>
			</div>
			<div className={'xl:flex'}>
				<div className={'xl:w-1/2 border-[1px] border-black'}>
					<img src={Left1} alt="" className={'w-full'}/>
				</div>
				<div className={'xl:w-1/2 py-[40px] px-[16px] md:p-[80px] border-[1px] border-black'}>
					<span className={'font-semibold text-[26px] md:text-[38px]'}>Expertly Crafted Bouquets</span>
					<p className={'mt-[15px]'}>At Kyiv LuxeBouquets, we take pride in our team of talented and
						experienced florists who carefully select each bloom, ensuring that only the freshest and most
						stunning flowers make it into our bouquets. We work directly with farms to source the highest
						quality flowers, and our skilled florists expertly craft each bouquet to perfection.</p>
				</div>
			</div>
			<div className={'xl:flex xl:flex-row-reverse'}>
				<div className={'xl:w-1/2 border-[1px] border-black'}>
					<img src={Right} alt="" className={'w-full'}/>
				</div>
				<div className={'xl:w-1/2 py-[40px] px-[16px] md:p-[80px] border-[1px] border-black'}>
					<span className={'font-semibold text-[26px] md:text-[38px]'}>Bouquets, Gifts & Ambiance</span>
					<p className={'mt-[15px]'}>In addition to our stunning bouquets, we also offer a collection of dried
						bouquets, house plants, and fragrant candles from luxury brands to create the perfect ambiance.
						We believe that sending flowers, plants, and gifts should be easy and stress-free, which is why
						we offer same or next-day delivery throughout Kyiv.</p>
				</div>
			</div>
			<div className={'xl:flex'}>
				<div className={'xl:w-1/2 border-[1px] border-black'}>
					<img src={Left2} alt="" className={'w-full'}/>
				</div>
				<div
					className={'xl:w-1/2 py-[40px] px-[16px] md:p-[80px] border-[1px] border-black'}>
					<span className={'font-semibold text-[26px] md:text-[38px]'}>Making Every Day Special</span>
					<p className={'mt-[15px]'}>Our mission is simple: to make every day special and memorable for our
						customers. We are dedicated to providing the highest quality flowers, exceptional customer
						service, and a seamless online experience that will make you feel confident and satisfied with
						your purchase.Thank you for choosing Kyiv LuxeBouquets. We look forward to bringing joy and
						happiness to your life with our beautiful bouquets and gifts.</p>
				</div>
			</div>
			<div className={'w-full py-[40px] px-[16px] text-center md:py-[80px] border-black border-[1px]'}>
				<div className={'my-[16px]'}><span className={'font-semibold text-[34px] md:text-[50px]'}>Discover Our Beautiful Bouquets</span>
				</div>
				<p className={'w-[90%] md:w-[50%] mx-auto'}>Explore our collection of exquisite bouquets and surprise
					your loved ones with the perfect gift. Click the button below to start shopping</p>
				<button
					className={'w-full md:w-[50%] xl:w-[25%] mt-[24px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] bg-black text-white'}>
					SELECT
				</button>
			</div>
			<Footer/>
		</div>
	);
};

export default AboutUs;