import "../App.css"
import Navbar from "../components/globalComponents/navbar.tsx";
import Footer from "../components/globalComponents/footer.tsx";
import ProductPrice from "../components/globalComponents/productPrice.tsx";
import Category1 from "../../public/images/pictures/category/products/category1.png"
import Category2 from "../../public/images/pictures/category/products/category2.png"
import Category3 from "../../public/images/pictures/category/products/category3.png"
import Category4 from "../../public/images/pictures/category/products/category4.png"
import Category5 from "../../public/images/pictures/category/products/category5.png"
import Category6 from "../../public/images/pictures/category/products/category6.png"
import Category7 from "../../public/images/pictures/category/products/category7.png"
import Category8 from "../../public/images/pictures/category/products/category8.png"
import Category9 from "../../public/images/pictures/category/products/category9.png"
import Category10 from "../../public/images/pictures/category/products/category10.png"

const Category = () => {
	return (
		<div>
			<Navbar/>
			<div className={'xl:flex'}>
				<div className={'xl:w-1/2 border-[1px] border-black'}>
					<img src="/public/images/pictures/category/left colum.png" alt="" className={'w-full'}/>
				</div>
				<div className={'xl:w-1/2'}>
					<div className={'w-full xl:flex'}>
						<div className={'w-full md:w-1/2'}><ProductPrice name={'Snowfall'} price={70} image={Category1}/></div>
						<div className={'w-full md:w-1/2'}><ProductPrice name={'Dawn\'s Delight'} price={70} image={Category2}/></div>
					</div>
					<div className={'w-full xl:flex'}>
						<div className={'w-full md:w-1/2'}><ProductPrice name={'Pink Elegance'} price={70} image={Category3}/></div>
						<div className={'w-full md:w-1/2'}><ProductPrice name={'Rustic Charm'} price={70} image={Category4}/></div>
					</div>
					<div className={'w-full xl:flex'}>
						<div className={'w-full md:w-1/2'}><ProductPrice name={'Autumn Symphony'} price={70} image={Category5}/></div>
						<div className={'w-full md:w-1/2'}><ProductPrice name={'Rosy Delight'} price={70} image={Category6}/></div>
					</div>
					<div className={'w-full xl:flex'}>
						<div className={'w-full md:w-1/2'}><ProductPrice name={'Serenity'} price={70} image={Category7}/></div>
						<div className={'w-full md:w-1/2'}><ProductPrice name={'Blue Harmony'} price={70} image={Category8}/></div>
					</div>
					<div className={'w-full xl:flex'}>
						<div className={'w-full md:w-1/2'}><ProductPrice name={'Mystical Majesty'} price={70} image={Category9}/></div>
						<div className={'w-full md:w-1/2'}><ProductPrice name={'Blazing Blossoms'} price={70} image={Category10}/></div>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Category;