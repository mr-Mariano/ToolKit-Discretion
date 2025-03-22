
export const generateTable = (expression) => {
    // 1. Extraer las variables únicas de la expresión lógica (mayúsculas y minúsculas)
    const variables = Array.from(new Set(expression.match(/[A-Za-z]/g)));
    // 2. Calcular el número de filas necesarias para la tabla de verdad
    const numRows = Math.pow(2, variables.length);

    // 3. Inicializar un array vacío para almacenar las filas de la tabla
    const table = [];

    // 4. Generar todas las combinaciones posibles de valores de verdad para las variables
    for (let i = 0; i < numRows; i++) {
        const row = {};

        // 5. Asignar valores de verdad a cada variable en la fila actual
        variables.forEach((variable, index) => {
            row[variable] = (i >> (variables.length - index - 1)) & 1 ? true : false;
        });

        // 6. Evaluar la expresión lógica para la fila actual
        const evaluatedExpression = evaluateExpression(expression, row);
        row[expression] = evaluatedExpression;

        // 7. Añadir la fila a la tabla
        table.push(row);
    }

    // 8. Retornar la tabla de verdad
    return table;
};

const evaluateExpression = (expression, values) => {
    // Reemplazar las variables en la expresión con sus valores de verdad
    let expr = expression
        .replace(/<=>/g, '===')
        .replace(/<->/g, '===')
        .replace(/!/g, '!')
        .replace(/¬/g, '!')
        .replace(/~/g, '!')
        .replace(/&/g, '&&')
        .replace(/∧/g, '&&')
        .replace(/∨/g, '||')
        .replace(/([A-Za-z])/g, (match) => values[match]);

    // Evaluar las implicaciones lógicas
    const evaluateImplications = (expr) => {
        let prevExpr = null;
        while (expr !== prevExpr) {
            prevExpr = expr;
            expr = expr.replace(/(\w+|\([^()]+\))\s*(->|=>|→)\s*(\w+|\([^()]+\))/g, '(!$1 || $3)');
        }
        return expr;
    };

    // Evaluar las equivalencias lógicas
    const evaluateEquivalences = (expr) => {
        let prevExpr = null;
        while (expr !== prevExpr) {
            prevExpr = expr;
            expr = expr.replace(/(\w+|\([^()]+\))\s*(<->|<=>)\s*(\w+|\([^()]+\))/g, '(($1 && $3) || (!$1 && !$3))');
        }
        return expr;
    };

    expr = evaluateImplications(expr);
    expr = evaluateEquivalences(expr);
    console.log(expr)

    // Evaluar la expresión lógica usando math.js
    try {
        return eval(expr);
    } catch (error) {
        console.error('Error al evaluar la expresión lógica:', error);
        throw new Error('Error al evaluar la expresión lógica');
    }
};

// // Ejemplo de uso
// const expression = '(p -> q) <-> (¬p ∨ q)';
// const truthTable = generateTable(expression);
// console.table(truthTable);
