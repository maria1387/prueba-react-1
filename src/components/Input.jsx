import { BiSearchAlt } from 'react-icons/bi';

const Input = ({onChange}) => {

	

	return (
		<div >
			<button className='button'>
			<input placeholder="Buscar coctel " type="text" onChange={onChange} /><BiSearchAlt className='icon'/></button>
			
  
			

	
		</div>
	)
};
export default Input;
