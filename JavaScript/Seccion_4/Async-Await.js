/* 
    Async-Await es en escencia lo mismo que las promesas, azucar sintactica, es decir es una manera
    mas facil de interpretar las promesas, sin dejar de ser un proceso asincronico.
*/


// Ejemplo 1

//Variable que contiene datos (Simula un servidor)
const misDatos = [
    {
        nombre:"Diego",
        apellido:"Rodriguez",
        sexo:"Hombre",
        imagen: "https://avatars.githubusercontent.com/u/101908524?v=4"
    },{
        nombre:"Genesis",
        apellido:"Piñango",
        sexo:"Mujer",
        imagen: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/845.jpg"
    },{
        nombre:"Ali",
        apellido:"Guerrero",
        sexo:"Hombre",
        imagen: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1020.jpg"
    },{
        nombre:"Luis",
        apellido:"Zambrano",
        sexo:"Hombre",
        imagen: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg"
    },{
        nombre:"Eduardo",
        apellido:"Avila",
        sexo:"Hombre",
        imagen: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1022.jpg"
    },
    {
        nombre:"Brayan",
        apellido:"Gamboa",
        sexo:"Hombre",
        imagen: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1021.jpg"
    },
    {
        nombre:"Semiramis",
        apellido:"Hernandez",
        sexo:"Mujer",
        imagen: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/710.jpg"
    }
];