let id = 0;

document.getElementById('add-data').addEventListener('click',() => {
    let dataTable = document.getElementById('data');
    let row = dataTable.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-product-entry').value;
    row.insertCell(1).innerHTML = document.getElementById('location').value;
    row.insertCell(2).innerHTML = document.getElementById('expire-date').value;
    let options = row.insertCell(3);
    options.appendChild(createRemoveButton(id++));
    document.getElementById('new-product-entry').value = ''
    document.getElementById('expire-date').value = '';
})

function createRemoveButton(id) {
    let btnR = document.createElement('button');
    btnR.className = 'btn btn-danger';
    btnR.id = id;
    btnR.innerHTML = 'Remove';
    btnR.onclick = () => {
        console.log(`Removing row with id: item-${id}`);
        let elementToRemove = document.getElementById(`item-${id}`);
        elementToRemove.parentNode.removeChild(elementToRemove);
    };
    return btnR;
}