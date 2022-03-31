// Bagian 3
// No. 1

function tonaseCalc(input) {
  let min = 21;
  let max = 24;
  if (input < min) {
    console.log(`Tonase tidak sesuai order, harus order dengan range ${min} - ${max}`);
  } else if (input > max) {
    let tempMax = max;
    let tempMin = min;
    while (input > tempMax) {
      tempMax = tempMax * 2;
      tempMin = tempMin * 2;
    }
    console.log(`Tonase tidak sesuai order, harus order dengan range ${tempMin} - ${tempMax}`);
  } else {
    console.log(`Tonase sesuai order ${min} - ${max}`);
  }
}

// No.2 -- unfinished

function hitungKarton(productCode, amount) {
  //contoh untuk memudahkan, bisa jadi isi arrProdObj lebih dari 1
  let arrProdObj = [
    {
      nama: 'Pocari Sweat',
      code: 'POC1',
      isi: 24,
      harga: 12000,
    },
  ];

  let warning = '';
  let objHasil = {};
  for (obj in arrProdObj) {
    if (obj.code == productCode) {
      if (amount < obj.isi) {
        let kurang = obj.isi - amount;
        warning = `Tidak bulat dalam karton, recommended to add: ${kurang}`;
      } else if (amount > obj.isi) {
        let lebih = amount - obj.isi;
      }
    }
  }
}
