const cpf = document.getElementById('cpf');
const cpfMask = {
  mask: '000.000.000-00'
};
const mask = IMask(cpf, cpfMask);

const telefone = document.getElementById('telefone')
const telefoneMask = {
    mask: "(00)0000-0000"
}

const maskTelefone = IMask(telefone, telefoneMask)