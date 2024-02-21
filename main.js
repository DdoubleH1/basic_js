const danhSachSinhVien = [];

function themSinhVien(maSV, hoTen, ngaySinh, lopHoc, diemGPA) {
    const sinhVien = {
        maSV,
        hoTen,
        ngaySinh,
        lopHoc,
        diemGPA,
    };
    danhSachSinhVien.push(sinhVien);
    hienThiDanhSachSinhVien();
}

function hienThiDanhSachSinhVien() {
    const danhSachSinhVienElement = document.getElementById("danh-sach-sinh-vien");
    danhSachSinhVienElement.innerHTML = "";

    for (const sinhVien of danhSachSinhVien) {
        const sinhVienElement = document.createElement("div");
        sinhVienElement.classList.add("sinh-vien");

        sinhVienElement.innerHTML = `
            <p>Mã sinh viên: ${sinhVien.maSV}</p>
            <p>Họ và tên: ${sinhVien.hoTen}</p>
            <p>Ngày tháng năm sinh: ${sinhVien.ngaySinh}</p>
            <p>Lớp học: ${sinhVien.lopHoc}</p>
            <p>Điểm GPA: <span class="math-inline">\{sinhVien\.diemGPA\}</p\>
<button onclick\="capNhatSinhVien\('</span>{sinhVien.maSV}')">Cập nhật</button>
        `;

        danhSachSinhVienElement.appendChild(sinhVienElement);
    }
}

function capNhatSinhVien(maSV) {
    // Lấy thông tin sinh viên cần cập nhật
    const sinhVien = danhSachSinhVien.find((sv) => sv.maSV === maSV);

    // Hiển thị modal với thông tin sinh viên
    // ...

    // Lấy thông tin mới từ modal
    // ...

    // Cập nhật thông tin sinh viên
    sinhVien.hoTen = "Tên mới";
    sinhVien.ngaySinh = "Ngày sinh mới";
    sinhVien.lopHoc = "Lớp mới";
    sinhVien.diemGPA = "Điểm GPA mới";

    // Hiển thị lại danh sách sinh viên
    hienThiDanhSachSinhVien();
}

const formNhapSinhVien = document.getElementById("form-nhap-sinh-vien");
formNhapSinhVien.addEventListener("submit", (event) => {
    event.preventDefault();

    const maSV = document.getElementById("ma-sv").value;
    const hoTen = document.getElementById("ho-ten").value;
    const ngaySinh = document.getElementById("ngay-sinh").value;
    const lopHoc = document.getElementById("lop-hoc").value;
    const diemGPA = document.getElementById("diem-gpa").value;

    
})