import Logo from "../Media/Lexpin-Logo.png";

const Footer = () => {
    
    const estilos = {
        contenedor: "flex justify-evenly items-center bg-slate-600",
        imagen: "w-[150px]",
        div: "flex flex-col items-center",
        anclas: "text-white font-semibold",
    }
    
    return ( 
        <footer className={estilos.contenedor}>
            <div className={estilos.div}>
                <a className={estilos.anclas} href="/">Inicio</a>
                <a className={estilos.anclas} href="/favoritos">Favoritos</a>
                <a className={estilos.anclas} href="/perfil">Perfil</a>
            </div>
            <img className={estilos.imagen} src={Logo} alt="Logo"/>
        </footer>
    );
}

export default Footer;