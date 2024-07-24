import React from 'react'
import Bienvenu from '../Bienvenu'
import Button from '../Button'
import Link from 'next/link'
import Input from '../Input'

export default function Inscription() {
    return (
        <div className="flex flex-col  h-screen">
            <Bienvenu />
            <div className='flex flex-col items-center gap-5 mt-10'>
                <div>
                    <div className='flex gap-5'>
                        <Link href="/Component/Authentification/Connexion">
                            <Button className="border border-gray-600  w-64 text-black"> Connectez-vous</Button>
                        </Link>
                        <Button className="border border-gray-600 w-64 bg-[#A7DBF5] "> Inscrivez-vous</Button>

                    </div>
                    <div>
                        <p className='font-bold mt-4'>Vos cordonnees</p>
                    </div>
                    <div className='flex gap-5'>
                        <div className="flex flex-col">
                            <p className="mb-2">Prenom</p>
                            <Input type="text" placeholder="" value="" onChange="" className="w-64 "  />
                        </div>
                        <div className="flex flex-col">
                            <p className="mb-2">Nom</p>
                            <Input
                                type="text" placeholder="" value="" onChange="" className="w-64 " />
                        </div>
                    </div>
                    <p className='mt-4 mb-4'>Date de naissance</p>
                    < Input type="date" value="" placeholder="" onChange className='' />
                    <div className='flex gap-5'>
                        <div className="flex flex-col">
                            <p className="mb-2">E-mail</p>
                            <Input type="text" placeholder="" value="" onChange="" className="w-64 " />
                        </div>
                        <div className="flex flex-col">
                            <p className="mb-2">Mot de passe</p>
                            <Input type="text" placeholder="" value="" onChange="" className="w-64 " />
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <p className="mb-2">Confirmer</p>
                        <Input type="text" placeholder="" value="" onChange="" className="w-full " />
                    </div>
                    <Button className="border border-gray-600 bg-[#A7DBF5] w-full font-bold mt-5">S'inscrire</Button>
                </div>
            </div>
        </div>
    )
}
