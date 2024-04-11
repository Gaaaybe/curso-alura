const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

nomesTurmaCompleta = nomesTurmaA.concat(nomesTurmaB);

console.log(nomesTurmaCompleta);

nomesTurmaCompleta.find((nome)=>{if('Carlos Oliveira'=== nome){''}})