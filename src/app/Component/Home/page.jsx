import React from 'react';
// import { BiShieldPlus } from "react-icons/bi";
// import { BsBagPlus } from "react-icons/bs";
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Image from 'next/image';

export default function TableauBord() {
    return (
        <div className="">
            <div className='flex'>
            <Sidebar />
            <div className='w-full'>
            <Navbar />
            <div className=''>
                <div className='flex justify-between mb-5 items-center'>
                    <div className='ms-5 pt-10'>
                        <h1 className='font-bold  ms-5'>Tableau de bord</h1>
                        <p className=' ms-5'>Un aperçu rapide des données de votre pharmacie</p>
                    </div>
                    <button className='bg-white border-2 border-gray-400 p-3  ps-5 '>Telecharger le rapport</button>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-4 gap-10'>
                    <div>
                        <div className="border-2 border-green-600 bg-white flex items-center justify-center" style={{ width: "212px", height: "125px" }}>
                            <div className='flex flex-col items-center justify-center'>
                               <img src="/health1.png" className='text-[#01A768]' size={37} />  
                                <p className='text-center'>Bien</p>
                                <p className="font-bold">Statut de l'inventaire</p>
                            </div>
                        </div>
                        <div className='bg-[#01A768] opacity-50 text-center items-center ' style={{ width: "212px" }}>
                            <span>Affiche le rapport détaillé</span>
                        </div>
                    </div>
                    <div>
                        <div className="border-2 border-yellow-300 bg-white flex items-center justify-center" style={{ width: "212px", height: "125px" }}>
                            <div className='flex flex-col items-center justify-center'>
                                 <img src="/payments1.png" className='text-[#FED600]' size={37} />  
                                <p className='text-center font-bold'>4.800.432FCFA</p>
                                <p>Revenu: janvier 2022</p>
                            </div>
                        </div>
                        <div className='bg-[#FED600] opacity-50 text-center items-center' style={{ width: "212px" }}>
                            <span>Affiche le rapport détaillé</span>
                        </div>
                    </div>
                    <div>
                        <div className="border-2 border-sky-300 bg-white flex items-center justify-center" style={{ width: "212px", height: "125px" }}>
                            <div className='flex flex-col items-center justify-center'>
                                  <img src="/medica2.png" className='text-[#03A9F5]' size={37} /> 
                                <p className='text-center font-bold'>298</p>
                                <p className='text-center'>Médicaments disponibles</p>
                            </div>
                        </div>
                        <div className='bg-[#03A9F5] opacity-50 text-center items-center' style={{ width: "212px" }}>
                            <span className='text-center items-center'>Visite l'inventaire</span>
                        </div>
                    </div>
                    <div>
                        <div className="border-2 border-rose-400 bg-white flex items-center justify-center" style={{ width: "212px", height: "125px" }}>
                            <div className='flex flex-col items-center justify-center'>
                                 <img src="/warning.png" className='text-[#F0483E]' size={37} />  
                                <p className='text-center font-bold'>01</p>
                                <p>Pénurie de médicaments</p>
                            </div>
                        </div>
                        <div className='bg-[#F0483E] opacity-50 text-center items-center
                        ' style={{ width: "212px" }}>
                            <span className=''>Résoudre maintenant</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mt-5 items-center justify-center gap-10'>
                <div className='border border-gray-300 bg-white' style={{ width: "466px", height: "140px" }}>
                    <div className='flex justify-between mt-3 p-2'>
                        <p>Inventaire</p>
                        <p>Allez dans Configuration</p>
                    </div>
                    <hr style={{ borderColor: "gray", borderWidth: "1px", borderStyle: "solid" }} className='mt-2' />
                    <div className='flex gap-4 mt-5 p-2'>
                        <div>
                            <p className='font-bold'>298</p>
                            <p style={{ fontSize: "15px" }}>Nombre total de médicaments</p>
                        </div>
                        <div>
                            <p className='font-bold'>24</p>
                            <p style={{ fontSize: "15px" }}>Groupes de médecine</p>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-300 bg-white' style={{ width: "466px", height: "140px" }}>
                    <div className='flex justify-between mt-3 p-2'>
                        <p>Rapport rapide</p>
                        <p>Janvier 2022</p>
                    </div>
                    <hr style={{ borderColor: "gray", borderWidth: "1px", borderStyle: "solid" }} className='mt-2' />
                    <div className='flex gap-4 mt-5 p-2'>
                        <div>
                            <p className='font-bold'>70856</p>
                            <p style={{ fontSize: "15px" }}>Quantité de médicaments</p>
                        </div>
                        <div>
                            <p className='font-bold'>5288</p>
                            <p style={{ fontSize: "15px" }}>Factures générées</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mt-5 items-center justify-center gap-10'>
                <div className='border border-gray-300 bg-white' style={{ width: "466px", height: "140px" }}>
                    <div className='flex justify-between mt-3 p-2'>
                        <p className='font-bold'>Ma pharmacie</p>
                        <p>Accéder à la gestion des utilisateurs</p>
                    </div>
                    <hr style={{ borderColor: "gray", borderWidth: "1px", borderStyle: "solid" }} className='mt-2' />
                    <div className='flex gap-4 mt-5 p-2'>
                        <div>
                            <p className='font-bold'>04</p>
                            <p style={{ fontSize: "15px" }}>Nombre total de fournisseurs</p>
                        </div>
                        <div>
                            <p className='font-bold'>05</p>
                            <p style={{ fontSize: "15px" }}>Nombre total d'utilisateurs</p>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-300 bg-white' style={{ width: "466px", height: "140px" }}>
                    <div className='flex justify-between mt-3 p-2'>
                        <p className='font-bold'>Clients</p>
                        <p>Aller à la page Clients</p>
                    </div>
                    <hr style={{ borderColor: "gray", borderWidth: "1px", borderStyle: "solid" }} className='mt-2' />
                    <div className='flex gap-20 mt-5 p-2'>
                        <div>
                            <p className='font-bold'>845</p>
                            <p style={{ fontSize: "15px" }}>Nombre total des clients</p>
                        </div>
                        <div>
                            <p className='font-bold'>Adalimumab</p>
                            <p style={{ fontSize: "15px" }}>Article fréquemment</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>




    );
}
