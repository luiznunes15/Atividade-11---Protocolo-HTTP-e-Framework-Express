module.exports = (titulo, conteudo) => `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${titulo}</title>
        <link rel="stylesheet" href="estilos.css"/>
    </head>
    <body>
        <h1 class="d-flex justify-content-center">${titulo}</h1>
        <div class="d-flex justify-content-center">${conteudo}</div>    
        
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/cadastro">Cadastrar</a>
        </li>    
        <li>
            <a href="/login">Fazer Login</a>
        </li>
    </body>
    </html>
`;
