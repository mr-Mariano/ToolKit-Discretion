export const compareTables = (table1 , expression1 , table2, expression2) => {
    if (table1.length !== table2.length) return false;

    console.log("Table 1: ", table1);
    console.log("Expresión 1:", expression1)
    console.log("Table 2: ", table2);
    console.log("Expresión 2:" , expression2)
    for (let i = 0; i < table1.length; i++) {
        if (table1[i][expression1] !== table2[i][expression2]) {
            return false;
        }
    }


    return true;
};