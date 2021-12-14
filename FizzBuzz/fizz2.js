var num = 100;

for (var i = 1; i <= num; i++) {
    if (esDivi(i, 3)) {
        document.write("Fizz");
    }

    if (esDivi(i, 5)) {
        document.write("Buzz");
    }

    if (!esDivi(i, 3) && !esDivi(i, 5)) {
        document.write(i);

    }
    document.write("<br/>");
}
function esDivi(nu, divisor) {
    if (nu % divisor == 0) {
        return true;
    } else {
        return false;
    }
}