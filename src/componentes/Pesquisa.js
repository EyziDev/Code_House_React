import './Pesquisa.css';
import botaoPesquisa from '../img/search.png';

function Pesquisa(){
    return(
        <div className='cabeca'>
            <button className='BotaoP PesquisaBotao' onClick={()=> alert('Clicado!')}>
                    <img src={botaoPesquisa} alt="botaopesquisa" className="IconePesquisa" ></img>
                </button>
            <header className='Cabeca-topo'>
                <input className='Pesquisa-campo' type='text' placeholder='Pesquisar...'></input>
            </header>
        </div>
    );
}

export default Pesquisa