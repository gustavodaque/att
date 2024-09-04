const tarefas = [];


function adicionarTarefa(descricao) {
    if (!descricao || typeof descricao !== 'string' || descricao.trim() === '') {
        return 'Por favor, insira uma descrição válida para a tarefa.';
    }

    tarefas.push({
        descricao: descricao.trim(),
        concluida: false
    });

    return 'Tarefa adicionada com sucesso!';
}


function listarTarefas() {
    if (tarefas.length === 0) {
        console.log('Nenhuma tarefa cadastrada.');
        return;
    }

    console.log('Lista de Tarefas:');
    tarefas.forEach((tarefa, index) => {
        const status = tarefa.concluida ? 'Concluída' : 'Pendente';
        console.log(`${index + 1}. ${tarefa.descricao} - Status: ${status}`);
    });
}


function removerTarefa(indice) {
    if (indice < 1 || indice > tarefas.length) {
        return 'Índice inválido. Tente novamente com um índice correto.';
    }

    tarefas.splice(indice - 1, 1);
    return 'Tarefa removida com sucesso!';
}

function concluirTarefa(indice) {
    if (indice < 1 || indice > tarefas.length) {
        return 'Índice inválido. Tente novamente com um índice correto.';
    }

    tarefas[indice - 1].concluida = true;
    return 'Tarefa marcada como concluída!';
}

// Exemplo de uso
console.log(adicionarTarefa('Estudar JavaScript')); 
console.log(adicionarTarefa('Comprar mantimentos')); 
console.log(adicionarTarefa('')); 

listarTarefas();             

console.log(concluirTarefa(1)); 
listarTarefas();              

console.log(removerTarefa(2)); 
listarTarefas();              
