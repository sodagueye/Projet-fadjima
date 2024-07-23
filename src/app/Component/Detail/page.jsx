import React from 'react'

export default function page() {
    return (
        <div className=''>
            <div className='flex justify-center items-center mt-5'>
                <div>
                    <div >
                        <h1 className='font-bold mb-5'>Tous les detail</h1>
                    </div>
                    <div className='flex gap-20'>
                        <div>
                            <img src="/carte.png" alt="" style={{ width: "274px", height: "308px" }} />
                        </div>
                        <div>
                            < p className='font-bold'>Augmentin 625 Duo compprimé</p>
                            <p className='font-bold mb-2'>Composition </p>
                            <p className='mb-2'>Amoycillin-500MG + Clavulanic Acid-122MG</p>
                            <p className='font-bold mb-2'>Fabriquant/comerçant
                            </p>
                            <p className='mb-2'>GlaxoSmithKlin Pharmaceutical ldt</p>
                            <p className='font-bold mb-2'>Type de consommation
                            </p>
                            <p className='mb-2'>Oral </p>
                            <p className='font-bold mb-2'>Date d’expiration
                            </p>
                            <p>25 Janvier</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-around ms-10 pt-10'>
            <div className=''>
                <h1 className='font-bold'>Description : </h1>
                <p>Augmentin 625 DuoComprimé est utilisé pour traiter les infections bactériennes du corps qui affectent <br></br> 
                la peau, les tissus mous, les poumons, les oreilles, les voies urinaires et les sinus nasaux. Il convient  <br />de mentionner que les infections virales comme la grippe et le rhume ne sont pas traitées par ce <br />médicament.</p>
            </div>
            </div>

        </div>
    )
}
