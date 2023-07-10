const signUp = e => {
    e.preventDefault();
    let formData = {
        expense: document.getElementById('expense').value,
        description: document.getElementById('description').value,
        list: document.getElementById('datalist').value
    }
    localStorage.setItem(formData.description,JSON.stringify(formData));
    displayData(formData);
}

function displayData(formData){
    var parentElement = document.getElementById('output');
    var childElement = document.createElement('li');
  
  
    childElement.textContent = formData.expense+' - '+formData.description+' - '+formData.list+" ";

     //    ---------- Edit Button -----------//
    var editButton = document.createElement('input');
    editButton.type = 'button';
    editButton.value = 'edit expense';

    editButton.onclick = () => {
        localStorage.removeItem(formData);
        parentElement.removeChild(childElement);
        document.getElementById('expense').value = formData.expense;
        document.getElementById('description').value = formData.description;
        document.getElementById('datalist').value = formData.list;  
      }

  childElement.appendChild(editButton);
  parentElement.appendChild(childElement);
    
      //    ---------- Delete Button -----------//
  
    var delButton = document.createElement('input');
    delButton.type = 'button';
    delButton.value = 'Delete expense';
  
    delButton.onclick = () => {
      localStorage.removeItem(formData.description);
      parentElement.removeChild(childElement);
    }
    childElement.appendChild(delButton);
    parentElement.appendChild(childElement);
}