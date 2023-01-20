document.getElementById('diceBtn').onclick=function(){
    let diceThrown1=Math.floor(Math.random()*6)+1
    let diceThrown2=Math.floor(Math.random()*6)+1
    let diceThrown3=Math.floor(Math.random()*6)+1
    document.getElementById('diceLabel1').innerHTML=diceThrown1+' -'
    document.getElementById('diceLabel2').innerHTML=diceThrown2+' -'
    document.getElementById('diceLabel3').innerHTML=diceThrown3
}

