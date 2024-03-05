function display(x){
    document.getElementById('result').value+=x
}


function clr(){
    document.getElementById('result').value=""
}

function solve(){

    try{
    let x=document.getElementById('result').value
    let y=eval(x)
    document.getElementById('result').value=y
    }
    catch{
        document.getElementById('result').value="Error"
    }

    
}