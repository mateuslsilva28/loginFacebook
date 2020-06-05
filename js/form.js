const dia = ['Dia'] 
const mes = ['Mes', 'Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Out', 'Nov', 'Dez']
const ano = ['Ano']
const checkbox = $("[type=radio]")

for(let i=1; i<=31;i++){
    dia.push(i)
}

for(let i=2020; i>=1905; i--){
    ano.push(i)
}

for (let i=0; i<dia.length;i++){
    $(".dia").append(`<option> ${dia[i]} </option>`)
}

for(let i=0; i<mes.length; i++){
    $(".mes").append(`<option> ${mes[i]} </option>`)
}

for(let i=0; i<ano.length; i++){
    $(".ano").append(`<option> ${ano[i]} </option>`)
}

for(let i=0; i<=1; i++){
    $(checkbox[i]).click(function(){
        $(".opcoesPronome").hide()
    })
}

$(checkbox[2]).click(function(){
    $(".opcoesPronome").show()
})