const campos = document.querySelectorAll('.required');

// Função para validar o nome
function validarNome() {
  const nomeInput = campos[0];
  const nomeValue = nomeInput.value;
  if (nomeValue.length >= 16 && nomeValue.length <= 60) {
    localStorage.setItem("nome", nomeValue);
    return true;
  } else {
    return false;
  }
}

// Função para validar o login
function validarLogin() {
  const loginInput = campos[1];
  const loginValue = loginInput.value;
  if (loginValue.length === 6) {
    localStorage.setItem("login", loginValue);
    return true;
  } else {
    return false;
  }
}

// Função para validar a senha
function validarSenha() {
  const senhaInput = campos[2];
  const senhaValue = senhaInput.value;
  const numeros = senhaValue.match(/\d/g);

  if (senhaValue.length === 8 && numeros === null) {
    localStorage.setItem("senha", senhaValue);
    return true;
  } else {
    return false;
  }
}

// Função para validar a confirmação de senha
function validarCSenha() {
  const cSenhaInput = campos[4];
  const senhaInput = campos[2];
  if (cSenhaInput.value === senhaInput.value) {
    return true;
  } else {
    return false;
  }
}

// Função para formatar números de telefone
function formatarTelefone(input) {
  let telefoneValue = input.value;
  // Remove todos os caracteres não numéricos
  telefoneValue = telefoneValue.replace(/\D/g, '');

  // Formatação do telefone
  if (telefoneValue.length === 11) {
    telefoneValue = `(${telefoneValue.substring(0, 2)}) ${telefoneValue.substring(2, 7)}-${telefoneValue.substring(7)}`;
  } else if (telefoneValue.length === 10) {
    telefoneValue = `(${telefoneValue.substring(0, 2)}) ${telefoneValue.substring(2, 6)}-${telefoneValue.substring(6)}`;
  }

  input.value = telefoneValue;
}

// Event listeners para chamar as funções quando os campos são alterados
campos[3].addEventListener("input", validarCPF);
campos[5].addEventListener("input", () => formatarTelefone(campos[5]));
campos[6].addEventListener("input", () => formatarTelefone(campos[6]));

// Função para validar o formulário
function validarForm() {
  let res = document.getElementById('res');
  if (validarNome() && validarLogin() && validarSenha() && validarCPF() && validarCSenha()) {
    res.innerHTML = 'Cadastro realizado com sucesso! Redirecionando para login...';

    // Redireciona o usuário para a página de login após 2,5 segundos
    setTimeout(function () {
      window.location.href = "paginaLogin.html";
    }, 2500);
  } else {
    res.innerHTML = '[ERROR404] - Avalie as informações cadastradas';
  }
}
