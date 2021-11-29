import '../css/componentes.css';
//import imagenLogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre)=>{

    console.log('Creando etiqueta h1');

    const h1=document.createElement('h1');
    h1.innerText=`Hola ${nombre} bienvenido`;
    document.body.append( h1 );

    //const imagen=document.createElement('img');
    //imagen.src=imagenLogo;
    //document.body.append(imagen);

}