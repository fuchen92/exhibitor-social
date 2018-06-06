$(function() {
    var accountInput = $("#accountInput"),
        valicodeInput = $("#valicodeInput"),
        getValicode = $("#getValicode"),
        loginBtn = $("#loginBtn"),
        formTips = $("#formTips"),
        termInput = $("#termInput"),
        cantLogin = $("#cantLogin"),
        cantloginDialog = $("#cantloginDialog"),
        closeDialog = $("#closeDialog");

    var num = 59,
        timer = null;

    cantLogin.on("click", function() {
        cantloginDialog.show();
    });
    closeDialog.on("click", function() {
        cantloginDialog.removeAttr("style");
    });
    $(".form-input").on("click", function() {
        formTips.removeAttr("style");
    });

    function validate(ele) {
        var eleId = ele[0].id;
        switch (eleId) {
            case "accountInput":
                if(ele.val() == "") {
                    formTips.text("请填写手机号或邮箱").show();
                    ele.focus();
                    return false;
                }
                if (ele.val().indexOf("@") != -1) {
                    if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(ele.val())) {
                        formTips.text("邮箱格式不正确，请检查").show();
                        ele.focus();
                        return false;
                    }
                } else {
                    if (!/(^(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$)|(^09\d{8}$)|(^[569]\d{7}$)|(^(66|62)\d{6}$)/.test(ele.val())) {
                        formTips.text("手机号码格式不正确，请检查").show();
                        ele.focus();
                        return false;
                    }
                }
                return true;
                break;
            case "valicodeInput":
                if (ele.val() == "") {
                    formTips.text("请输入验证码").show();
                    ele.focus();
                    return false;
                } else if (!/\d{6}/.test(ele.val())) {
                    formTips.text("验证码是6位数字").show();
                    ele.focus();
                    return false;
                }
                return true;
                break;
        }
    }

    // 倒计时
    function countdown() {
        num--;
        if (num <= 0) {
            num = 59;
            getValicode.prop("disabled", false).text("重新发送");
            clearInterval(timer);
            timer = null;
            return;
        }
        getValicode.text(num + "s").prop("disabled", true);
    }

    // 获取手机验证码
    getValicode.on("click", function () {
        if ($(this).prop("disabled")) {
            return;
        }
        if (!validate(accountInput)) {
            return false;
        }
        $(this).text(num + "s").prop("disabled", true);
        formTips.removeAttr("style");
        timer = setInterval(function () {
            countdown();
        }, 1000);
        // 请求获取登录验证码
        //     // $.ajax({
        //     //     type: "POST",
        //     //     url: "/NetWorking/ApiSendCode",
        //     //     data: { mobile: mobileInput.val() },
        //     //     dataType: "json",
        //     //     success: function (data) {
        //     //         if (data.Code == 0) {
        //     //             valicodeMobile.css("display", "block");
        //     //             getValicode.css("display", "none");
        //     //             validateTips.css("display", "none");
        //     //             signInMobile.css("display", "block");
        //     //             sendValicode.text(num + "s");
        //     //             timer = setInterval(function () {
        //     //                 countdown();
        //     //             }, 1000);
        //     //         } else {
        //     //             alert(data.Message);
        //     //         }
        //     //     }
        //     // });
    });

    // 登录
    loginBtn.on("click", function() {
        if (!validate(accountInput)) {
            return false;
        }
        if (!validate(valicodeInput)) {
            return false;
        }
        formTips.removeAttr("style");
        // $.ajax({
        //     type: "POST",
        //     url: "/NetWorking/ApiLogin",
        //     data: { mobile: mobileInput.val(), code: validateInput.val() },
        //     dataType: "json",
        //     success: function (data) {
        //         if (data.Code == 0) {
        //             alert("登陆成功");
        //         } else {
        //             alert(data.Message);
        //         }
        //     }
        // });
        console.log("登录成功");
    });
    
});