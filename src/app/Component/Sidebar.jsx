
import React from 'react';
import Image from 'next/image';
import { PiCalendarPlusBold } from "react-icons/pi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
// import { CgMoreVerticalAlt } from "react-icons/cg";
import Link from 'next/link';

export default function Sidebar() {
    return (
        <div>
            <div className='w-64 bg-[#283342] h-screen relative font-poppins'>
                <div className='flex gap-4 p-4 bg-black'>
                    <div className="relative">
                        <img src="/cart1.png" alt="Cart Image" style={{width:"39px", height:"39px"}}  layout="fixed" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div>
                        <h1 className="text-2xl text-white font-bold font-poppins text-lg">Fadj-Ma</h1>
                    </div>
           

                </div>
                <div className='flex gap-5  items-center'>
                    <div className="relative rounded-full rounded-full mt-5 ms-2">
                        <img src="/cart.jpeg" alt="Image du panier" layout="fill" style={{width:"42px", height:"42px"}} objectFit="cover" className="rounded-full" />
                    </div>
                    <div className='mt-2'>
                        <p className="text-white mt-2 text-sm'">Modou Fall</p>
                        <span className='text-yellow-500  text-xs'>Administrateur</span>
                    </div>
                    {/*  */}
                </div>

                <div className='hover:bg-[#009099] text-white flex ms-3  mt-5 gap-2 p-3 text-sm'>
                   <MdOutlineSpaceDashboard className='mt-1' /> 
                    <Link href="/Component/Home">
                        Tableau de bord
                    </Link>
                </div>

                <div className='hover:bg-[#009099] text-white flex ms-3  mt-5 gap-2 p-3 text-sm'>
                    <PiCalendarPlusBold className='mt-1' />
                    <Link href="/Component/Medicament">Médicaments</Link>
                </div>

                {/* Footer (pied de page) */}
                <footer className="absolute bottom-0 left-0 w-full text-center bg-black text-xs text-gray-400 py-2">
                    &copy; Propulse par Red Team  @ 2024version 112
                </footer>
            </div>

        </div>
    );
}



