
# COMO CONFIGURAR O LISTFY

Integra o Listfy à sua landing page/site é super simples e rápido!

1 - O primeiro passo é criar um projeto https://listfy.app/a/novo-projeto

2 - Navege até a aba de integração e copie a tag de script colocando-a no head da sua página:
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/listfyapp/widget/index.js" defer></script>
```
3 - Após copiar e colar a tag script, copie também a tag div e cole onde você deseja que o formulário aparece em sua página:

```
<div class="__listfy-widget" data-id="O_ID_DO_SEU_PROJETO_DEVE_APARECER_AQUI"></div>
```
* O valor do data-id é o id do seu projeto. Esse id é gerado automaticamente quando seu projeto é criado.

## IMPORTANTE

Cada formulário é único por projeto, o que significa dizer que você deve sempre especificar o domínio da página correta no momento da criação ou sua página receberá um ```401 Unauthorized``` **(Não autorizado)** ao tentar carregar o formulário.

![create-project](https://cdn.jsdelivr.net/gh/listfyapp/widget/print-create-project.png)

Se você está criando um formulário para sua página captandoleads.com esse deve ser o domínio informado no momento da criação do projeto. Ou se o formulário não é carregado, considere checar o domínio nas configurações do projeto.