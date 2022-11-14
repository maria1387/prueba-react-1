import Button from "./Button";

const Select = ({prev,next,onPrevious,onNext}) => {

	const handlePrevious=()=>{
		onPrevious()
	
	  }
	
	  const handleNext=()=>{
		onNext()
	  }
	return (
		<div>
			<ul>
				{ prev ?
				<li>
					<Button  Children='Previous' onClick={handlePrevious}/>
				</li>
:null 
				}
				{
				 next?	
				 <li>
				 <Button  Children='Next' onClick={handleNext}/>
			 </li>
			 :null
				}
			</ul>
		</div>
	)
};

export default Select;
