import React from "react";
import "../../reset.css";
import "./style.scss";

/* O componente CardCredito é responsável pelo card que será apresentado oferecendo uma oferta de crédito quando o usuário possuir score adequado para isso.
/* Clicar no link faz com que o usuário tenha um aumento de pontos em seu score e seja levado numa nova guia para o serviço real Serasa eCred. */

const CardCredito = (props) => {
  const callback = props.callback;

  return (
    <div className="card-credito">
      <h1 className="proposta-de-credito">
        <img
          src="https://icons.iconarchive.com/icons/martz90/circle-addon1/256/task-manager-icon.png"
          height="15px"
        />
        Propostas de crédito
      </h1>
      <hr />
      <p>Encontramos uma oferta de cartão de crédito para você!</p>

      <img
        className="logo-empresa"
        src="https://www.comoinvestirnoexterior.com/wp-content/uploads/2019/05/visa.jpg"
        height="24px"
        alt="Logo Empresa"
        Title="Logo Empresa"
      />
      <div className="anuidade-gratis">
        Anuidade grátis: Limite de R$ 2.000,00
      </div>
      <div className="link-credito">
        {/* Ao clicar no link, a página será aberta em uma nova guia e automaticamente, a pontuação será acrescida ao score do usuário */}
        <a
          href="https://www.serasa.com.br/ecred/"
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

export default CardCredito;
