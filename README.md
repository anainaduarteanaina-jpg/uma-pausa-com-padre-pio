# Uma Pausa com Padre Pio

Landing page estática pronta para GitHub Pages.

## Publicar

1. Extraia este ZIP.
2. Envie index.html, styles.css, app.js e a pasta assets para a raiz do repositório. Não envie apenas o ZIP.
3. No repositório, abra Settings > Pages.
4. Em Source, escolha Deploy from a branch.
5. Selecione a branch que contém os arquivos (normalmente main) e a pasta / (root). Salve.
6. Aguarde a publicação e abra o endereço informado pelo próprio GitHub.

Documentação oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Não é necessário instalar dependências nem executar npm run build.
Os caminhos de imagens e fontes são relativos e funcionam em páginas hospedadas dentro do nome de um repositório.

## Pagamento

O checkout ainda não foi fornecido. Em app.js, substitua a string vazia de CHECKOUT_URL pelo link oficial. Enquanto vazio, o botão abre uma mensagem de pré-lançamento e não cobra ninguém.

## Observações

A página apresenta a oferta digital, mas não implementa a área de membros, a comunidade ou os conteúdos de áudio. A entrega e as condições comerciais devem ser conferidas antes da abertura das vendas.

O arquivo .nojekyll mantém os arquivos estáticos sem processamento de Jekyll.
O arquivo README.md contém estas instruções e não modifica o layout da página.
