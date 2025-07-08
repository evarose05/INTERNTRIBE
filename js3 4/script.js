fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const tbody = document.querySelector('#userTable tbody');

    users.forEach(user => {
      const row = document.createElement('tr');

      const nameTd = createCell(user.name);
      const emailTd = createCell(user.email);
      const usernameTd = createCell(user.username);
      const phoneTd = createCell(user.phone);

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.className = 'edit-btn';
      const editTd = document.createElement('td');
      editTd.appendChild(editBtn);

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete-btn';
      const deleteTd = document.createElement('td');
      deleteTd.appendChild(deleteBtn);

      row.append(nameTd, emailTd, usernameTd, phoneTd, editTd, deleteTd);
      tbody.appendChild(row);

      editBtn.addEventListener('click', () => {
        const isEditing = editBtn.textContent === 'Save';
        [nameTd, emailTd, usernameTd, phoneTd].forEach(td => {
          if (isEditing) {
            td.textContent = td.querySelector('input').value;
          } else {
            const input = document.createElement('input');
            input.value = td.textContent;
            td.textContent = '';
            td.appendChild(input);
          }
        });
        editBtn.textContent = isEditing ? 'Edit' : 'Save';
      });

      deleteBtn.addEventListener('click', () => {
        row.remove();
      });
    });
  });

function createCell(text) {
  const td = document.createElement('td');
  td.textContent = text;
  return td;
}