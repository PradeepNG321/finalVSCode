// script.js

// 🔁 Replace with your actual Google Apps Script Web App URL:
const scriptURL = 'https://script.google.com/macros/s/AKfycbzAK-3b7QuN-Cf-CLxrRK-lMKRNObwSQWbp7lNc0nb3wKv7LqYurXqMgK_2205OUxY/exec';

document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim()
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(res => {
      const msg = document.getElementById('responseMsg');
      msg.textContent = res.message;
      msg.style.color = res.status === 'success' ? 'green' : 'red';

      if (res.status === 'success') {
        form.reset(); // Clear form
      }
    })
    .catch(error => {
      console.error('Error!', error);
      document.getElementById('responseMsg').textContent = 'Submission failed. Try again later.';
      document.getElementById('responseMsg').style.color = 'red';
    });
});
