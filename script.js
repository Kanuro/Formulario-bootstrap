var formulario = document.getElementById('perfil-form');
var range = document.getElementById('dedicacao');
var valorRange = document.getElementById('dedicacao-valor');
var mensagem = document.getElementById('form-status');
var botaoRascunho = document.getElementById('salvar-rascunho');

range.oninput = function () {
    valorRange.value = range.value;
};

botaoRascunho.onclick = function () {
    localStorage.setItem('nome', document.getElementById('nome').value);
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('projeto', document.getElementById('projeto').value);
    mensagem.className = 'alert alert-success mt-3 mb-0';
    mensagem.innerHTML = 'Rascunho salvo!';
};

formulario.onreset = function () {
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
    localStorage.removeItem('projeto');
    setTimeout(function () {
        valorRange.value = range.value;
        mensagem.className = 'alert alert-secondary mt-3 mb-0';
        mensagem.innerHTML = 'Formulário limpo.';
    }, 100);
};

formulario.onsubmit = function (evento) {
    evento.preventDefault();

    if (formulario.checkValidity() === false) {
        formulario.classList.add('was-validated');
        mensagem.className = 'alert alert-danger mt-3 mb-0';
        mensagem.innerHTML = 'Preencha os campos obrigatórios.';
        return;
    }

    localStorage.removeItem('nome');
    localStorage.removeItem('email');
    localStorage.removeItem('projeto');
    mensagem.className = 'alert alert-success mt-3 mb-0';
    mensagem.innerHTML = 'Formulário enviado!';
};

document.getElementById('nome').value = localStorage.getItem('nome') || '';
document.getElementById('email').value = localStorage.getItem('email') || '';
document.getElementById('projeto').value = localStorage.getItem('projeto') || '';
