let chuoiSo = prompt("Nhập dãy số ");

let mangKyTu = chuoiSo.split("");

mangKyTu.reverse();

let chuoiDaoNguoc = mangKyTu.join("");

alert(`Chuỗi đảo ngược: ${chuoiDaoNguoc}`);
