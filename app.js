const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const BoxTop = box.getBoundingClientRect().top

        if(triggerBottom > BoxTop){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    });
}