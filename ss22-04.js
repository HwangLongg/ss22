let chuoiSo = prompt("Nhập dãy số:");

let mangSo = chuoiSo.split("");

let soLonNhat = parseInt(mangSo[0]);

for (let i = 1; i < mangSo.length; i++) {
  
  let soHienTai = parseInt(mangSo[i]);

  if (soHienTai > soLonNhat) {
    
    soLonNhat = soHienTai;
  }
}
console.log("Số lớn nhất trong dãy là:", soLonNhat);
