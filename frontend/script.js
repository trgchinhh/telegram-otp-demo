document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginform").addEventListener("submit", async function (event) {
        event.preventDefault();
        const formdata = new FormData(this);
        const data = {
            username: formdata.get("username"),
            password: formdata.get("password")
        };
        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if (response.status === 200) {
                document.getElementById("passwordfield").style.display = "none";
                document.getElementById("userfield").style.display = "none";
                document.getElementById("loginbutton").style.display = "none";
                document.getElementById("otpfield").style.display = "flex";
                document.getElementById("confirmbutton").style.display = "block";
            } else {
                alert("Xác thực thất bại!");
            }
        } catch (error) {
            console.error(error);
            alert("Không thể kết nối tới server !");
        }
    });

    document.getElementById("confirmbutton").addEventListener("click", async function () {
        const userotp = document.getElementById("otp").value;
        try {
            const response = await fetch("http://localhost:3000/confirm", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userotp })
            });
            if (response.status === 200) {
                alert("Đăng nhập thành công !");
            } else {
                alert("Đăng nhập thất bại !");
            }
        } catch (error) {
            console.error(error);
            alert("Không thể kết nối tới server xác thực OTP !");
        }
    });

    document.getElementById("showhidepassword").addEventListener("click", function () {
        const passwordInput = document.getElementById("password");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            this.textContent = "Ẩn";
        } else {
            passwordInput.type = "password";
            this.textContent = "Hiện";
        }
    });
});