import Combination from "../components/pagesComponents/product/combination.tsx";
import Footer from "../components/globalComponents/footer.tsx";
import ProductPrice from "../components/globalComponents/productPrice.tsx";
import Navbar from "../components/globalComponents/navbar.tsx";
import Proposition1 from "../../public/images/pictures/product/propositions/proposition1.png"
import Proposition2 from "../../public/images/pictures/product/propositions/proposition2.png"
import Proposition3 from "../../public/images/pictures/product/propositions/proposition3.png"
import Proposition4 from "../../public/images/pictures/product/propositions/proposition4.png"
import ProductPicture from '../../public/images/pictures/product/productPicture.png'

const Product = () => {
	return (
		<div>
			<Navbar/>
			<div className={'xl:flex'}>
				<div className={'xl:w-1/2 border-[1px] border-black'}>
					<img src={ProductPicture} alt="" className={'w-full'}/>
				</div>
				<div className={'xl:w-1/2 py-[40px] px-[16px] md:p-[40px] border-[1px] border-black'}>
					<div className={'mb-[22px]'}><span
						className={'font-medium text-[14px] mb-[24px]'}>Fresh Flowers / <span
						className={'text-[#808080]'}>Rosy Delight</span></span></div>
					<div className={'mb-[22px]'}><span className={'font-medium text-[38px]'}>Rosy Delight - $100</span>
					</div>
					<p>Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty
						and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these
						sublime flowers even</p>
					<div className={'my-[22px] flex items-center'}>
						<span className={'font-medium text-[18px] mr-[20px]'}>Quantity</span>
						<div className={'flex border-black border-[1px] h-[44px]'}>
							<button className={'size-[44px] border-r-[1px] border-black text-center flex items-center'}>
								<span className={'text-[24px] mx-auto'}>-</span></button>
							<div className={'border-r-[1px] border-black w-[58px] text-center flex items-center'}><span
								className={'text-[18px] mx-auto'}>1</span></div>
							<button className={'size-[44px] text-center flex items-center'}><span
								className={'text-[24px] mx-auto'}>+</span></button>
						</div>
					</div>
					<span className={'font-medium text-[18px]'}>Excellent Combination with:</span>
					<div className={'my-[24px]'}>
						<Combination/>
					</div>
					<span className={'font-medium text-[18px]'}>Price options</span>
					<form action="" className={'mt-[24px]'}>
						<div className={'flex mb-[10px]'}>
							<input type="radio" id={'1'} className={'size-[24px] mr-[10px]'} name={'option'}/>
							<label htmlFor="1" className={'text-[16px]'}>One time purchase. Price $100</label>
						</div>
						<div className={'flex'}>
							<input type="radio" id={'2'} className={'size-[24px] mr-[10px]'} name={'option'}/>
							<label htmlFor="2" className={'text-[16px]'}>Subscribe now, and save 25% on this
								order. </label>
						</div>
					</form>
					<button
						className={'w-full mt-[40px] md:px-[24px] py-[16px] border-black border-[1px] font-medium text-[16px] bg-black text-white'}>
						ADD TO BASKET
					</button>
				</div>
			</div>
			<div className={'w-full py-[40px] px-[16px] text-left md:text-center md:py-[80px] font-semibold text-[34px] md:text-[50px] border-black border-[1px]'}>
				You may also like…
			</div>
			<div className={'xl:flex'}>
				<div className={'md:flex w-full xl:w-1/2'}>
					<div className={'w-full md:w-1/2'}>
						<ProductPrice name={'Autumn Symphony'} price={70} image={Proposition1}/>
					</div>
					<div className={'w-full md:w-1/2'}>
						<ProductPrice name={'Autumn Symphony'} price={70} image={Proposition2}/>
					</div>
				</div>
				<div className={'md:flex w-full xl:w-1/2'}>
					<div className={'w-full md:w-1/2'}>
						<ProductPrice name={'Autumn Symphony'} price={70} image={Proposition3}/>
					</div>
					<div className={'w-full md:w-1/2'}>
						<ProductPrice name={'Autumn Symphony'} price={70} image={Proposition4}/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Product;