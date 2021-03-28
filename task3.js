let hasil="";
let arraybaru=[];
function SeleksiNilai(a,b,nilaiAwal) {
  console.log(nilaiAwal + "\n\n");
  
  if(a>b){
    console.log("Nilai akhir harus lebih besar dari nilai awal")
    }else if(nilaiAwal.length <5){
        console.log("jumlah angka dalam array tidak ada");
          }else{
          for(i=0; i<nilaiAwal.length; i++){
          if(nilaiAwal[i]>a && nilaiAwal[i] <b){
          arraybaru.push(nilaiAwal[i])
          }
       }
       if(arraybaru.length ==0){
         return console.log('jumlah angka tidak ada')
       }else{
         arraybaru=arraybaru.sort((a,b)=>a-b);
         return console.log(arraybaru);
       }
    }
  }



SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
