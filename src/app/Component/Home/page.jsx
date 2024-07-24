import React from 'react';
// import { BiShieldPlus } from "react-icons/bi";
// import { BsBagPlus } from "react-icons/bs";
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Image from 'next/image';
import Card1 from './Card1';
import Carte2 from './carte2';
import Carteclient from './Carteclient';

export default function TableauBord() {
    return (
        <div className="font-poppins">
            <div className='flex'>
                <Sidebar />
                <div className='w-full'>
                    <Navbar />
                    <div className=''>
                        <div className='flex justify-between mb-5 items-center '>
                            <div className='pt-10'>
                                <h1 className='font-bold  ms-5 font-poppins text-base ms-20'>Tableau de bord</h1>
                                <p className=' ms-5 font-poppins text-sm ms-20'>Un aperçu rapide des données de votre pharmacie</p>
                            </div>
                            <button className='bg-white border-2 border-gray-400 p-3  ps-5  me-20'>Telecharger le rapport</button>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-4 gap-10'>
                            <div>

                                <div className="bg-[#01A768]  text-center items-center " style={{ width: "212px", border: "2px solid #01A768" }}>
                                    <Card1
                                        title="Bien"
                                        text="Statut de l'inventaire"
                                        description="Affiche le rapport détaillé"
                                        imageUrl="/health1.png"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#FED600]  text-center items-center   " style={{ width: "212px", border: "2px solid #FED600" }}>
                                    <Card1
                                        title="4.800.432FCFA"
                                        text="Revenu: janvier 2022"
                                        description="Affiche le rapport détaillé"
                                        imageUrl="/payments1.png"
                                    />
                                </div>
                            </div>
                            <div>

                                <div className="bg-[#03A9F5]  border-2 border-sky-300 text-center items-center   " style={{ width: "212px", }}>
                                    <Card1
                                        title="298"
                                        text="Médicaments disponibles"
                                        description="Visite l'inventaire"
                                        imageUrl="/payments1.png"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#F0483E]  border-2 border-rose-400 text-center items-center   " style={{ width: "212px", }}>
                                    <Card1
                                        title="01"
                                        text="Pénurie de médicaments"
                                        description="Résoudre maintenant"
                                        imageUrl="/warning.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <Carteclient/>
                </div>
            </div>
        </div>
    );
}
