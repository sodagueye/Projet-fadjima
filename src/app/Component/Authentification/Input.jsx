// components/Input.js

const Input = ({ type, placeholder, value, onChange }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-style" // Vous pouvez personnaliser cette classe CSS
      />
    );
  };
  
  export default Input;



  // pages/ExamplePage.js (ou tout autre fichier où vous voulez utiliser l'input)

import React, { useState } from 'react';
import Input from '../components/Input';

// const ExamplePage = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <div>
//       <h1>Exemple d'utilisation de l'Input</h1>
//       <Input
//         type="text"
//         placeholder="Entrez quelque chose..."
//         value={inputValue}
//         onChange={handleInputChange}
//       />
//       <p>Valeur de l'input : {inputValue}</p>
//     </div>
//   );
// };

// export default ExamplePage;

  