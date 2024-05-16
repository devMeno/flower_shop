interface Props {
	name: string;
	price: number;
	image: string;
}

const ProductPrice = (props:Props) => {
	const {name, price,image} = props
	return (
		<div className={'w-full relative h-[360px] border-black border-[1px] border-l-[0px]'} style={{backgroundImage:`url(${image})`, backgroundSize:'cover'}}>
			<div className={'absolute bottom-[16px] text-center w-full'}>
				<div className={'w-fit mx-auto'}>
					<div className={'font-medium'}>{name}</div>
					<div className={'text-[#808080]'}>price {price}$</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPrice;