const sudo = [
    ['4', '3', '5', '2', '6', '9', '7', '8', '1'],
    ['6', '8', '2', '5', '7', '1', '4', '9', '3'],
    ['1', '9', '7', '8', '3', '4', '5', '6', '2'],
    ['8', '2', '6', '1', '9', '5', '3', '4', '7'],
    ['3', '7', '4', '6', '8', '2', '9', '1', '5'],
    ['9', '5', '1', '7', '4', '3', '6', '2', '8'],
    ['5', '1', '9', '3', '2', '6', '8', '7', '4'],
    ['2', '4', '8', '9', '5', '7', '1', '3', '6'],
    ['7', '6', '3', '4', '1', '8', '2', '5', '9']
]

//randomizes the board
for(let i=0;i<50;i++){
    sudo[Math.floor(Math.random()*10)%9][Math.floor(Math.random()*10)%9]='';
}


//Creates board
grid = document.getElementById('grid');
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        var k = '_'+i+''+j;
        createdElement = document.createElement('div');
        createdElement.setAttribute("class", "square");
        createdElement.setAttribute("id", k)
        if(sudo[i][j]!=''){
            createdElement.style.background="#574D91";
            createdElement.innerText=sudo[i][j]
        }
        if (sudo[i][j]=='') {
            createdElement.classList.add(k);
        }

        grid.appendChild(createdElement);
    }
}
//

//creates number selector row
selector=document.getElementById('number');
for (let i = 1; i <= 9; i++) {
    createdElement=document.createElement('div');
    createdElement.setAttribute("id", i);
    createdElement.setAttribute("class", "select");
    createdElement.innerText=i;
    selector.appendChild(createdElement);
}

//addes eventlistener to number selector row
var store_num;
for (let i = 1; i <= 9; i++) {
    // for (let j = 0; j < 9; j++) {
      const temp=document.getElementById(i);
       temp.addEventListener('click', ()=>{
           store_num=temp.innerText;

       })
    }
//

//Edits the board
var ed=document.getElementById('edit');
var edit=false;
ed.addEventListener('click',()=>{
    store_num='';
    edit=true;
})
//

//addes event listener to the board
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if(sudo[i][j]==''){
            var k = '_'+i+''+j;
            const temp=document.getElementById(k);
            temp.addEventListener('click', ()=>{
                temp.style.background="#0e073a";
                if(edit) temp.innerText=store_num;
                else temp.innerText=store_num;
            })
        }
    }
}
//


//checks for error
function check_error(){
    var error=false;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            var k = '_'+i+''+j;
            var cell=document.getElementsByClassName(k).length;
            var temp=document.getElementById(k).innerText;
            if(cell!=0 && temp!=''){
                //checks coloumns
                for(let p=0;p<9;p++){
                    if(p!=i){
                        if(document.getElementById('_'+p+''+j).innerText==temp){  
                            
                            error=true;
                        }
                        else{
                            document.getElementById(k).style.background="#0e073a";
                        }
                    }

                }
                //

                //checks rows
                for(let p=0;p<9;p++){
                    if(p!=j){
                        if(document.getElementById('_'+i+''+p).innerText==temp){   
                            
                            error= true;
                        }
                        else{
                            document.getElementById(k).style.background="#0e073a";
                        }
                    }
                }
                //
                
                //checks 3x3 box
               var row=Math.floor(i/3)*3;
               var column=Math.floor(j/3)*3;
                for(let m=row;m<row+3;m++){
                    for(let n=column;n<column+3;n++){
                        if(m!=i && n!= j){
                            if(document.getElementById('_'+m+''+n).innerText==temp){
                                
                                error=true;
                            }
                            else{
                                document.getElementById(k).style.background="#0e073a";
                            }
                        }
                    }
                }
                if(error){
                    document.getElementById(k).style.background="red";
                    var t=error;
                }
                error= false;

            }

        }
    }
    
    
    if(t) return true;
    else return false;
    
}
//

//adds event listener to check button
ch=document.getElementById('check');
ch.addEventListener('click',()=>{
    if(!check_error()){
        alert("no error");
    }
    // else{
    //     alert("no error");
    // }
} )
//

//adds event listener to submit button
var sub=document.getElementById('submit');
sub.addEventListener('click', ()=>{
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            var k = '_'+i+''+j;
            var cell=document.getElementById(k).innerText;
            if(check_error()){
                alert("errors detected");
                return;
            }
            if(cell==''){
                alert("fill every cell");
                return;
            }
            
        }
    }
    alert("you won");
            
})
//




    



