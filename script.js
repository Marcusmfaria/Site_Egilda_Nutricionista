function calcularIMC() {
  var pesoIMC = document.getElementById('pesoIMC').value
  var alturaIMC = document.getElementById('alturaIMC').value 

  if (pesoIMC == "" || pesoIMC == null) {
    document.getElementById('pesoIMC').placeholder = "Digite seu peso"
    return false
  }
    if (alturaIMC == "" || alturaIMC == null) {
    document.getElementById('alturaIMC').placeholder = "Digite sua altura"
    return false
  }

  resultado = null
  pesoIMC = Number(pesoIMC)
  alturaIMC = Number(alturaIMC)

  resultado = pesoIMC / (alturaIMC*alturaIMC)

  document.getElementById('resultado').value = resultado


}