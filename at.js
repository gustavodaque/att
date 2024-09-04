
const produtos = [];


function adicionarProduto(nome, preco, quantidade) {

    if (!nome || typeof nome !== 'string' || nome.trim() === '') {
        return 'Por favor, informe um nome válido para o produto.';
    }
    if (isNaN(preco) || preco <= 0) {
        return 'O preço deve ser um número positivo.';
    }
    if (isNaN(quantidade) || quantidade <= 0) {
        return 'A quantidade deve ser um número positivo.';
    }

    // Adiciona o produto ao array
    produtos.push({
        nome: nome.trim(),
        preco: parseFloat(preco),
        quantidade: parseInt(quantidade, 10)
    });

    return 'Produto adicionado com sucesso!';
}


function listarProdutos() {
    if (produtos.length === 0) {
        console.log('Nenhum produto foi cadastrado ainda.');
        return;
    }

    console.log('Produtos cadastrados:');
    produtos.forEach((produto, index) => {
        console.log(`${index + 1}. Nome: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}, Quantidade: ${produto.quantidade}`);
    });
}


function calcularValorEstoque() {
    const valorTotal = produtos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);

    console.log(`Valor total do estoque: R$${valorTotal.toFixed(2)}`);
}

// Exemplo de uso
console.log(adicionarProduto('Produto A', 10.5, 20)); 
console.log(adicionarProduto('Produto B', 5.0, 15));  
console.log(adicionarProduto('', 5.0, 15));        
console.log(adicionarProduto('Produto C', -1, 10));  
console.log(adicionarProduto('Produto D', 10, -5));  

listarProdutos();              
calcularValorEstoque();       
