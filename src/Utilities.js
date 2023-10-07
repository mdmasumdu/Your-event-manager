

const getlocastorageitem =()=>{
    const savedid = localStorage.getItem('cart')
    if(savedid){
     return JSON.parse(savedid)
       
        
    }
    return []
}


const savetols =(idx)=>{
    const saveditem = getlocastorageitem();
    console.log(idx)


    const isExist = saveditem.find(idn=> idn ===idx)
    if(!isExist){
        saveditem.push(idx)
        const stringfysaveditem = JSON.stringify(saveditem)
        localStorage.setItem('cart',stringfysaveditem)
    }
    



}




export {savetols,getlocastorageitem}