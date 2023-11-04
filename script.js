       // JavaScript code for adding and removing tasks
       const taskList = document.getElementById('task-list');
       const taskInput = document.getElementById('task-input');
       const addButton = document.getElementById('add-button');

       addButton.addEventListener('click', () => {
           const taskName = taskInput.value.trim();

           if (taskName !== '') {
               const listItem = document.createElement('li');
               listItem.innerHTML = `
                   <span class="task-name">${taskName}</span>
                   <button class="remove-button">Remove</button>
               `;

               taskList.appendChild(listItem);
               taskInput.value = '';

               // Add a click event to the remove button
               const removeButton = listItem.querySelector('.remove-button');
               removeButton.addEventListener('click', () => {
                   taskList.removeChild(listItem);
               });
           }
       });