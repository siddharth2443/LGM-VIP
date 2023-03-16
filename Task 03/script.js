function publishToTable() {
    const name = document.getElementById('exampleInputName').value;
    const email = document.getElementById('exampleInputEmail').value;
    const phone = document.getElementById('exampleInputPhoneno').value;
    const address = document.getElementById('exampleInputAddress').value;
    const error = document.getElementById('error');
    event.preventDefault();

  
        const tableElement = document.getElementById('table');
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const nameEle = document.createElement('td');
        const emailEle = document.createElement('td');
        const phoneEle = document.createElement('td');
        const AddEle = document.createElement('td');
        nameEle.innerHTML = name;
        emailEle.innerHTML = email;
        phoneEle.innerHTML = phone;
        AddEle.innerHTML = address;
        trElement.appendChild(nameEle);
        trElement.appendChild(emailEle);
        trElement.appendChild(phoneEle);
        trElement.appendChild(AddEle);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);
    }

