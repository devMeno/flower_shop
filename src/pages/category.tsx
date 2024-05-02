import "../App.css"
import Product from "../components/pagesComponents/home/product.tsx";

const Category = () => {
	return (
		<div>
			<div className={'xl:flex'}>
				<div className={'xl:w-1/2 border-[1px] border-black category'}></div>
				<div className={'xl:w-1/2'}>
					<Product/>
					<Product/>
					<Product/>
					<Product/>
					<Product/>
				</div>
			</div>
		</div>
	);
};

export default Category;