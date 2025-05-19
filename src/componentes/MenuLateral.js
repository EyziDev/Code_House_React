import './MenuLateral.css';
import usuario from '../img/usuario.png';
import home from '../img/home.png';
import proj from '../img/proj.png';
import projComp from '../img/projComp.png';

function MenuLateral( {onUsuarioClick} ){
    return(
        <div className='Menu'>
            <header className='Menu-lateral'>
                <button className='Botao Usuario' onClick={onUsuarioClick}>
                    <img src={usuario} alt='botaoUser' className='Icone'/>
                </button>
                <button className='Botao Home' onClick={() => alert("Clicado!")}>
                    <img src={home} alt='botaoHome' className='Icone'/>
                </button>
                <button className='Botao Proj' onClick={()=> alert('Clicado!')}>
                    <img src={proj} alt='botaoProj' className='Icone'/>
                </button>
                <button className='Botao ProjComp' onClick={()=> alert('Clicado')}>
                    <img src={projComp} alt='botaoProjcomp' className='Icone'/>
                </button>
            </header>
        </div>
    );
}

export default MenuLateral