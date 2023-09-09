const CartaPersonaje = ({propiedad1, propiedad2, propiedad3, propiedad4, propiedad5}) => {
    return ( 
        <div id={propiedad1} key={propiedad1} >
            <img src={propiedad2} alt={propiedad3} />
            <p className="text-center font-semibold">{propiedad3}</p>
            <p className="text-center font-semibold">{propiedad4}</p>
            <p className="text-center font-semibold">{propiedad5}</p>
        </div>
    );
}

export default CartaPersonaje;
