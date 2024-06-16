function dataAtualFormatada()
{
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
        hora = data.getHours();
        minutos = data.getMinutes();
        segundos = data.getSeconds();
    return diaF+"/"+mesF+"/"+anoF+ " "+hora+":"+minutos+":"+segundos;
}

function showTime() 
{
	document.getElementById('currentTime').innerHTML = dataAtualFormatada();
}
showTime();

setInterval(function () { showTime(); }, 1000);

function confirma()
{
    alert("Enviado!");
}