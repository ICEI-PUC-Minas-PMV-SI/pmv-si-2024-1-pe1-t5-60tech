document.addEventListener('DOMContentLoaded', function() {
  
  if (!localStorage.getItem('redirected')) {
    
    const pages = [
      '/src/pages/dicas-do-dia/dica01.html',
      '/src/pages/dicas-do-dia/dica02.html',
      '/src/pages/dicas-do-dia/dica03.html'
    ];

    const randomPage = pages[Math.floor(Math.random() * pages.length)];

    localStorage.setItem('redirected', 'true');

    window.location.href = randomPage;
  } else {
    
    localStorage.removeItem('redirected');
  }
});