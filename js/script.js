

function cacular() {

    //cores
    document.getElementById("r1i").style.backgroundColor = "white";
    document.getElementById("r1c").style.backgroundColor = "white";

    document.getElementById("r2i").style.backgroundColor = "white";
    document.getElementById("r2c").style.backgroundColor = "white";

    document.getElementById("r3i").style.backgroundColor = "white";
    document.getElementById("r3c").style.backgroundColor = "white";

    document.getElementById("r4i").style.backgroundColor = "white";
    document.getElementById("r4c").style.backgroundColor = "white";

    document.getElementById("r5i").style.backgroundColor = "white";
    document.getElementById("r5c").style.backgroundColor = "white";

    document.getElementById("r6i").style.backgroundColor = "white";
    document.getElementById("r6c").style.backgroundColor = "white";

    var alt = Number(document.getElementById("alt").value);
    var Peso = Number(document.getElementById("peso").value);
    var imc = Peso / (alt * alt);
    var msg = document.getElementById("msg")

    document.getElementById("result").innerHTML = "Seu IMC é: " + imc.toFixed(2); {



        if (imc < 18.5) {
            msg.innerHTML = ("abaixo do peso")
            document.getElementById("r1i").style.backgroundColor = "yellow";
            document.getElementById("r1c").style.backgroundColor = "yellow";

        }
        else if (imc >= 18.5 && imc <= 24.9) {
            msg.innerHTML = ("Peso ideal (Parabéns)")
            document.getElementById("r2i").style.backgroundColor = "yellow";
            document.getElementById("r2c").style.backgroundColor = "yellow";
        }
        else if (imc > 24.4 && imc < 29.9) {

            document.getElementById("r3i").style.backgroundColor = "yellow";
            document.getElementById("r3c").style.backgroundColor = "yellow";

        }
        else if (imc > 29.9 && imc < 34.9) {
            msg.innerHTML = ("Obesidade grau 1")
            document.getElementById("r4i").style.backgroundColor = "yellow";
            document.getElementById("r4c").style.backgroundColor = "yellow";

        }
        else if (imc > 34.9 && imc < 39.9) {
            msg.innerHTML = ("Obesidade grau 2(severa)")
            document.getElementById("r5i").style.backgroundColor = "yellow";
            document.getElementById("r5c").style.backgroundColor = "yellow";

        }
        else {
            msg.innerHTML = ("Obesidade grau 3 (mórbio)")
            document.getElementById("r6i").style.backgroundColor = "yellow";
            document.getElementById("r6c").style.backgroundColor = "yellow";

        }
    }
}
document.getElementById("btmMulher").addEventListener("click", function () {
    document.getElementById("cont").style.backgroundColor = "#EF98FD";
}, false);
document.getElementById("btmHomen").addEventListener("click", function () {
    document.getElementById("cont").style.backgroundColor = "#318CE7";
}, false);



