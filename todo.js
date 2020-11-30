const todoBtnElem = document.querySelector('.todo-btn');
const containerElem = document.querySelector('.container');
const todo = 
    `<div class="todo">
        <div class="todo-list">
            <span><i class="far fa-check-square"></i></span>
            <input class="todo-content" placeholder="입력"></input>
            <span><i class="fas fa-trash-alt"></i></span>
        </div>
    </div>`;

function containerHandler(event) { 
    let eventTarget = event.target
    if(event.target === todoBtnElem) { //추가하기
        todoBtnElem.insertAdjacentHTML('beforebegin', todo);
    }

    if(event.target.classList.contains('fa-check-square')) {  //체크여부
        event.target.parentNode.innerHTML = '<i class="fas fa-check"></i>';
    } else if(event.target.classList.contains('fa-check')) {
        event.target.parentNode.innerHTML = '<i class="far fa-check-square"></i>';
    }
    if(event.target.classList.contains('fa-trash-alt')) { //삭제하기
        while(!eventTarget.classList.contains('todo')) {
            eventTarget = eventTarget.parentNode;
        }
        eventTarget.remove();
    }
}

containerElem.addEventListener('click', containerHandler);