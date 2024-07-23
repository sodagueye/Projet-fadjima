// components/PharmacWelcome.js

const Bienvenu = () => {
    return (
      <div className='bg-black text-white text-center   w-full' >
        <div className="flex items-center justify-center">
        <h1 className='text-white text-xl font-bold mt-5'>Bienvenue chez votre pharmacie</h1>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <img src="/cart1.png" alt="" style={{ width: "50px", height: "50px" }} />
          <p className="font-bold">Fadj-Ma</p>
        </div>
      </div>
    );
  };
  
  export default Bienvenu;
  