export default function decorate(block) {
  const formItemsList = block.querySelector('ul');
  if (!formItemsList) return;

  const items = [...formItemsList.querySelectorAll('li')];

  const form = document.createElement('form');
  form.className = 'nexora-form';
  form.noValidate = true;

  const fields = [];

  items.forEach((li) => {
    const label = li.textContent.trim();
    const inputID = label.toLowerCase().replace(/\s+/g, '-');

    if (label.toLowerCase() === 'submit') {
      const btn = document.createElement('button');
      btn.className = 'button primary';
      btn.type = 'submit';
      btn.textContent = 'Send Message';
      form.append(btn);
      return;
    }

    const field = document.createElement('div');
    field.className = 'form-field';

    const lbl = document.createElement('label');
    lbl.textContent = label;
    lbl.setAttribute('for', inputID);

    let input;
    if (label.toLowerCase().includes('message')) {
      input = document.createElement('textarea');
      input.rows = 4;
    } else {
      input = document.createElement('input');
      input.type = label.toLowerCase().includes('email') ? 'email' : 'text';
    }

    input.name = inputID;
    input.id = inputID;
    input.required = true;

    const error = document.createElement('div');
    error.className = 'form-error';

    field.append(lbl, input, error);
    form.append(field);

    fields.push({ input, error, label });
  });

  formItemsList.replaceWith(form);

  // Submit handling
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fields.forEach(({ input, error, label }) => {
      error.textContent = '';

      if (!input.value.trim()) {
        error.textContent = `${label} is required`;
      } else if (input.type === 'email' && !/^\S+@\S+\.\S+$/.test(input.value)) {
        error.textContent = 'Enter a valid email address';
      }
    });
  });
}
