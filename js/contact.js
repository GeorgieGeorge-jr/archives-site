const form = document.getElementById('projectForm');
const formNote = document.getElementById('formNote');

if (form && formNote) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim() || 'there';
    form.reset();
    formNote.textContent = `Thanks, ${name}. Your inquiry has been staged beautifully on the frontend. Connect this form to Formspree, Netlify Forms, EmailJS, or your backend endpoint to make it live.`;
    formNote.style.color = '#9df8ef';
  });
}
