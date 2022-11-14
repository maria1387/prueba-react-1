import Input from "./Input";
import { GiHamburgerMenu} from 'react-icons/gi';

const Navbar = ( {setSearch }) => {

	const inputBuscar = (e) => {
		setSearch(e);
	  };
	return (
		<nav>
            <section className="contenedor nav">
                <div className="logo">

<h4 className="h4">coctel</h4>
                </div>
                <div className="enlaces-header">
                 <Input  onChange= {(e) => {
                inputBuscar(e.target.value)}}/>
                </div>
                <div className="hamburguer">
                    <GiHamburgerMenu className="icon-search"/>
                </div>
            </section>
        </nav>
	)
};

export default Navbar;