//toString()
// method toString() ini berfungsi sebagai nilai dari variabel akan diubah menjadi nilai String.
let a=2;
let b=130;
console.log(a.toString()+b);

//ceil()
// method ceil() ini berfungsi sebagai pembulatan pada nilai parameter.
c=Math.ceil(2.34);
console.log(c);

//indexOf()
//indexOf() ini berfungsi sebagai menampilkan pada nomor index dari data array yang dituju.
var hari=new Array('Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu');
let kamis=hari.indexOf('Kamis');
console.log("indeks kamis  : "+kamis+"");

//sort()
//sort() ini berfungsi sebagai mengurutkan data array sesuai yang diinginkan.
hari.sort();
console.log(""+hari+"");


//slice()
//slice() ini berfungsi untuk memotong pada urutan index yang diinginkan.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(4));

//push()
//push() ini berfungsi sebagai penambah data ke dalam array yang nantinya ditempatkan di paling akhir.
hari.push("akhir");
console.log(hari);

//unshift()
//unshift() ini berfungsi sebagai penambah data ke dalam array yang nantinya ditempatkan di paling awal.
hari.unshift("awal");
console.log(hari);

//concat()
//concat() ini berfungsi sebagai menggabungkan array menjadi satu.
arraygabungan = hari.concat(animals);
console.log(arraygabungan);

//lenght()
//lenght() ini berfungsi memberi info panjangnya suatu data.
console.log(animals.length);

//pop()
//pop() ini berfungsi sebagai menghapus data nilai array paling akhir.

let pop=animals.pop();
console.log(pop);