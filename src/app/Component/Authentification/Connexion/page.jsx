import React from 'react';
import Button from '../Button';
import Bienvenu from '../Bienvenu';
import Link from 'next/link';

const Connexion = () => {
    return (
        <div className="flex flex-col  h-screen">
            <Bienvenu />

            <div className='flex flex-col items-center gap-5 mt-10'>
                <div>
                    <div className='flex gap-5'>
                        <Button className="bg-[#A7DBF5] border border-gray-600 text-white w-48">
                            Connectez-vous
                        </Button>
                        <Button className="border border-gray-600 w-44">
                            Inscrivez-vous
                        </Button>
                    </div>
                    <div className="flex flex-col">
                        <p className="mb-2">Adresse e-mail</p>
                        <input type="text" className="w-96 border border-gray-400 rounded-lg px-3 py-2 bg-transparent" />
                    </div>
                    <div className="flex flex-col">
                        <p className="mb-2">Mot de passe</p>
                        <input type="text" className="w-96 border border-gray-400 rounded-lg px-3 py-2 bg-transparent" />
                    </div>
                    <div className='flex justify-end mb-5' >
                        <Link href="" className='float-start'>Mot de passe oublie</Link>
                    </div>
                    <Button className="border border-gray-600 bg-[#A7DBF5] w-96">
                        Se connectez
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Connexion;
