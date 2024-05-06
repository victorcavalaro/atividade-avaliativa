// Valida o nome -> foi utilizado esse metodo para conseguir fazer a validação do nome no padrão regexNome, tendo como parametro a validação de não utiliza numero alertando na tela do usuario 
        if (!regexNome.test(nome)) {
            alert('Nome inválido.');
            return;
        }

        // Valida o e-mail -> foi utilizado esse metodo para conseguir validar o email incluido pelo usuario, se esta ou não no padrão do regex, se foi incluido as caracteristicas do email
            alert('Email inválido.');
            return;
        }

        // Valida o número de telefone -> foi utlizado para incluir a validação do padrão regex para validar a quantidade de numero para um numero de telefone ex: (31) 91234-5678
        if (!regexTelefone.test(telefone)) {
            alert('Número de telefone inválido.');
            return;
        }
