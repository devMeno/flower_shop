

const Product = () => {
	return (
		<div>
			<div className={'xl:flex'}>
				<div className={'xl:w-1/2 border-[1px] border-black'}>
					<img src="/public/images/pictures/product/productPicture.png" alt="" className={'w-full'}/>
				</div>
				<div className={'xl:w-1/2 p-[40px]'}>
					<span className={'font-medium text-[14px] mb-[24px]'}>Fresh Flowers / <span className={'text-[#808080]'}>Rosy Delight</span></span><br/>
					<span className={'font-medium text-[38px]'}>Rosy Delight - $100</span><br/>
					<p>Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even</p>
					<div className={'my-[24px] flex items-center'}>
						<span className={'font-medium text-[18px] mr-[20px]'}>Quantity</span>
						<div className={'flex border-black border-[1px] h-[44px]'}>
							<button className={'size-[44px] border-r-[1px] border-black text-center flex items-center'}><span className={'text-[24px] mx-auto'}>-</span></button>
							<div className={'border-r-[1px] border-black w-[58px] text-center flex items-center'}><span className={'text-[18px] mx-auto'}>1</span></div>
							<button className={'size-[44px] text-center flex items-center'}><span className={'text-[24px] mx-auto'}>+</span></button>
						</div>
					</div>
					<span className={'font-medium text-[18px]'}>Excellent Combination with:</span>
				</div>
			</div>
		</div>
	);
};

export default Product;