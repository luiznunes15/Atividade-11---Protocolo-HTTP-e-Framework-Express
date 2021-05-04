const template = require('./template');

module.exports = (req, res) => {
    const params = req.body;
    const { nome, email, senha } = params;
        
    let status;
    let html;

    if (!nome == '' && !email == '' && !senha == '') {
        const usuarios = require('./contas');
        
        status = 200;
        usuarios.push(params);
        html = template(
        'Cadastro Realizado com Sucesso',
        `<p>${nome} você foi cadastrado com sucesso!</p>`
        );
    } 
    else {
        status = 401;
        html = template(
        'Não foi possível cadastrar os dados',
        '<p>Algum dos campos não foi preenchido!</p>'
        );
    }

    res.status(status).send(html);
};
