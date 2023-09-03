import HookUseState2 from "../Hooks/HookUseState2";

const Home = () => {
    return ( 
        <main className="min-h-screen">
            <h1>Bienvenido a mi Web Site</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloremque fugiat optio. Quas neque id rem debitis! Fuga quod fugit qui ab consequatur labore iste corporis praesentium dolorem? Nostrum, ipsam.</p>
            <div>
                <a href="http://github.com/haonter">Ver GitHub</a>
                <a href="http://instagram.com/didacusdev">Ver Instagram 1</a>
                <a href="http://instagram.com/lexpinonline">Ver Instagram 2</a>
            </div>
            <HookUseState2/>
        </main>
    );
}

export default Home;

