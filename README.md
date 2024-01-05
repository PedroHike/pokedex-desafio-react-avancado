# Desafio React avançado
Esse desafio consite em um pokedex onde a página inicial contenha 10 cards pokemons contendo uma imagem e nome dos pokemons 

## Funcionalidades
As funcionalidades exigidas nesse desafio são

- Botão de mudança de tema claro e escuro
![mudança de tema](image.png)

- Botão que ao ser clicado, carrega mais 10 pokémons.
![botão carregar mais](image-1.png)

- Ao clicar no card do pokémon, da acesso ao detalhamento do mesmo, com nome, imagem, habilidades com descrição de cada uma, e movimentos.
![detalhamento](src/assents/images/detalhamento.gif)

- Como bônus, foi solicitado implementar um select de tipo de pokémon, onde filtra os pokémons pelo tipo.
![selecionador filtro](image-2.png)


## Ferramentas Utilizadas
Nesse desafio foi utilizado a seguintes ferramentas:

- React (usando create-react-app)
- Styled Components para a estilização
- SPA com react-router-dom
- Context API para criação de botão de troca de tema e adição das cores de tipo de pokémon.

## Decisões Adotadas
O passo a passo para a criação desse desafio foi:

- **Criação da estrutura react:** Escluindo todos os arquivos que não seriam utilizados.

- **Inicialmente foi criado o a pagina inicial:** Trabalhando com a API do pokedex, efetuando o fetch e separando as informações necessárias.

- **Trabalhar com o Context API e o botão de Tema:** Começando com a criação do botão de troca de tema, dando a ideia de um sol e lua. Após isso, passar as informações do context para o botão.

- **Adicionado o tema para os demais componentes:** Apos criação do botão, do apliquei o context API aos componentes conforme o tema.

- **Criação do botão para carregar mais:** Adicionado o botão onde alterava a variável de quantidade de pokémons solicitádos.

- **Criação das rotas:** Adicionando a funcionalidade de rotas.

- **Criação da página de detalhamento:** Criado arquivos de serviços onde foi implementado a solicitação de cada informação solicitada e implementado ao componete de detalhes.

- **Criação do filtro:** Após as solicitações obrigatórias serem realizadas, foi criado o select onde foi implementado o filtro baseado no texto selecionado.

- **Estilização com componentes:** A estilização foi efetuada no decorrer do projeto para melhor visualização das informações.

## Passo a Passo para Execução

Para que o projeto rode localmente, será necessário estar com VSCode.

1. **Pré-requisitos:**
   - Instale [Nome da Ferramenta 1] seguindo as instruções em [link].
   - Configure [Nome da Ferramenta 2] de acordo com [instruções].
   - ...

2. **Clone o Repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-projeto.git
   ```

3. **Acesse o Diretório:**
   ```bash
   cd nome-do-projeto
   ```

4. **Instale as Dependências:**
   ```bash
   npm install   # ou yarn install, dependendo do gerenciador de pacotes
   ```

5. **Configure as Variáveis de Ambiente:**
   - Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias.

6. **Execute a Aplicação:**
   ```bash
   npm start   # ou yarn start
   ```

7. **Acesse a Aplicação:**
   Abra o navegador e acesse [http://localhost:3000](http://localhost:3000).

## Contribuições

Explique como outras pessoas podem contribuir para o projeto. Isso pode incluir informações sobre como reportar bugs, sugerir melhorias, ou enviar pull requests.

## Licença

Indique a licença sob a qual o projeto está disponibilizado. Exemplo: Este projeto está licenciado sob a [Licença MIT](link).

---

Sinta-se à vontade para personalizar este modelo de README conforme as necessidades específicas do seu projeto.