import React from "react";
import "../../reset.css";
import "./style.scss";

/* O componente CardNegociar é responsável pelo card qwue será apresentado oferecendo uma oferta negociação de dívidas quando o usuário possuir score adequado para isso.
/* Clicar no link faz com que o usuário tenha um aumento de pontos em seu score e seja levado numa nova guia para o serviço real Serasa LimpaNome. */

const CardNegociar = (props) => {
  const callback = props.callback;
  return (
    <div className="card-negociar">
      <h1 className="negocie-suas-dividas">
        <img
          src="https://icons.iconarchive.com/icons/martz90/circle-addon1/256/task-manager-icon.png"
          height="15px"
        />
        Negocie suas dívidas
      </h1>
      <hr />
      <p>Você possui uma pendência com:</p>
      <img
        className="logo-empresa"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/XBOX_logo_2012.svg/1280px-XBOX_logo_2012.svg.png"
        height="24px"
        alt="Logo Empresa"
        Title="Logo Empresa"
      />
      <div className="negociacao">De ̶R̶$̶2̶8̶0̶,̶0̶0̶, por R$ 79,00</div>
      <div className="link-negociar">
        {/* Ao clicar no link, a página será aberta em uma nova guia e automaticamente, a pontuação será acrescida ao score do usuário */}
        <a
          href="https://www.serasa.com.br/limpa-nome-online/"
          target="_blank"
          onClick={callback}
          rel="noreferrer"
        >
          Negociar agora
        </a>
      </div>
    </div>
  );
};

export default CardNegociar;
