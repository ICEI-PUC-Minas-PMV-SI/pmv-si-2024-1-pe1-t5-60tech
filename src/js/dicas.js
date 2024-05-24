document.addEventListener('DOMContentLoaded', function() {
  const pages = [
    '/src/pages/dicas-do-dia/dica01.html',
    '/src/pages/dicas-do-dia/dica02.html',
    '/src/pages/dicas-do-dia/dica03.html'
  ];

  const randomPage = pages[Math.floor(Math.random() * pages.length)];

  setTimeout(() => {
    window.location.href = randomPage;
  }, 2000); 
});