function processData(input) {
    //Enter your code here
    input = input.trim().split("\n");

    let idx = 0;
    const N = parseInt(input[idx++]);

    let transactions = [];

    for (let i = 0; i < N; i++) {
        let [text, amount] = input[idx++].split(" ");
        transactions.push({
            id: i + 1,
            text: text,
            amount: Number(amount)
        });
    }

    const newText = input[idx++].trim();
    const newAmount = Number(input[idx++]);

    const deleteId = Number(input[idx++]);


    function sum(transactions) {
        const result = transactions.reduce(
            (acc, curr) => {
                if (curr.amount > 0) acc.income += curr.amount;
                else acc.expense += curr.amount;
                return acc;
            },
            { income: 0, expense: 0 }
        );

        return {
            income: result.income,
            expense: Math.abs(result.expense)
        };
    }

    function handleSubmit(text, amount, transactions) {
        if (!text || amount === 0) return transactions;

        const maxId = transactions.length
            ? Math.max(...transactions.map(t => t.id))
            : 0;

        const newTransaction = {
            id: maxId + 1,
            text,
            amount
        };

        return [...transactions, newTransaction];
    }

    function deleteTransaction(transactions, id) {
        return transactions.filter(t => t.id !== id);
    }

    function renderTransactions(transactions) {
        return transactions.map(t => `${t.text} : ${t.amount}`);
    }


    transactions = handleSubmit(newText, newAmount, transactions);
    transactions = deleteTransaction(transactions, deleteId);

    const totals = sum(transactions);
    const renderedList = renderTransactions(transactions);


    const output = {
        transactions,
        totals,
        renderedList
    };

    console.log(JSON.stringify(output, null, 2));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
