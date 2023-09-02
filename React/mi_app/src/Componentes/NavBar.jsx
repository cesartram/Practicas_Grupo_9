import LogoLexpin from "../Media/Lexpin-Logo.png"

const NavBar = () => {

    const estilos = {
        navbar: "flex justify-between items-center w-full h-16 bg-slate-600 text-white px-8",
        contenedor: "flex justify-between w-[300px]",
        imagen: "w-[150px]",
        input: "bg-slate-200 font-semibold px-4 py-2 rounded-full w-[450px] pl-4 text-black placeholder:text-gray-400",
        ancla: "text-black font-bold bg-slate-200 px-4 py-2 rounded-md hover:bg-slate-400 hover:text-white",
    };

    return ( 
        <nav className={estilos.navbar}>
            <img className={estilos.imagen} src={LogoLexpin} alt="Logo" />
            <input className={estilos.input} type="text" placeholder="Buscar"/>
            <div className={estilos.contenedor}>
                <a className={estilos.ancla} href="/">Inicio</a>
                <a className={estilos.ancla} href="/favoritos">Favoritos</a>
                <a className={estilos.ancla} href="/perfil">Perfil</a>
            </div>
        </nav>
    );
}

export default NavBar;