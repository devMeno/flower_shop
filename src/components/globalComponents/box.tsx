interface Props {
	title: string;
	text: string;
	buttonText?: string;
	preText?: string;
}

const Box = (props:Props) => {
	const {title, text,buttonText,preText} = props
	return (
			<div className={'w-full py-[40px] px-[16px] md:p-[80px] border-[1px] border-black'}>
				{
					preText && <><span className={'font-medium text-[12px] mb-[24px]'}>{preText}</span><br/></>
				}
				<span className={'text-[38px] font-medium mb-[16px]'}>{title}</span><br/>
				<p className={'text-[16px]'}>{text}</p>
				{
					buttonText ? <button
						className={'w-full mt-[64px] md:px-[24px] py-[16px] md:w-auto border-black border-[1px] font-medium text-[16px] hover:bg-black hover:text-white'}>{buttonText}</button> : <></>
				}
			</div>
	);
};

export default Box;