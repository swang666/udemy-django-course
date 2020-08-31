var cells = document.querySelectorAll('td')

cells.forEach(cell => {
    cell.addEventListener('click', function(){
        if (cell.textContent == ' '){
            cell.textContent = 'X'
        }else if (cell.textContent == 'X'){
            cell.textContent = 'O'
        }else{
            cell.textContent = ' '
        }
    })
})
