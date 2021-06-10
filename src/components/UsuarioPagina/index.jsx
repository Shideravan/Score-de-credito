import React, { useState, useMemo, useCallback, useEffect } from "react";
import CardCredito from "../cards/CardCredito";
import CardNegociar from "../cards/CardNegociar";
import CardProtecaoRG from "../cards/CardProtecaoRG";
import "../reset.css";
import "./style.scss"; // Como já se encontra com o SASS instalado no projeto, o React permite carregar automaticamente o arquivo .scss

/* mensagemScore processa o score, dando um retorno adequado em texto para completar a frase.
 * Caso venha um valor inválido, ele irá emitir a frase "Sua pontuação não pode ser processada".
 * Foi utilizado switch de forma a facilitar a leitura e manutenção deste trecho de código. */
const mensagemScore = (score) => {
  switch (true) {
    case score <= 30:
      return "é baixa";
    case score > 30 && score <= 60:
      return "é média";
    case score > 60 && score <= 90:
      return "é alta";
    case score > 90:
      return "é muito alta";
    default:
      return "não pode ser processada (contate o suporte)";
  }
};

/* A função corFundo altera o nome da div responsável por abrigar a aplicação.
 * Esse valor é tratado dentro do arquivo .scss fornecendo temas de fundo de acordo com a situação financeira do usuário. */
const corFundo = (score) => {
  if (score <= 30) return "baixo";
  else if (score <= 60) return "medio";
  else if (score <= 90) return "alto";
  else return "altissimo";
};

// O componente UsuárioPagina é responsável pela exibição da tela do usuário. É a view principal da aplicação.
const UsuarioPagina = (props) => {
  useEffect(() => {
    setScore(props.score);
  }, [props.score]);

  const [score, setScore] = useState(parseInt(props.score));
  /* O aumento de score para cada tipo de interação com os cards, está propositalmente hardcoded, conforme explicado no readme.
   * Foi uma liberdade criativa necessária para implementação do projeto com os requisitos fornecidos.
   * Ao clicar no botão, é aumentado em 30 o valor do Score do usuário e o site do serviço correspondente real no site do Serasa será aberto em uma nova guia.
   * Está sendo usando o useCallback para se evitar chamadas desnecessárias */
  const incrementa = useCallback(() => {
    // É feita uma verificação antes de incrementar o valor de forma a assegurar que o valor permaneça no intervalo de 0-100 antes de fazer a soma de pontos após interação.
    if (score + 30 <= 100) setScore(score + 30);
    else setScore(100);
  }, [score]);
  let nomeClasse = corFundo(score);

  /* A função opcoesExibidas processa quais cards serão mostrados ao usuário específico, de acordo com seu score:
   * - Caso a pontuação esteja **abaixo de 30**, ele recebe ofertas para negociar suas dívidas;
   * - Caso sua pontuação esteja entre **31 e 60**, ele está elegível para solicitar crédito, podendo escolher uma das proposta oferecidas;
   * - Caso sua pontuação esteja **acima de 50**, será apresentado para ele um card com um plano de proteção ao RG;
   * - Caso sua pontuação esteja **acima de 90**, ele receberá um desconto (%) para obter o seu programa de proteção ao RG.
   *  -- Esse último tratamento é feito no próprio componente CardProtecaoRG.
   * Note que cada if é independente. Isso porque existem intervalos que se sobrepõe na especificação de requisitos.
   *  - Um exemplo onde isso acontece é entre 51-60, onde devemos oferecer tanto a propósta de crédito como a proteção ao RG.
   * Essa função abaixo é uma factory. A renderização só será ativada quando o estado "score" mudar.
   * Isso foi implementado dessa forma, pois a renderização é geralmente a parte que mais toma processamento e fazendo dessa forma,
   * deixamos a aplicação um pouco mais performática */
  const opcoesExibidas = useMemo(() => {
    if (score <= 30) {
      return (
        <div className="card">
          <CardNegociar callback={incrementa} />
        </div>
      );
    } else if (score > 30 && score <= 50) {
      return (
        <div className="card">
          <CardCredito callback={incrementa} />
        </div>
      );
    } else if (score > 50 && score <= 60) {
      return (
        <div>
          <div className="card">
            <CardCredito callback={incrementa} />
          </div>
          <div>
            <br></br>
          </div>
          <div className="card">
            <CardProtecaoRG callback={incrementa} score={score} />
          </div>
        </div>
      );
    } else if (score > 60) {
      return (
        <div className="card">
          <CardProtecaoRG callback={incrementa} score={score} />
        </div>
      );
    }
  }, [score]);

  return (
    <div className="pagina-usuario">
      <div className={nomeClasse}>
        <div>
          <br></br>
        </div>
        <img className="foto-usuario" src={props.foto} alt={props.nome} />
        <h1 className="nome-usuario">{props.nome}</h1>
        <div className="card-pontuacao">
          <h2>{score}</h2>

          <p>
            Sua pontuação <strong>{mensagemScore(score)}</strong>
          </p>
        </div>
        <div className="saiba-mais">
          <a
            href="https://www.serasa.com.br/score/o-que-e-score/"
            target="_blank"
            rel="noreferrer"
          >
            Saiba mais
          </a>
          <p>
            <br></br>
          </p>
        </div>
        <div className="card">{opcoesExibidas}</div>
      </div>
    </div>
  );
};
export default UsuarioPagina;
