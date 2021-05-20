var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;

function t() {
    let dt = localStorage.getItem("login")
    if (dt !== null) {
        let gr = "Hi <strong>" + localStorage.getItem("login") + "</strong>, Selamat " + greet() + " !";
        document.getElementById("nama").innerHTML = gr;
        if (localStorage.getItem(CACHE_KEY) !== null) {
            if (JSON.parse(localStorage.getItem(CACHE_KEY)).length === 0) {
                localStorage.removeItem(CACHE_KEY);
            }
        }
        let login = "Hi, " + localStorage.getItem("login") + "!";
        document.getElementsByClassName("login")[0].innerHTML = login;
        if (localStorage.getItem(CACHE_KEY) !== null) {
            document.getElementById("like-ada").style.display = "block";
            let wisata = JSON.parse(localStorage.getItem(CACHE_KEY));
            const suka = document.getElementsByClassName('judul-wisata');
            for (let a = 0; a < suka.length; a++) {
                let click = suka[a].children[1].children[0];
                for (let i = 0; i < wisata.length; i++) {
                    if (wisata[i].id === a) {
                        //console.log(click.className);
                        click.classList.remove('shake-little');
                        click.classList.remove('shake-freeze');
                        click.classList.add('shake-littlee');
                        click.classList.add('shake-freezee');
                        // onlick hapus like via beranda
                        click.setAttribute('onclick', 'hplike(' + wisata[i].id + ')');
                    }
                }
            }
        } else {
            localStorage.removeItem(CACHE_KEY);
            console.log("favorit kosong")
            document.getElementById("like-tdk").style.display = "block";
        }
    }

    const suka = document.getElementsByClassName('judul-wisata');
    for (let i = 0; i < suka.length; i++) {
        let cls = suka[i].children[1].children[0].className
        let clsstr = cls.substr(0, 13)
        let click = suka[i].children[1];
        let judul_text = suka[i].children[0];
        click.onclick =
            function like() {
                if (clsstr !== 'shake-littlee') {
                    if (localStorage.getItem("login") !== null) {
                        var date = new Date();
                        var n = date.toJSON();
                        let judul = judul_text.innerText.substr(2)
                        const like = {
                            id: i,
                            judul: judul,
                            created: n,
                        }
                        alert(like.judul)
                        storeLike(like)
                        location.reload();
                        location.reload();
                        location.reload();
                    } else {
                        alert("login dlu ya")
                    }
                }
            };
    }
    var yy = y - 60;
    var xx = x - 550;
    document.getElementsByClassName("jumbotron")[0].setAttribute("style", "height:" + yy + "px");
    document.getElementsByClassName("login")[0].setAttribute("style", "margin-left:" + xx + "px");

}
window.onload = t;

/* Nav link */
const nav_click = document.getElementById('nav_bar').children[0].children;
for (let i = 0; i < nav_click.length; i++) {
    let d = nav_click[i].firstChild
    d.onclick =
        function yourFunction(ev) {
            var element = ev.target || ev.srcElement;
            var targetSection = element.getAttribute('data-target');
            if (targetSection != 'profile') {
                window.scrollTo(0, document.getElementById(targetSection).offsetTop - 75);
                if (ev.target.classList.contains('data-target')) scrollAnchors(e, targetSection);
            }
        };
}

//login
function login() {
    let dt = localStorage.getItem("login")
    if (dt !== null) {
        var x = document.getElementsByClassName("login")[0];
        if (x.innerHTML !== "Kembali") {
            x.innerHTML = "Kembali";
            document.getElementById("main").style.display = "none";
            document.getElementById("dt-profile").style.display = "block";
        } else {
            let login = "Hi, " + localStorage.getItem("login") + "!";
            x.innerHTML = login;
            document.getElementById("main").style.display = "block";
            document.getElementById("dt-profile").style.display = "none";
        }
    } else {
        var txt;
        var name = prompt("Please enter your firstname:", "");
        if (name == null || name == "") {
            txt = "Login";
        } else {
            let nama = name.substring(0, 10)
            txt = "Hi, " + nama + "!";
            store_login(nama)
            location.reload();
        }
        document.getElementsByClassName("login")[0].innerHTML = txt;
    }
}

function store_login(data) {
    const CACHE_KEY = "login";
    let d = data.replace(/([^a-zA-Z])/g, "");
    if (d != '') {
        let e = d.substr(0, 7);
        localStorage.setItem(CACHE_KEY, e);
    } else {
        alert("pastikan hanya alphabet")
    }
}


/**
 * * Keluar
 */
function keluar() {
    let d = localStorage.removeItem("login");
    location.reload();
}

/**
 * * Hapus Favorite Profil
 */

function hplike(id) {
    let like = showLike();
    let judul = like.filter(function (a) {
        return a.id === id;
    });
    if (confirm('Hapus ' + judul[0].judul + ' ?')) {
        let dtlike = like.filter(function (a) {
            return a.id !== id;
        });
        localStorage.setItem(CACHE_KEY, JSON.stringify(dtlike));
        location.reload();
    }
}

/**
 * * Greeting
 */
function greet() {
    var todaydate = new Date();
    var timeis = todaydate.getTime();
    todaydate.setTime(timeis);
    var houris = todaydate.getHours();
    if (houris < 9) display = "Pagi";
    else if (houris < 14) display = "Siang";
    else if (houris < 18) display = "Sore";
    else display = "Malam";
    return display;
}

/**
 * * ©
 */
var d = new Date();
var n = d.getFullYear();
if(n !== 2020) {
    var thn = '2020 - '+ n
} else {
    var thn = '2020'
}
document.getElementById("thn").innerHTML = thn;

/**
 * * About me
 */
let ra = Math.floor(Math.random() * 10);
var items = Array("f1c40f","2ecc71");
var warna = items[Math.floor(Math.random() * items.length)];
if(navigator.onLine) {
    var img = 'https://api.adorable.io/avatars/face/eyes'+ra+'/nose'+ra+'/mouth'+ra+'/'+warna+''
} else {
    var img = '../assets/image/one-piece-png-png-768x1039-one-piece-anime-transparent-background-768.png'
}
let sbt = '<img class="abtme" src="'+img+'" alt="Profile"></img>'
document.getElementById("abtme").innerHTML = sbt;