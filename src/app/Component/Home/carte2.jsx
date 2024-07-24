import React from 'react'

const Carte2 = ({ title, text, description2, description3, description4, description5 }) => {
    return (
        <div className="">
           <div className=" bg-white  border-2 border-gray-400 p-4 " style={{ width: "466px", height: "140px" }}>
                <div className="flex   justify-between ">
                    <p className=" text-xs font-semibold">{title}</p>
                    <p className=" text-xs">{text}</p>
                </div>
                <hr style={{ borderColor: "gray", borderWidth: "1px", borderStyle: "solid",width:"100%" }} className='mt-2' />
                <div className='flex gap-4 mt-5 p-2 justify-between'>
                    <div>
                        <p className='font-bold text-xl'>{description2}</p>
                        <p className='text-sm font-medium'>{description3}</p>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>{description4}</p>
                        <p className='text-sm font-medium'>{description5}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carte2;
