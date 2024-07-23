import React from 'react'
import Bienvenu from '../Bienvenu'
import Button from '../Button'
import Link from 'next/link'

export default function Inscription() {
    return (
        <div className="flex flex-col  h-screen">
            <Bienvenu />

            <div className='flex flex-col items-center gap-5 mt-10'>
                <div>
                    <div className='flex gap-5'>
                        <Button className="border border-gray-600  w-44">
                            Connectez-vous
                        </Button>
                        <Button className="border border-gray-600 w-44 bg-[#A7DBF5] ">
                            Inscrivez-vous
                        </Button>
                    </div>
                    <div>
                        <p className='font-bold mt-4'>Vos cordonnees</p>
                    </div>
                    <div className='flex gap-5  mt-2'>
                        <input type="radio" id="Homme" name="colors" className="cursor-pointer" />
                        <label htmlFor="red" className="flex items-center cursor-pointer">
                            <span>Homme</span>
                        </label>
                        <input type="radio" id="Femme" name="colors" className=" cursor-pointer bg-transparent " />
                        <label htmlFor="Femme" className="flex items-center cursor-pointer">
                            <span>Femme</span>
                        </label>
                    </div>
                    <div className='flex gap-5'>
                        <div className="flex flex-col">
                            <p className="mb-2">Prenom</p>
                            <input type="text" className="w-44 border border-gray-400 rounded-lg px-3 py-2 bg-transparent" />
                        </div>
                        <div className="flex flex-col">
                            <p className="mb-2">Nom</p>
                            <input type="text" className="w-44 border border-gray-400 rounded-lg px-3 py-2 bg-transparent" />
                        </div>
                    </div>
                    <p className='mt-4 mb-4'>Date de naissance</p>
                    <input type="date" className='bg-transparent border border-gray-400'/>
                    <div className='flex gap-5'>
                        <div className="flex flex-col">
                            <p className="mb-2">E-mail</p>
                            <input type="text" className="w-44 border border-gray-400 rounded-lg px-3 py-2 bg-transparent" />
                        </div>
                        <div className="flex flex-col">
                            <p className="mb-2">Mot de passe</p>
                            <input type="text" className="w-44 border border-gray-400 rounded-lg px-3 py-2 bg-transparent" />
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <p className="mb-2">Confirmer</p>
                        <input type="text" className="w-96 border border-gray-400 rounded-lg px-3 py-2 bg-transparent mb-5" />
                    </div>


                    <Button className="border border-gray-600 bg-[#A7DBF5] w-96 font-bold">
                        S'inscrire
                    </Button>
                </div>
            </div>
        </div>
    )
}
