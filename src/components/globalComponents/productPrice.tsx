import cardItem from "../../../public/images/pictures/product/card_item.png"

const ProductPrice = () => {
	return (
		<div className={'w-full relative h-[360px] border-black border-[1px] border-l-[0px]'} style={{backgroundImage:`url(${cardItem})`, backgroundSize:'cover'}}>
			<div className={'absolute bottom-[16px] text-center w-full'}>
				<div className={'w-fit mx-auto'}>
					<div className={'font-medium'}>Rattan Grapefruit</div>
					<div className={'text-[#808080]'}>price 48$</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPrice;