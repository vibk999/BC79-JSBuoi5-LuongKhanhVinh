//Bai 1
let xetDau = () => {
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let diem1 = document.getElementById("diem1").value * 1;
  let diem2 = document.getElementById("diem2").value * 1;
  let diem3 = document.getElementById("diem3").value * 1;
  let khuVuc = document.getElementById("khuVuc").value;
  let doiTuong = document.getElementById("doiTuong").value * 1;
  let result = document.getElementById("result1");
  let diemUuTien = 0;
  switch (khuVuc) {
    case "A":
      diemUuTien += 2;
      break;
    case "B":
      diemUuTien += 1;
      break;
    case "C":
      diemUuTien += 0.5;
      break;
    case "X":
      diemUuTien += 0;
      break;
    default:
      return alert("vui lòng nhập lại khu vực");
  }
  switch (doiTuong) {
    case 1:
      diemUuTien += 2.5;
      break;
    case 2:
      diemUuTien += 1.5;
      break;
    case 3:
      diemUuTien += 1;
      break;
    case 0:
      diemUuTien += 0;
      break;
    default:
      return alert("vui lòng nhập lại đối tượng");
  }
  let diemTong = diem1 + diem2 + diem3 + diemUuTien;
  if (diemChuan <= diemTong) {
    // console.log("Yay bạn đậu với số điểm là", diemTong);
    result.innerHTML = `Yay bạn đậu với số điểm là ${diemTong}`;
  } else {
    // console.log("Nah rớt rùi, điểm là:", diemTong);
    result.innerHTML = `Nah rớt rùi, điểm là ${diemTong}`;
  }
};

//Bài 2
let tinhTienDien = () => {
  let ten = document.getElementById("ten").value;
  let soKW = document.getElementById("soKW").value * 1;
  let tienDien = 0;
  let result = document.getElementById("result2");
  if (soKW <= 50) {
    tienDien = soKW * 500;
  } else if (soKW > 50 && soKW <= 100) {
    tienDien = 50 * 500 + (soKW - 50) * 650;
  } else if (soKW > 100 && soKW <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (200 - soKW) * 850;
  } else if (soKW > 200 && soKW <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 650 + (350 - soKW) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 650 + 350 * 1100 + (soKW - 350) * 1300;
  }
  result.innerHTML = `bạn ${ten} có tổng tiền điện là ${tienDien}`;
};
// Bài 3
xetThuNhapChiuThue = (tongThuNhap) => {
  let xetThuNhapChiuThue = 0;
  if (tongThuNhap <= 60) {
    xetThuNhapChiuThue = 5 / 100;
  } else if (tongThuNhap > 60 && tongThuNhap <= 120) {
    xetThuNhapChiuThue = 10 / 100;
  } else if (tongThuNhap > 120 && tongThuNhap <= 210) {
    xetThuNhapChiuThue = 15 / 100;
  } else if (tongThuNhap > 210 && tongThuNhap <= 384) {
    xetThuNhapChiuThue = 20 / 100;
  } else if (tongThuNhap > 384 && tongThuNhap <= 624) {
    xetThuNhapChiuThue = 25 / 100;
  } else if (tongThuNhap > 624 && tongThuNhap <= 960) {
    xetThuNhapChiuThue = 30 / 100;
  } else {
    xetThuNhapChiuThue = 35 / 100;
  }
  return xetThuNhapChiuThue;
};
tinhThueThuNhap = () => {
  let ten = document.getElementById("ten2").value;
  let tongThuNhap = document.getElementById("tongThuNhap").value * 1;
  let nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
  let tongThuNhapCuoiCung = tongThuNhap - 4 - nguoiPhuThuoc * 1.6;
  let result = document.getElementById("result3");
  let thuephaiChiu = xetThuNhapChiuThue(tongThuNhapCuoiCung);
  console.log("thue phải chịu:", thuephaiChiu);
  let tienThuephaiTra = thuephaiChiu * tongThuNhap;
  result.innerHTML = `bạn ${ten} phải chịu thuế là ${tienThuephaiTra}Triệu đồng`;
};

// Bai 4

// let disable = () => {
//   let loaiKhachHang = document.getElementById("loaiKhachHang").value;
//   let dis = document.getElementById("soKetNoi").value;
//   if (loaiKhachHang.value == "personal") {
//     dis.innerHTML = `<input disable>`;
//   } else {
// //     dis.innerHTML = `<input activiate'>`;
// //   }

//   console.log(loaiKhachHang);
// };
let tinhTienCap = () => {
  let tienCap = 0;
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  let soKetNoi = document.getElementById("soKetNoi").value * 1;
  let soKenh = document.getElementById("soKenh").value * 1;

  switch (loaiKhachHang) {
    case "personal": {
      let phiHoaDonNhaDan = 4.5;
      let phiDichVu = 20.5;
      let phiThueKenh = 7.5;
      tienCap = phiHoaDonNhaDan + phiDichVu + soKenh * phiThueKenh;
      // return tienCap;
      break;
    }
    case "group": {
      let phiHoaDonDoanhNghiep = 15;
      let phiThueKenh = 50;
      let phiDichVu = 7.5;
      let tienKetNoi =
        soKetNoi <= 10
          ? soKetNoi * phiDichVu
          : phiDichVu * 10 + (soKetNoi - 10) * 5;
      tienCap = phiHoaDonDoanhNghiep + tienKetNoi + phiThueKenh * soKenh;
      // return tienCap;
      break;
    }
    default:
      alert("vui lòng chọn lại");
      break;
  }
  let result = document.getElementById("result4");
  result.innerHTML = `bạn  có tổng tiền cáp là ${tienCap}$`;
};
// let tienCap1 = tinhTienCap("personal", 0, 5);
// console.log("tienCap1:", tienCap1);
// let tienCap2 = tinhTienCap("group", 15, 20);
// console.log("tienCap2:", tienCap2);
