import {useNavigate} from "react-router-dom";
import RightIcon from '../../../../public/images/icons/arrow-right.png'

interface Props {
	flex: string;
	image: string;
}

const Product = (props:Props) => {
	const {flex, image} = props;
	const navigate = useNavigate();

	const viewProduct = ()=>{
		navigate('/product');
	}

	return (
		<div className={flex}>
			<div className={'w-1/2 border-black border-[1px]'}>
				<div className={'h-1/4'}></div>
				<div className={'flex items-center h-2/4'}>
					<div className={'mx-auto text-center'}>
						<span className={'text-[26px] md:text-[38px] font-semibold'}>Fresh Flowers</span>
					</div>
				</div>
				<div className={'h-1/4 relative'}>
					<div className={'absolute bottom-[15px] w-full'}>
						<div className={'flex w-fit mx-auto items-center'}>
							<a href="" onClick={viewProduct}><span className={'font-semibold text-[16px]'}>Shop now</span></a>
							<img src={RightIcon} alt="" className={'w-[18px] h-[12px] ml-[10px]'}/>
						</div>
					</div>
				</div>
			</div>
			<div className={'w-1/2 border-black border-[1px]'}>
				<img src={image} alt="" className={'size-full'}/>
			</div>
		</div>
	);
};

export default Product;