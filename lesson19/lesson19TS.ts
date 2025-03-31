type baoanType = number | string | boolean

function addNumOrStrings(a: baoanType, b: number | string) {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if(typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('parameters must be numbers or strings');
}

// loi~khi running
// loi~ khi dich code compile
console.log(">>>check: ", addNumOrStrings("dep trai", "baoan"));