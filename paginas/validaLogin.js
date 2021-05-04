const template = require('./template');

module.exports = (req, res) => {
    const params = req.body;
    const { nome, email, senha } = params;
    
    let status;
    let html;

    if (!email == '' && !senha == '') {
        const usuarios = require('./contas');

        status = 200;
        let i = 0;
        for (const usuario of usuarios) {
            if (usuario.email === email && usuario.senha === senha) {
                i = 1;
            }
        }
        if (i === 1) {
            html = template(
                'Login Realizado com Sucesso',
                `<p>Bem vindo ${email}</p>`
                );        
        }
        else {
            status = 401;
            html = template(
            'Erro Ao Fazer Login',
            '<p>Nome, email ou senha inválidos! Tente novamente!</p>'
            );    
        }

        
    }
    else {
        status = 401;
        html = template(
        'Erro Ao Fazer Login',
        '<p>Nome, email ou senha inválidos!</p>'
        );
    }
    res.status(status).send(html);
};