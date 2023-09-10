/*
Se importa NavLink desde react-router-dom para poder trabajar las rutas y aprovechar la propiedad 
isActive para mutar el documento cuando la ruta indicada este activa.
*/
import { NavLink } from "react-router-dom";

// Se importa la imagen del logo que se muestra en el NavBar
import LogoLexpin from "../Media/Lexpin-Logo.png"

const NavBar = () => {

    // const estilos = {
    //     navbar: "flex justify-between items-center w-full h-16 bg-slate-600 text-white px-8",
    //     contenedor: "flex justify-between w-[300px]",
    //     imagen: "w-[150px]",
    //     input: "bg-slate-200 font-semibold px-4 py-2 rounded-full w-[450px] pl-4 text-black placeholder:text-gray-400",
    //     ancla: "text-black font-bold bg-slate-200 px-4 py-2 rounded-md hover:bg-slate-400 hover:text-white",
    // };
    
    // Estos son los estilos de todos los elementos menos de las Anclas (NavLink)
    const estilos = {
        navbar: "flex justify-between items-center w-full h-16 bg-slate-600 text-white px-8",
        contenedor: "flex justify-between w-[500px]",
        imagen: "w-[150px]",
        input: "bg-slate-200 font-semibold px-4 py-2 rounded-full w-[450px] pl-4 text-black placeholder:text-gray-400",
        ancla: "text-black font-bold bg-slate-200 px-4 py-2 rounded-md hover:bg-slate-400 hover:text-white",
    };

    // Aqui establecemos los estimos de las anclas (NavLink) para que se muestren al ser seleccionadas 
    let cambiarEstilos = ({isActive})=>({
        color: (isActive) ? "rgba(136, 179, 191, 1)" : "rgba(176, 222, 235, 1)",
        backgroundColor: (isActive) ? "rgba(25, 62, 99, 0.8)" : "rgba(25, 62, 99, 0.3)",
        paddingInline: "7px",
        paddingBlock: "3px",
        borderRadius: "10px",
    });

    return ( 
        // Navbar Sin usar NavLink
        // <nav className={estilos.navbar}>
        //     <img className={estilos.imagen} src={LogoLexpin} alt="Logo" />
        //     <input className={estilos.input} type="text" placeholder="Buscar"/>
        //     <div className={estilos.contenedor}>
        //         <a className={estilos.ancla} href="/">Inicio</a>
        //         <a className={estilos.ancla} href="/favoritos">Favoritos</a>
        //         <a className={estilos.ancla} href="/perfil">Perfil</a>
        //     </div>
        // </nav>



        // El mismo Navbar pero Usando NavLink
        <nav className={estilos.navbar}>
            <img className={estilos.imagen} src={LogoLexpin} alt="Logo" />
            <input className={estilos.input} type="text" placeholder="Buscar" />
            <div className={estilos.contenedor}>
                <NavLink style={cambiarEstilos} to="/">Inicio</NavLink>
                <NavLink style={cambiarEstilos} to="/favoritos">Favoritos</NavLink>
                <NavLink style={cambiarEstilos} to="/perfil">Perfil</NavLink>    
                <NavLink style={cambiarEstilos} to="/hook-use_effect">useEffect</NavLink>    
                <NavLink style={cambiarEstilos} to="/apisinkeyfetch">API SKF</NavLink>    
                <NavLink style={cambiarEstilos} to="/apisinkeyaxios">API SKA</NavLink>    
            </div>
        </nav>
    );
}

export default NavBar;