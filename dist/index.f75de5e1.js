AOS.init();
const dataDoEvento = new Date("Aug 11, 2023 00:00:00");
const timeStampEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampEvento - timeStampAtual;
    const diaEmMs = 86400000;
    const horaEmMs = 3600000;
    const minutoEmMs = 60000;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % diaEmMs / horaEmMs);
    const minutossAteOEvento = Math.floor(distanciaAteOEvento % horaEmMs / minutoEmMs);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutoEmMs / 1000);
    document.getElementById("contador").innerHTML = `começa em ${diasAteOEvento}d ${horasAteOEvento}h ${minutossAteOEvento}min ${segundosAteOEvento}s`;
    document.getElementById("button").innerHTML = `Garanta sua vaga`;
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "terminou!";
        document.getElementById("button").innerHTML = "Ingresso esgotado";
    }
//if (distanciaAteOEvento)
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
