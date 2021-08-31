const onClick = (btn, fn) => btn.addEventListener('click', fn);

const setOp = (btn, op) => {
    onClick(btn, () => res.innerText += op);
}

const res = document.getElementById('res');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnClear = document.getElementById('btnClear');
const btnEql = document.getElementById('btnEql');


setOp(btnSub, '-');
setOp(btnSum, '+');
setOp(btnMul, '*');
setOp(btnDiv, '/');

const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.floor(a / b),
}

onClick(btn0, () => {
    res.innerHTML = res.innerHTML + '0';
});

onClick(btn1, () => {
    res.innerHTML = res.innerHTML + '1';
});

onClick(btnClear, () => {
    res.innerHTML = '';
});

onClick(btnEql, () => {
    // split on word boundaries (e.g.between digits and symbols)
    const [op1, operator, op2] = res.innerText.split(/\b/);
    // use parseInt (base 2) to read string as binary integer
    const [n1, n2] = [parseInt(op1, 2), parseInt(op2, 2)];
    // perform the desired operation then convert result into a string (base 2)
    res.innerText = Number(ops[operator](n1, n2)).toString(2);
});