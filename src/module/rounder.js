function rounder(number, decimals = 0) {
    if (decimals === 0) {
        return Math.round(number);
    }

    let zero = '0';
    let rounds = parseInt('1' + zero.repeat(decimals));
    console.log(Math.round(number * rounds) / rounds);
}

export default rounder;
