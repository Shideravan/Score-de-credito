/* Este é um mock-up que simula uma API para recebimento dos dados. Altere os dados de acordo com o que você deseja passar para o Web App
 * Além dos dados nome, foto (um endereço válido para um arquivo de imagem) e score (que deve estar no intervalo de 0 a 100), temos também a variável ok, que simula os dados terem sido corretamente recebidos ou não.
 *
 * Valores para a variável ok:
 * true: Simula os dados sendo corretamente pegos.
 * false: Simula os dados não sendo pegos por alguma falha na requisição. */
const foto =
  "https://st.depositphotos.com/1071112/1214/i/450/depositphotos_12146650-stock-photo-the-square-image-of-a.jpg";
const nome = "Anabele Vitória de Souza";
const score = 0;
const ok = true;

const getUsuario = () => {
  return new Promise((resolve, reject) => {
    if (ok) {
      resolve({
        foto,
        nome,
        score,
      });
    } else {
      reject({
        erro: "Erro: não foi possível receber seus dados. Contate o suporte.",
      });
    }
  });
};
export default getUsuario;
