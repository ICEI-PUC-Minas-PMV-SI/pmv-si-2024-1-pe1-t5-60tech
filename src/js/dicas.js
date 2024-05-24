document.addEventListener("DOMContentLoaded", function() {
  fetch('http://localhost:3000/dicas')
    .then(response => response.json())
    .then(dicas => {
      const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
      
      
      document.getElementById('dica-container').innerHTML = `<object type="text/html" data="${dicaAleatoria.conteudo}" ></object>`;
    })
    .catch(error => console.error('Erro ao carregar dicas:', error));
});