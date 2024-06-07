document.addEventListener('DOMContentLoaded', () => {
  function closePopup() {
      document.getElementById('popup').style.display = 'none';
  }

  function showPopup(message) {
      const popup = document.getElementById('popup');
      document.getElementById('popupMessage').textContent = message;
      popup.style.display = 'block';
  }

  function closeMedPopup() {
      document.getElementById('medPopup').style.display = 'none';
  }

  function showMedications() {
      const medPopup = document.getElementById('medPopup');
      fetch('/medications')
          .then(response => response.json())
          .then(data => {
              const medList = document.getElementById('medList');
              medList.innerHTML = '';
              if (data.length === 0) {
                  medList.innerHTML = '<p>Nenhum medicamento cadastrado.</p>';
              } else {
                  data.forEach(med => {
                      const medItem = document.createElement('div');
                      medItem.classList.add('med-item');
                      medItem.innerHTML = `
                          <p><strong>Nome:</strong> ${med.nome}</p>
                          <p><strong>Quantidade:</strong> ${med.quantidade}</p>
                          <p><strong>Horário:</strong> ${med.horario}</p>
                          <p><strong>Observação:</strong> ${med.observacao}</p>
                      `;
                      medList.appendChild(medItem);
                  });
              }
              medPopup.style.display = 'block';
          })
          .catch(error => console.error('Erro ao buscar medicamentos:', error));
  }

  function submitForm() {
      const form = document.getElementById('medForm');
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
          data[key] = value;
      });

      fetch('/medications', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
          .then(response => response.json())
          .then(result => {
              if (result.success) {
                  showPopup('Remédio cadastrado com sucesso.');
                  form.reset();
              } else {
                  showPopup('Falha ao cadastrar remédio.');
              }
          })
          .catch(error => console.error('Erro ao enviar formulário:', error));
  }

  window.closePopup = closePopup;
  window.showMedications = showMedications;
  window.submitForm = submitForm;
});
