function myfunc() {
        var a = document.getElementById("phoneNumber").value;
        if (a == "") {
                document.getElementById("messages").innerHTML = "** Please fill mobile number";
                return false;
        }
        else if (isNaN(a)) {
                document.getElementById("messages").innerHTML = "** Enter only numeric values";
                return false;
        }
        else if (a.length != 10) {
                document.getElementById("messages").innerHTML = "** Mobile number should be 10 digits in length";
                return false;
        }
        else if (a.charAt(0) != 9 && a.charAt(0) != 8 && a.charAt(0) != 7 && a.charAt(6) != 6) {
                document.getElementById("messages").innerHTML = "** Please fill a valid mobile number";
                return false;
        }
        else {
                var str = "https://api.whatsapp.com/send?phone=+91";
                str = str + a;
                // alert(str);
                let elem = document.getElementById("imp");
                // let anode = document.createElement('a');
                // anode.setAttribute('href', str);
                // anode.setAttribute('target', '_blank');
                // anode.setAttribute('style', 'color:yellow;');
                // let tnode = document.createTextNode('Click to open whatsapp');
                // anode.appendChild(tnode);
                // elem.appendChild(anode);
                elem.innerHTML = `<a href=${str} style="text-decoration: none;"> click to open whatsapp </a>`;
        }
        return false;
}
