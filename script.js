function adicionarRegistro() {
    var data = document.getElementById('data').value;
    var peso = document.getElementById('peso').value;
    var pressaoSistolica = document.getElementById('pressaoSistolica').value;
    var pressaoDiastolica = document.getElementById('pressaoDiastolica').value;
    var frequenciaCardiaca = document.getElementById('frequenciaCardiaca').value;
    var tipoTreino = document.getElementById('tipoTreino').value;
    var caloriasGastas = document.getElementById('caloriasGastas').value;
    var tempoTreino = document.getElementById('tempoTreino').value;

    // Validar se os campos foram preenchidos
    if (!data || !peso || !pressaoSistolica || !pressaoDiastolica || !frequenciaCardiaca || !tipoTreino || !caloriasGastas || !tempoTreino) {
        alert('Preencha todos os campos.');
        return;
    }

    // Adicionar registro à tabela de registros
    var tabelaRegistros = document.getElementById('tabelaRegistros').getElementsByTagName('tbody')[0];
    var novaLinhaRegistros = tabelaRegistros.insertRow(0);
    var colunaDataRegistros = novaLinhaRegistros.insertCell(0);
    var colunaPesoRegistros = novaLinhaRegistros.insertCell(1);
    var colunaPressaoSistolicaRegistros = novaLinhaRegistros.insertCell(2);
    var colunaPressaoDiastolicaRegistros = novaLinhaRegistros.insertCell(3);
    var colunaFrequenciaCardiacaRegistros = novaLinhaRegistros.insertCell(4);
    var colunaTipoTreinoRegistros = novaLinhaRegistros.insertCell(5);
    var colunaCaloriasGastasRegistros = novaLinhaRegistros.insertCell(6);
    var colunaTempoTreinoRegistros = novaLinhaRegistros.insertCell(7);

    colunaDataRegistros.innerHTML = data;
    colunaPesoRegistros.innerHTML = peso;
    colunaPressaoSistolicaRegistros.innerHTML = pressaoSistolica;
    colunaPressaoDiastolicaRegistros.innerHTML = pressaoDiastolica;
    colunaFrequenciaCardiacaRegistros.innerHTML = frequenciaCardiaca;
    colunaTipoTreinoRegistros.innerHTML = tipoTreino;
    colunaCaloriasGastasRegistros.innerHTML = caloriasGastas;
    colunaTempoTreinoRegistros.innerHTML = tempoTreino;

    // Limpar os campos do formulário
    document.getElementById('data').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('pressaoSistolica').value = '';
    document.getElementById('pressaoDiastolica').value = '';
    document.getElementById('frequenciaCardiaca').value = '';
    document.getElementById('tipoTreino').value = '';
    document.getElementById('caloriasGastas').value = '';
    document.getElementById('tempoTreino').value = '';
}
