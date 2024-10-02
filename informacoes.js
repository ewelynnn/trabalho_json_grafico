const url = 'https://raw.githubusercontent.com/ewelynnn/trabalho_json_grafico/refs/heads/main/disciplina.json'

async function vizualizarInformacoes() {
  const res = await fetch(url)
    const dados = await res.json()
const pessoas_brancas = (dados.Branca)
const pessoas_preta = (dados.Preta)
const pessoas amarela = (dados.Amarela)
const pessoas parda = (dados.Parda)
const pessoas indigena = (dados.Indígena)

  
