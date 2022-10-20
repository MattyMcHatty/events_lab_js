document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  function handleFormSubmit() {

    event.preventDefault();
    const listItem = document.createElement('li');
    listItem.textContent= `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;
    
    const list = document.querySelector('ul');
    list.append(listItem);

    document.getElementById("new-item-form").reset();



  };

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete All";
  document.body.appendChild(deleteButton);

  deleteButton.onclick = function() {

    var myList = document.getElementById('reading-list');
    myList.innerHTML = '';

  }


})
