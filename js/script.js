const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.querySelector('body');

darkModeToggle.addEventListener('click', ()=>{
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')){
        darkModeToggle.innerHTML = '<i class="bi bi-sun"></i>';
    }else{
        darkModeToggle.innerHTML = '<i class="bi bi-moon"></i>'
    }
})

/*=== Vlidaciones del formulario===*/
const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
