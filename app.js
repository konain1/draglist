const draggable_list = document.querySelector('.draggable-list')

let footballers = [
    'messi',
    'meradona',
    'pele',
    'ronaldo',
    'zidane',
    'maldini',
    'cruyff',
    'R9',
    'puyol',
    'ozil'
]



let lists = []


function createList(){

    [...footballers].map(a =>({value: a, sort : Math.random()})).sort((a,b)=>a.sort-b.sort).map((a)=>a.value).forEach((player,index)=>{
        console.log(player)

        let listItem = document.createElement('li')
        
        listItem.setAttribute('data-index',index)
        listItem.classList.add('listItem')
        listItem.innerHTML = `
        <span class="num">${index+1}</span>
        <div class="draggable" draggable="true"> <p class="person-name">${player}</p> </div>

        `;

        draggable_list.appendChild(listItem)

    })

    dragEvents()
}

createList();

function dragEvents(){
    const draggables = document.querySelectorAll('.draggable')
    const dragListItem = document.querySelectorAll('.draggable-list li')

    draggables.forEach((dragItem)=>{

        dragItem.addEventListener('dragstart',dragStart)
    })

    dragListItem.forEach((item)=>{
        item.addEventListener('dragover',dragOver)
        item.addEventListener('dragenter',dragEnter)

        item.addEventListener('dragleave',dragLeave)

        item.addEventListener('drop',dragDrop)

    })
    

}
function dragStart(){

}
function dragEnd(){

}

function dragOver(){
    console.log('over')

}
function dragEnter(){

}
function dragLeave(){

}
function dragDrop(){

}