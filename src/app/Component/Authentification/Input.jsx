
const Input = ({ type, placeholder, value, onChange }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-400 rounded-lg px-3 py-2 bg-transparent" 
      />
    );
  };
  
  export default Input;



  