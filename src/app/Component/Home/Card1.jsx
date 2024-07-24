// components/Card.js

const Card1 = ({ title, description, imageUrl ,text }) => {
    return (
       <div className="">
        {/* Carte principale */}
        <div className=" bg-white flex items-center justify-center  p-4 " style={{ width: "212px", height: "125px" }}>
          <div className="flex flex-col items-center justify-center">
             <img src={imageUrl} className="text-[#01A768] w-10 h-10 mb-2" alt="Icon" /> 
            <p className="text-center font-bold text-xl">{title}</p>
            <p className="text-center text-sm">{text}</p>
           
          </div>
        </div>
  
         {/* barre inferieur  */}
        <div className="  text-center py-2 rounded-b-lg  ">
          <span className="text-black font-normal text-sm">{description}</span>
        </div>
       </div>
    );
  };
  
  export default Card1;

