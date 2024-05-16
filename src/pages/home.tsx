import '../App.css'
import SectionTitle from "../components/globalComponents/sectionTitle.tsx";
import Box from "../components/globalComponents/box.tsx";
import Product from "../components/pagesComponents/home/product.tsx";
import Footer from "../components/globalComponents/footer.tsx";
import Navbar from "../components/globalComponents/navbar.tsx";
import {ImPinterest2} from "react-icons/im";
import {FaInstagram} from "react-icons/fa";
import {LuFacebook} from "react-icons/lu";
import {RxTwitterLogo} from "react-icons/rx";
import {LiaTelegram} from "react-icons/lia";
import ProductImage1 from '../../public/images/pictures/home/products/card item.png'
import ProductImage2 from '../../public/images/pictures/home/products/product2.png'
import ProductImage3 from '../../public/images/pictures/home/products/product3.png'
import ProductImage4 from '../../public/images/pictures/home/products/product4.png'
import ProductImage5 from '../../public/images/pictures/home/products/product5.png'

const Home = () => {
	return (
		<div>
			<Navbar/>
			<div className={'xl:flex'}>
				<div className={'xl:w-1/2 py-[40px] px-[16px] md:p-[80px] border-[1px] border-black'}>
					<div className={'pb-[35px] border-b-[1px] border-black'}>
						<span className={'font-semibold text-[40px] md:text-[67px]'}>Kyiv LuxeBouquets</span>
						<p className={'text-[18px]'}>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our <span className={'font-bold'}>Online Flower Delivery Service</span></p>
					</div>
					<div className={'mt-[24px] flex'}>
						<div className={'w-1/2 border-r-[1px] border-black'}>
							<img src="/public/images/pictures/home/img%20hero.png" alt="" className={'w-[155.5px] h-[180px] md:w-[95%] md:h-[256px] xl:size-[256px]'}/>
						</div>
						<div className={'w-1/2 border-l-[1px] border-black relative'}>
							<p className={'absolute bottom-0 ml-[16px] md:ml-[24px] text-[11px] md:text-[14px]'}>
								Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.
							</p>
						</div>
					</div>
				</div>
				<div className={'xl:w-1/2'}>
					<Product flex={'flex'} image={ProductImage1}/>
					<Product flex={'flex flex-row-reverse'} image={ProductImage2}/>
					<Product flex={'flex'} image={ProductImage3}/>
					<Product flex={'flex flex-row-reverse'} image={ProductImage4}/>
					<Product flex={'flex'} image={ProductImage5}/>
				</div>
			</div>
			<div className={'w-full xl:flex'}>
				<div className={'w-full xl:w-1/2'}>
					<SectionTitle title={'About us'}/>
				</div>
				<div className={'w-full xl:w-1/2'}>
					<Box title={'Kyiv LuxeBouquets'} text={'We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone\'s day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.'}
						 preText={'Our story'}
						 buttonText={'LEARN MORE'}
					/>
				</div>
			</div>
			<div className={'w-full xl:flex'}>
				<div className={'w-full xl:w-1/2'}>
					<SectionTitle title={'Why choose us ?'}/>
				</div>
				<div className={'w-full xl:w-1/2'}>
					<Box title={'Stylish bouquets by florists'}
					text={'At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.'}
					/>
					<Box title={'Stylish bouquets by florists'}
					text={'Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.'}
					/>
					<Box title={'Safe payment'} text={'You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.'}/>
					<Box title={'Subscription by your needs'} text={'With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You\'ll save time and money with this hassle-free solution to your floral needs.'}/>
				</div>
			</div>
			<div className={'w-full xl:flex'}>
				<div className={'w-full xl:w-1/2 border-[1px] border-black'}>
					<div className={'w-full py-[40px] px-[16px] md:p-[80px]'}>
						<span className={'text-[34px] md:text-[50px] font-semibold mb-[24px]'}>To Contact Us</span><br/>
						<span className={'font-medium text-[18px]'}>We will call you back</span>
						<div>
							<form action="" className={'md:flex justify-between mt-[15px]'}>
								<input type="text" className={'w-full px-[10px] md:px-[24px] py-[16px] md:w-[49%] border-black border-[1px] font-medium text-[16px] mb-[10px] md:mb-0'} placeholder={'+380 XX XXX XX XX'}/>
								<button className={'w-full md:px-[24px] py-[16px] md:w-[49%] border-black border-[1px] font-medium text-[16px] bg-black text-white'}>BOOK A CALL</button>
							</form>
						</div>
					</div>
					<div className={'md:flex'}>
						<div className={'w-full md:w-1/2 md:border-r-[1px] border-black'}>
							<div className={'text-center border-t-[1px] border-b-[1px] border-black'}>
								<span className={'text-[26px] md:text-[38px] font-semibold mb-[24px]'}>
									Phone
								</span>
							</div>
							<div className={'h-[144px] md:h-[282px] text-center content-center'}>
								<div className={'flex mx-auto w-fit mb-[15px]'}>
									<img src="/public/images/icons/call.png" alt="call icon"/>
									<span className={'text-[16px] font-semibold'}>+380980099777</span>
								</div>
								<div className={'flex mx-auto w-fit'}>
									<img src="/public/images/icons/call.png" alt="call icon"/>
									<span className={'text-[16px] font-semibold'}>+380980099777</span>
								</div>
							</div>
						</div>
						<div className={'w-full md:w-1/2'}>
							<div className={'text-center border-t-[1px] border-b-[1px] border-black'}>
								<span className={'text-[26px] md:text-[38px] font-semibold mb-[24px]'}>
									Address
								</span>
							</div>
							<div className={'h-[144px] md:h-[282px] text-center content-center'}>
								<div className={'flex mx-auto w-fit mb-[15px]'}>
									<span className={'text-[16px] font-semibold'}>opening hours: 8 to 11 p.m.</span>
								</div>
								<div className={'flex mx-auto w-fit'}>
									<img src="/public/images/icons/Vector.png" alt="vector icon"/>
									<span className={'text-[16px] font-semibold'}>15/4 Khreshchatyk Street, Kyiv </span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={'w-full xl:w-1/2 border-[1px] border-t-[0px] border-black contact xl:relative'}>

					<div className={'w-full md:flex bottom-0 xl:absolute bg-white border-black border-t-[1px]'}>
						<div className={'w-full md:w-1/2 border-r-[1px] border-black text-left xl:text-center pb-[15px] xl:mb-0 font-medium text-[26px] md:text-[38px] pl-[16px]'}>Follow us</div>
						<div className={'w-full md:w-1/2 px-[16px] md:px-[40px] flex justify-between items-center py-[16px] md:py-0'}>
							<ImPinterest2 className={'size-[24px]'}/>
							<FaInstagram className={'size-[24px]'}/>
							<LuFacebook className={'size-[24px]'}/>
							<RxTwitterLogo className={'size-[24px]'}/>
							<LiaTelegram className={'size-[24px]'}/>
						</div>
					</div>
				</div>
			</div>
			<div className={'w-full py-[40px] px-[16px] text-left md:text-center md:py-[80px] font-semibold text-[34px] md:text-[50px]'}>Our Service</div>
			<div className={'xl:flex xl:h-[720px]'}>
				<div className={'w-full xl:w-1/2'}>
					<img src="/public/images/pictures/home/image.png" alt="" className={'xl:w-full xl:h-[720px]'}/>
				</div>
				<div className={'w-full xl:border-black xl:border-t-[1px] border-b-[1px] xl:w-1/2 text-center flex items-center px-[16px] py-[40px] md:p-[80px]'}>
					<div>
						<span className={'font-medium text-[14px]'}>SERVICE</span>
						<h1 className={'text-[34px] md:text-[50px] font-semibold'}>Flower Subcriptions</h1>
						<p className={'font-medium text-[18px] mb-[64px]'}>
							Experience the convenience and savings of regular flower deliveries with our flexible
							subscription service - up to 30% more profitable than one-time purchases.
						</p>
						<button className={'w-full md:px-[24px] py-[16px] md:w-auto border-black border-[1px] font-medium text-[16px] hover:bg-black hover:text-white'}>
							SUSCRIBE NOW
						</button>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;