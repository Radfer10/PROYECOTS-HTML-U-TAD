window.onload = function() {
    candyCrushGame();
};

function candyCrushGame(){
    const tablero =document.querySelector(".tablero")
    console.log(tablero)//borrar
    const scoreDisplay = document.getElementById("score")
    const widht = 0 
    const squares = []
    let score = 0 

    const imageFolder = 'iconos-git-crash/';
    const candyColors = [
        'estrellas (1).png',
        'github.png',
        'githubverde.png',
        'githubverdeblue.png',
        'icon.png',
        'personaje-github.png'
    ];
    console.log(candyColors);//borrar
    function createBoard(){
        for(let i=0; i < widht * width; i++){
            const square = document.createElement("div")
            square.setAttribute("draggble",true)
            square.setAttribute("id", i)
            let randomColor = Math.floor(Math.random()* candyColors.length)
            square.style.backgroundImage = candyColors[randomColor]
            tablero.appendChild(square)
            square.push(square)
        }
    }
    createBoard()

    squares.forEach((square) => square.addEventListener("dragstart",dragStart))
    squares.forEach((square) => square.addEventListener("dragend",dragEnd))
    squares.forEach((square) => square.addEventListener("dragover",dragOver))
    squares.forEach((square) => square.addEventListener("dragenter",dragEnter))
    squares.forEach((square) => square.addEventListener("dragleave",dragLeave))
    squares.forEach((square) => square.addEventListener("drop",dragDrop))

    function dragStart(){
        colorBeingDragged = this.style.backgroundImage
        squareIdBeingDragged = parseInt(this.id)

    }

    function dragOver(e){
        e.preventDefault()
    }
    function dragEnter(e){
        e.preventDefault()
    }
    function dragLeave(){
        this.style.backgroundImage = ""
    }

    function dragDrop(){
        colorBeingReplaced = this.style.backgroundImage
        squareIdBeingReplaced = parseInt(this.id)
        this.style.backgroundImage = colorBeingDragged
        squares [
            squareIdBeingDragged
        ].style.backgroundImage = colorBeingDragged
    }

    function dragEnd(){
        let validMoves = [
            squareIdBeingDragged - 1,
            squareIdBeingDragged - widht,
            squareIdBeingDragged + 1,
            squareIdBeingDragged + widht
        ]
        let validMove = validMoves.includes(squareIdBeingDragged)

        if (squareIdBeingDragged && validMove){
            squareIdBeingReplaced = null
        }else if (squareIdBeingDragged && !validMove){
            squares[
                squareIdBeingReplaced
            ].style.backgroundImage = colorBeingReplaced
            squares[
                squareIdBeingDragged
            ].style.backgroundImage = squareIdBeingDragged
        }else
        squares[
            squareIdBeingDragged
        ].style.backgroundImage = squareIdBeingDragged
    }

    function moveIntoSquareBelow(){
        for(i=0; i<55; i++){
            if(squares(i + widht).style.backgroundImage === ""){
                squares(i + widht).style.backgroundImage = square[i].style.backgroundImage
                squares[i].style.backgroundImage = ""
                const firstRow = [0,1,2,3,4,5,6,7]
                const isFirstRow = firstRow.includes(i)
                if(isFirstRow && squares[i].style.backgroundImage ===""){
                    let randomColor = Math.floor(
                        Math.random() * candyColors.length
                    )
                    squares[i].style.backgroundImage = candyColors[randomColor]

                }
            }
        }
    }
    
    function checkRowForFour(){
        for(i=0;i<60;i++){
            let rowOffour = [i,i+1, i+2,i+3]
            let decideColor = squares[i].style.backgroundImage
            const isBlank = squares[i].style.backgroundImage === ""

            const noValid = [
                5,6,7,13,14,15,21,22,23,29,30,31,37,28,45,46,47,53,54,55

            ]
            if(noValid.includes(i)) continue
            
            if(rowOffour.every((index) => squares[index]
            .style.backgroundImage === decideColor && isBlank))
            score += 4
            scoreDisplay.innerHTML = score
            rowOffour.forEach((index)=>{
                squares[index].style.backgroundImage = ""
            })
        }
    } 
    checkRowForFour()
    function checkColumnForFour(){
        for(i=0;i< 39;i++){
            let columnOffour = [i,i+widht, i*widht,i*widht]
            let decideColor = squares[i].style.backgroundImage
            const isBlank = squares[i].style.backgroundImage === ""

            
            if(noValid.includes(i)) continue
            
            if(rowOffour.every((index) => squares[index]
            .style.backgroundImage === decideColor && isBlank))
            score += 4
            scoreDisplay.innerHTML = score
            rowOffour.forEach((index)=>{
                squares[index].style.backgroundImage = ""
            })
        }
    }


}