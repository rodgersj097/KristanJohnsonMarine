function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookieValue(a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}


var modal = document.querySelector('#notice')

if(getCookieValue("notice") !== "Hidden"){
    UIkit.modal(modal).show()
}else{
    console.log("Notice has already been cleared")
}

modal.addEventListener('hidden', function(){
    setCookie('notice', "Hidden",31)
})

