'use client'
import React, { useState } from 'react';
import { LuPlus } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

export default function Medicament() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div className='pt-5 '>
            <div className='flex'>
                <Sidebar />
                <div className='w-full'>
                    <Navbar />
                    <div className='flex justify-between m-5'>
                        <div>
                            <div className='mt-5'>
                                <h1 className='font-bold font-poppins'>médicaments (298)</h1>
                                <p>Liste des médicaments disponibles à la vente.</p>
                            </div>
                            <div className=''>
                                <FaSearch className="" style={{ position: "relative", left: "330px", top: "30px" }} />
                                <input type="" value="" placeholder=' Recherchez dans l inventaire des medicaments '
                                    className='bg-slate-200 text-sm placeholder-black ' style={{ width: "350px", height: "38px" }} />
                            </div>
                        </div>
                        <div className=''>
                            <div className="mb-3">
                                <LuPlus className="" style={{ position: "relative", left: "17px", top: "35px" }} />
                                <button
                                    type="button"
                                    onClick={openModal}
                                    className="border-0 border-gray-300 bg-white"
                                    style={{ width: "230px", height: "50px" }}
                                >
                                    Nouveau médicament
                                </button>
                            </div>
                            <div className="">
                                <select name="" id="" className='bg-gray-200 ' style={{ width: "230px", height: "50px" }}>
                                    <option value=""> Selectionnez un groupe</option>
                                    <option value="">Antibiotiques </option>
                                    <option value="">Antihypertenseurs </option>
                                    <option value="">Diabétes </option>
                                    <option value="">Maladies Cardiovasculairs </option>
                                    <option value="">Produits à base de plantes </option>
                                    <option value="">Crèmes et pomades cutanées</option>
                                    <option value="">Gels et sprays anti-inflammatoires </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Modal */}
                    {modalOpen && (
                        <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-75 flex items-center justify-center">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">

                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Obligatoire</h3>
                                            <p>Donnez plus de détails possible</p>
                                            <div className="mt-2">
                                                {/* <p className="text-sm text-gray-500">Contenu du modal ici...</p> */}
                                                <div>
                                                    <input type="text" className="placeholder-black mb-3" placeholder='  Nom du medicament' style={{ border: "1px solid gray", width: "100%", height: "35px" }} />
                                                    <input type="text" className="placeholder-black mb-3" placeholder='  ID du medicament' style={{ border: "1px solid gray", width: "100%", height: "35px" }} />
                                                    <input type="text" className="placeholder-black mb-3" placeholder='  Nom de groupe' style={{ border: "1px solid gray", width: "100%", height: "35px" }} />
                                                    <input type="text" className="placeholder-black mb-3" placeholder='  Stock en quantite' style={{ border: "1px solid gray", width: "100%", height: "35px" }} />

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-around'>

                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className=" rounded-md" style={{ border: "1px solid gray", width: "200px ", padding: "8px" }}
                                        >
                                            Fermer
                                        </button>
                                    </div >
                                    <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                                        <button type='button' className=' rounded-md bg-gray-200 ' style={{ border: "1px solid gray", width: "200px ", padding: "8px" }}>Enrigistrer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Fin du modal */}

                    <div className="flex justify-center mt-5">
                        <table className="table-auto m-5" style={{ width: "100%" }}>
                            <thead>
                                <tr className="bg-white">
                                    <th className="px-4 py-2">Nom du médicament</th>
                                    <th className="px-4 py-2">ID du médicament</th>
                                    <th className="px-4 py-2">Nom de groupe</th>
                                    <th className="px-4 py-2">Stock en quantité</th>
                                    <th className="px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            {/* Contenu du tableau */}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
