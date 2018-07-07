$('#header-login-link').submit(function (e) {
    e.preventDefault();
});

function connectUser() {
        let loginC = $('#login-username').val();
        let pass = $('#login-password').val();
        var client = $.getJSON('./users.json', function (data) {
            $.each(data.Users, function (i, v) {
                if (v.username == loginC && v.password == pass) {
                    localStorage.username = v.username;
                    document.location.href = "./index.html";
                    return;
                } else {
                    console.log("error")
                }
            });
        });
    
}
$(document).ready(function () {
    var userLogged = localStorage.getItem('username')
        var client = $.getJSON('./users.json', function (data) {
            $.each(data.Users, function (i, v) {
                if (v.username == userLogged) {
                    $('body').css('color', v.color);
                    $('a').css('color', v.color);
                    $('h4').css('color', v.color);
                    $('h3').css('color', v.color);
                    $('h2').css('color', v.color);
                    $('p').css('color', v.color);
                    $('span').css('color', v.color);
                    $('li').css('color', v.color);
                    //return;
                }
            });
        }
    );
});