document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um ouvinte de evento para o formulário
    document.getElementById('formulario').addEventListener('submit', function(event) {
        // Impede o envio padrão do formulário
        event.preventDefault();

        // Expressões regulares para validação
        var regexNome = /^[A-Za-z\s]{1,100}$/; // Apenas letras e espaços, sem números
        var regexEmail = /^\S+@\S+\.\S+$/; // Formato básico de e-mail
        var regexTelefone = /^\([1-9]{2}\)\s?[2-9][0-9]{3,4}\-?[0-9]{4}$/; // Telefone com DDD brasileiro

        // Obtém os valores dos campos do formulário
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var telefone = document.getElementById('telefone').value;

        // Imprime no terminal o que foi incluído nos campos do formulário
        console.log('Nome incluído:', nome);
        console.log('Email incluído:', email);
        console.log('Telefone incluído:', telefone);

        // Valida o nome
        if (!regexNome.test(nome)) {
            alert('Nome inválido.');
            return;
        }

        // Valida o e-mail
        if (!regexEmail.test(email)) {
            alert('Email inválido.');
            return;
        }

        // Valida o número de telefone
        if (!regexTelefone.test(telefone)) {
            alert('Número de telefone inválido.');
            return;
        }

        // Se todas as validações forem bem-sucedidas, exibe um alerta de sucesso
        alert('Todos os dados estão corretos!');
    });
});
