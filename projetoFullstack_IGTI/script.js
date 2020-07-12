window.addEventListener('load', handleBackground());

function handleBackground() {
    let iptFirst = document.getElementById("input1").value;
    let iptSecond = document.getElementById("input2").value;
    let iptThird = document.getElementById("input3").value;

    document.getElementById("inputx11").value = iptFirst;
    document.getElementById("inputx22").value = iptSecond;
    document.getElementById("inputx33").value = iptThird;

    let test2e = `rgb(${iptFirst}, ${iptSecond},${iptThird})`;


    document.querySelector(".square").style.backgroundColor = test2e;
}

document.getElementById("input1").addEventListener("input", handleBackground);
document.getElementById("input2").addEventListener("input", handleBackground);
document.getElementById("input3").addEventListener("input", handleBackground);