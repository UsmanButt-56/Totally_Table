import React from 'react';
import Button from '../../../Components/Button/Button';
function Edit({name , btn_name}) {
    return (
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center mb-5">
            <div className='font-normal text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] leading-0 md:leading-[108px] font-palanquin-dark opacity-100 text-white'>
                <span>{name}</span>
            </div>
            <div>
                <Button name={btn_name} />
            </div>
        </div>
    )
}

export default Edit;