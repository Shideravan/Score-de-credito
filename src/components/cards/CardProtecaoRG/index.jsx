import React from "react";
import "../../reset.css";
import "./style.scss";

// Se o score estiver entre 61-90, oferecer a oferta de forma padrão.
// Se o score estiver acima de 90, mostra também que possui 15% de desconto no serviço.
const ofertaScore = (score) => {
  if (score > 90)
    return (
      <p>
        Aproveite a oferta exclusiva de 15% de desconto para pessoas com a sua
        pontuação!
      </p>
    );
};

/* O componente CardProtecaoRG é responsável pelo card que será apresentado oferecendo uma oferta de proteção aos dados quando o usuário possuir score adequado para isso.
/* Clicar no link faz com que o usuário tenha um aumento de pontos em seu score e seja levado numa nova guia para o serviço real Serasa Premium. 
/* Se o usuário possuir score > 90, é ainda oferecido 15% de desconto no serviço, que é simulado mostrando a frase correspondente no card. */
const CardProtecaoRG = (props) => {
  const callback = props.callback;

  return (
    <div className="card-protecao-rg">
      <h1 className="protecao-rg">
        <img
          src="https://icons.iconarchive.com/icons/martz90/circle-addon1/256/task-manager-icon.png"
          height="15px"
        />
        Proteja seus dados agora mesmo!
      </h1>
      <hr />
      <p>
        Seu score é alto, mas pessoas mal-intencionadas podem usar seus dados
        sem sua permissão.
      </p>
      <img
        src="https://loja.serasaantifraude.com.br/ecommerce/assets/images/logo-serasa-premium.svg"
        height="25px"
      />
      <p>A melhor forma para se proteger é com o Serasa Premium!</p>
      {ofertaScore(props.score)}
      <div className="link-credito">
        {/* Ao clicar no link, a página será aberta em uma nova guia e automaticamente, a pontuação será acrescida ao score do usuário */}
        <a
          href="https://www.serasa.com.br/premium"
          target="_blank"
          onClick={callback}
          rel="noreferrer"
        >
          Ver oferta
        </a>
      </div>
    </div>
  );
};
export default CardProtecaoRG;
