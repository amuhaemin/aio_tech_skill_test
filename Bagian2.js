// Bagian 2
// No.1
function multiTable(row, col) {
    let arrTable = [];
    
    for (let i=0; i<row; i++) {
    let rowArr = [];
        for (let j=0; j<col; j++) {
            rowArr.push((j+1) * (i+1)); 			
        }
    arrTable.push(rowArr);
    }
    
    return arrTable;
}

//No. 2

const PECAHAN_UANG = [
    100000,50000,20000,10000,5000,2000,1000
    ]
    
    let obj = {};
    
    function hitungPecahan(input) {
        let pecahan = 0;
        while (pecahan > 0) {
            pecahan = loop(pecahan);
        }
        
        return obj;
        
    }
    
    function loop(curr) {
        let sisa = 0;
        for (let i = 0; i < PECAHAN_UANG.length; i++) {
            if (curr > PECAHAN_UANG[i]) {
                if (obj.PECAHAN_UANG[i]) {
                    obj.PECAHAN_UANG[i] = obj.PECAHAN_UANG[i] + 1;
                } else {
                    obj.PECAHAN_UANG[i] = 1;
                }
                sisa = curr - PECAHAN_UANG[i];
                return sisa;
            }	
        }
    }