import {FC} from 'react';

interface Props {
    title: string;
}
const SectionTitle:FC<Props> = (props) => {
    const {title} = props;
    return (

        <div className={'w-full py-[40px] px-[16px] md:p-[80px] border-[1px] xl:border-l-[1px] xl:border-t-[1px] xl:border-r-[1px] border-black font-semibold text-[34px] md:text-[50px]'}>{title}</div>

    );
};

export default SectionTitle;