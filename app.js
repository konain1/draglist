const draggable_list = document.querySelector('.draggable-list')
const check = document.getElementById('check')
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
let dragStartIndex;

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
        lists.push(listItem)

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
    console.log('start')
    dragStartIndex = +this.closest('li').getAttribute('data-index')

    }
    function dragEnd(){
    console.log('end')
    }

    function dragOver(e){
        e.preventDefault();
        console.log('over')

    }
    function dragEnter(){
        this.classList.add('enter')

    }
    function dragLeave(){
        this.classList.remove('leave')

    }
    function dragDrop(){

    let dragEndIndex = +this.getAttribute('data-index');
        swapIt(dragStartIndex,dragEndIndex)
    } 

    function swapIt(toIndex,fromIndex){

        const y = lists[toIndex].querySelector('.draggable')
        const x = lists[fromIndex].querySelector('.draggable')
        lists[toIndex].appendChild(x)
        lists[fromIndex].appendChild(y)

    }

    check.addEventListener('click',()=>{

        lists.forEach((item,index)=>{

            let playerName = item.querySelector('.draggable').innerText.trim()

            if(playerName !== footballers[index]){
                item.classList.add('wrong')
            }else{
                item.classList.remove('wrong')
                item.classList.add('right')

            }
        })
    })