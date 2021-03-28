const name = [  'Abigail', 'Alexandra', 'Alison','Amanda', 'Angela', 'Bella','Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth','Ella', 'Faith', 'Olivia', 'Penelope']     
    
    
    const searchName =(keyword, limit, callback)=>{
        const saring = name.filter(str =>{return str.toLowerCase().includes(keyword) })
        const batas =saring.slice(0,limit)
        callback(batas)        
        //let slice = name.slice(1, limit);
    }
    function output(hasil){
        console.log(hasil)
    }
    
    searchName('an',3,output)
/* 

function nilai(keyword,limit){

}
nilai("an",3); */