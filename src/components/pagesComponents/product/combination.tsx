import { useState, useEffect } from 'react';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import {ProductService} from "./productService.tsx";

interface Product {
	name: string;
	price: number;
}

const Combination = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const responsiveOptions: CarouselResponsiveOption[] = [
		{
			breakpoint: '2440px',
			numVisible: 5,
			numScroll: 1
		},
		{
			breakpoint: '600px',
			numVisible: 1,
			numScroll: 1
		}
	];

	useEffect(() => {
		ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
	}, []);

	const productTemplate = (product: Product) => {
		return (
			<div className={'size-[208px] sm:w-[100px] sm:h-[146px] mx-auto'}>
				<img src="/images/pictures/product/img.png" alt="" className={'w-[208px] h-[162px] sm:size-[100px]'}/>
				<span className={'text-[14px]'}>{product.name}</span><br/>
				<span className={'text-[14px] text-[#808080]'}>${product.price}</span>
			</div>
		);
	};

	return (
		<div className="card">
			<Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
					  itemTemplate={productTemplate}/>
		</div>
	);
};

export default Combination;

