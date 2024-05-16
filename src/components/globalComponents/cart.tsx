import { IoClose } from "react-icons/io5";
import Facebook from '../../../public/images/icons/socialMedias/facebook.png'
import Pinterest from '../../../public/images/icons/socialMedias/pinterest.png'
import Instagram from '../../../public/images/icons/socialMedias/instagram.png'
import Twitter from '../../../public/images/icons/socialMedias/twitter.png'
import Telegram from '../../../public/images/icons/socialMedias/telegram.png'

const Cart = () => {
	return (
		<div className={'w-full md:flex'}>
			<div className={'hidden xl:block w-1/2 blur-[7px] bg-transparent'}></div>
			<div className={'w-full xl:w-1/2 relative h-[100vh] font-medium text-[21px]'}>
				<div className={'py-[8px] px-[14px] md:py-[12px] md:px-[16px] border-black border-[1px]'}><IoClose className={'size-[24px]'}/></div>
				<div className={'p-[24px] border-black border-[1px]'}>Sign in</div>
				<div className={'p-[24px] border-black border-[1px]'}>Shop</div>
				<div className={'p-[24px] border-black border-[1px]'}>Service</div>
				<div className={'p-[24px] border-black border-[1px]'}>Contact</div>
				<div className={'p-[24px] border-black border-[1px]'}>About us</div>
				<div className={'p-[24px] border-black border-[1px]'}>
					<span className={'text-[16px]'}>Shipping & returns</span><br/>
					<span className={'text-[16px]'}>Terms & conditions</span><br/>
					<span className={'text-[16px]'}>Privacy policy</span>
				</div>
				<div className={'border-black border-[1px]'}>
					<div className={'w-full flex justify-between items-center p-[24px]'}>
						<img src={Pinterest} alt=""
							 className={'w-[24px] h-[24px]'}/>
						<img src={Instagram} alt=""
							 className={'w-[24px] h-[24px]'}/>
						<img src={Facebook} alt=""
							 className={'w-[24px] h-[24px]'}/>
						<img src={Telegram} alt=""
							 className={'w-[24px] h-[24px]'}/>
						<img src={Twitter} alt=""
							 className={'w-[24px] h-[24px]'}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;