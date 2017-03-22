/*登陆为空判断*/
    layui.use(['layer', 'form'], function () {
        var layer = layui.layer,
            $ = layui.jquery,
            form = layui.form();

        form.verify({
            userName: function (value) {
                if (value === '')
                    return '请输入用户名';
                if (value != 'admin')
                    return '用户名不存在';
            },
            password: function (value) {
                if (value === '')
                    return '请输入密码';
                if (value != '1234')
                    return '密码输入错误';

            }
        });

        var errorCount = 0;
        form.on('submit(login)', function (data) {
            window.location.href = "../page/index.html";
        });
    })


