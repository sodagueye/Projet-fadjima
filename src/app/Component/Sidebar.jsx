
import React from 'react';
import Image from 'next/image';
import { PiCalendarPlusBold } from "react-icons/pi";
// import { CgMoreVerticalAlt } from "react-icons/cg";
import Link from 'next/link';

export default function Sidebar() {
    return (
        <div>
            <div className='w-64 bg-[#283342] h-screen relative'>
                <div className='flex gap-4 p-4 bg-black'>
                    <div className="relative">
                        <Image src="/cart1.png" alt="Cart Image" width={40} height={40} layout="fixed" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div>
                        <h1 className="text-2xl text-white font-bold">FADJI-MA</h1>
                    </div>
                    {/* <CgMoreVerticalAlt className='ext-white'/> */}

                </div>
                <div className='flex gap-2 items-center'>
                    <div className="relative rounded-full w-20 h-20 mt-5">
                        <Image src="/cart.jpeg" alt="Image du panier" layout="fill" objectFit="cover" className="rounded-full" />
                    </div>
                    <div>
                        <p className="text-white px-4 py-2">Modou Fall</p>
                        <span className='text-yellow-500'>Administrateur</span>
                    </div>
                    {/*  */}
                </div>

                <div className='hover:bg-[#009099] text-white flex ms-3  mt-5 gap-2 p-3'>
                    {/* <MdOutlineSpaceDashboard className='mt-1' /> */}
                    <Link href="/Component/Home">
                        Tableau de bord
                    </Link>
                </div>

                <div className='hover:bg-[#009099] text-white flex ms-3  mt-5 gap-2 p-3'>
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



