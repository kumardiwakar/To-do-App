let btn = document.getElementById('btn');
let input = document.getElementById('inputWork');
let workList = document.getElementById('workList');

let currentlyEditing = null;

btn.addEventListener("click", function () {
  const value = input.value.trim();

  if (value === "") {
    alert("Please write work");
    return;
  }

  if (btn.innerText === 'Edit' && currentlyEditing !== null) {
    currentlyEditing.querySelector('.task-text').innerText = value;
    btn.innerText = 'Add';
    input.value = '';
    currentlyEditing = null;
  } else if (btn.innerText === 'Add') {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.innerText = value;

    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group'; // aligns buttons horizontally

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm btn-outline-warning';
    editBtn.innerText = 'Edit';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm btn-outline-danger';
    deleteBtn.innerText = 'Delete';

    // Delete action
    deleteBtn.addEventListener('click', () => {
      workList.removeChild(li);
    });

    // Edit action
    editBtn.addEventListener('click', () => {
      input.value = span.innerText;
      btn.innerText = 'Edit';
      currentlyEditing = li;
    });

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);
    workList.appendChild(li);

    input.value = '';
  }
});
