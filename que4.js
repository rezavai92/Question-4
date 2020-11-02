function wearPPE() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Wearing PPE'), 2000);
    })
}

function fightCorona() {
    return new Promise((resolve) => {

       
      setTimeout(()=>{
               
        resolve("fighting corona")},1000)  

    } )
}
function execute() {
    wearPPE().then(result => console.log(result));
    fightCorona().then(result => setTimeout(()=>{console.log(result)},1000) );
}

execute();

