function ktTen(){
    var ten = document.getElementById("txtten").value;
    var patten =  /^\w{3,}$/;
    if(patten.test(ten)){
        document.getElementById("er1").innerHTML = "";
        txtten.style.border = "none";
        return true;
    }else{
        document.getElementById("er1").innerHTML = "(*) Tên lớn hơn 3 ký tự và không chưa ký tự đặt biệt";
        txtten.style.border = "1px solid red";
        return false;
    }
}
function ktMK(){
    var mk = document.getElementById("txtpwdk").value;
    var patten = /^.{6,}$/;
    if(patten.test(mk)){
        document.getElementById("er2").innerHTML = "";
        txtpwdk.style.border = "none";
        return true;
    }else{
        document.getElementById("er2").innerHTML = "(*) Mật khẩu phải hơn 6 ký tự";
        txtpwdk.style.border = "1px solid red";
        return false;
    }
}
function checkMK(){
    var mk1, mk2;
    mk1 = document.getElementById("txtpwdk").value;
    mk2 = document.getElementById("checkpw").value;
    if(mk1 == mk2){
        document.getElementById("er4").innerHTML = "";
        checkpw.style.border = "none";
        return true;
    }else{
        document.getElementById("er4").innerHTML = "(*) Mật khẩu không trùng khớp";
        checkpw.style.border = "1px solid red";
        return false;
    }
    
}
function ktEmail(){
    var email = document.getElementById("txtemail").value;
    var patten = /^\w+@gmail\.com$/;
    if(patten.test(email)){
        document.getElementById("er3").innerHTML = "";
        txtemail.style.border = "none";
        return true;
    }else{
        document.getElementById("er3").innerHTML = "(*) Email phải có @gmail.com";
        txtemail.style.border = "1px solid red";
        return false;
    }
}
function ketqua(){
    if(ktTen() == false || ktMK() == false || checkMK() == false || ktEmail() == false){
        document.getElementById("thongbao").innerHTML = "Mời bạn nhập đầy đủ các thông tin bắt buộc(*)";
        return false;
    }else{
        var ten = document.getElementById("txtten").value;
        var mk = document.getElementById("txtpwdk").value;
        var email = document.getElementById("txtemail").value;
        localStorage.setItem("name", ten);
        localStorage.setItem("password", mk);
        localStorage.setItem("Email", email);
        $('#myModaldk').modal('hide');
        alert("Đăng ký thành công");
        return true;
    }
}
