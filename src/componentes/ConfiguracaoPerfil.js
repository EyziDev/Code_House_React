import './ConfiguracaoPerfil.css';
import { useState } from 'react';
import Seta from '../img/setaDireita.png';

function ConfiguracaoPerfil({ onVoltar }) {
    const [imagemPreview, setImagemPreview] = useState(null);
    const [nomeUsuario, setNomeUsuario] = useState('');

    const handleImagemChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const imagemURL = URL.createObjectURL(file);
          setImagemPreview(imagemURL);
        }
      };

    const handleNomeChange = (event) => {
        setNomeUsuario(event.target.value);
    };

    const handleSalvar = () => {
        console.log('Nome salvo:', nomeUsuario);
        // Aqui você poderia salvar em um backend ou localStorage
    };

    return (
      <div className="ConfiguracaoPerfil">
        <div className="perfil-topo">
            <div className="perfil-titulo">
                <button className='BotaoV Bvoltar' onClick={onVoltar}>
                    <img src={Seta} alt="botaoVoltar" className="iconeVoltar"/>
                </button>
                <h3>CONFIGURAÇÕES DO PERFIL</h3>
            </div>

            <div className="foto-perfil">
                {imagemPreview ? (
                    <img src={imagemPreview} alt="Imagem de perfil" />
                ) : (
                    <div className="circulo-vazio" />
                )}
            </div>
            
            <div className="upload-perfil">
                <label htmlFor="upload" className="input-arredondado">
                    <img src={require('../img/upload.png')} alt="Upload" className="icone-upload" />
                </label>
                <input
                    id="upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImagemChange}
                    className="input-escondido"
                />
            </div>

            <div className="campo-Nome">
                <input
                    type="text"
                    id="nomeUsuario"
                    value={nomeUsuario}
                    onChange={handleNomeChange}
                    placeholder="Digite seu Nome:"
                />
                <button className='Bsalvar salvar' onClick={handleSalvar}>Salvar</button>
            </div>

            <br />
            </div>
        </div>
    );
  }
  
  export default ConfiguracaoPerfil;
  