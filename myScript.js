document.querySelectorAll('.card').forEach((val) => {
    val.addEventListener('click', (e) => {
        if (val.dataset.target == '1') {
            document.querySelector('.card-index-1').classList.add('card-active');
            document.querySelector('.card-index-2').classList.remove('card-active');
            document.querySelector('.card-index-3').classList.remove('card-active');
        } else if (val.dataset.target == '2') {
            document.querySelector('.card-index-1').classList.remove('card-active');
            document.querySelector('.card-index-2').classList.add('card-active');
            document.querySelector('.card-index-3').classList.remove('card-active');
        } else {
            document.querySelector('.card-index-1').classList.remove('card-active');
            document.querySelector('.card-index-2').classList.remove('card-active');
            document.querySelector('.card-index-3').classList.add('card-active');
        }
    });
});

document.querySelectorAll('.card button').forEach(val => {
    val.addEventListener('click', (e) => {
        alert('Thank you..!');
        document.querySelector('.alert-success').classList.remove('display-none');
        document.querySelector('.alert-success').innerHTML = `<p> You have been purchasing the order ${e.currentTarget.parentNode.querySelector('.card-price span:nth-child(2)').textContent} $ <i style="float:right; cursor:pointer;" onclick="closealert()" class="fa fa-times-circle" aria-hidden="true"></i>`;
    });
});

function closealert() {
    document.querySelector('.alert-success').classList.add('display-none');
}