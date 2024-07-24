import React from 'react';
import Button from '../Button';
import Bienvenu from '../Bienvenu';
import Link from 'next/link';
import Input from '../Input';

const Connexion = () => {
    return (
        <div className="flex flex-col  h-screen">
            <Bienvenu />

            <div className='flex flex-col items-center gap-5 mt-10'>
                <div>
                    <div className='flex gap-5'>
                        <Button className="bg-[#A7DBF5] border border-gray-600 text-black w-48">Connectez-vous</Button>
                        <Link href="/Component/Authentification/Inscription">
                            <Button className="border border-gray-600 w-44"> Inscrivez-vous</Button>
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        <p className="mt-4 mb-3">Adresse e-mail</p>
                        <Input type="text" placeholder="" value="" onChange="" className="w-96 " />
                    </div>
                    <div className="flex flex-col">
                        <p className="mt-4 mb-3">Mot de passe</p>
                        <Input type="text" placeholder="" value="" onChange="" className="w-96 " />
                    </div>
                    <div className='flex justify-end mb-5 mt-3' >
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
