var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

function t() {
    let dt = localStorage.getItem("login")
    if(dt !== null) {
        document.getElementById("nama").innerText = localStorage.getItem("login")
        if(localStorage.getItem(CACHE_KEY) !== null) {
            if(JSON.parse(localStorage.getItem(CACHE_KEY)).length === 0) {
                localStorage.removeItem(CACHE_KEY);
            }
        }
        let login = "Hi, " + localStorage.getItem("login") + "!";
        document.getElementsByClassName("login")[0].innerHTML = login;
        if(localStorage.getItem(CACHE_KEY) !== null) {
            document.getElementById("like-ada").style.display = "block";
            let wisata = JSON.parse(localStorage.getItem(CACHE_KEY));
            //console.log(wisata)
            const suka = document.getElementsByClassName('judul-wisata');
            for(let a = 0; a< suka.length; a++) {
                let click = suka[a].children[1].children[0];
                for(let i = 0; i< wisata.length; i++) {
                    //console.log(wisata[i].id)
                    //console.log(wisata[i].id)
                    if(wisata[i].id === a) {
                        console.log(click.className);
                        console.log(click.classList.remove('shake-little'));
                        console.log(click.classList.remove('shake-freeze'));
                        console.log(click.classList.add('shake-littlee'));
                        console.log(click.classList.add('shake-freezee'));
                        console.log(click.className);
                    }
                }
                //console.log(click)
            }
        } else {
            localStorage.removeItem(CACHE_KEY); 
            console.log("favorit kosong")
            document.getElementById("like-tdk").style.display = "block";            
        }
    }
	var yy = y-60;
    var xx = x-550;
    //console.log(xx)
    document.getElementsByClassName("jumbotron")[0].setAttribute("style", "height:"+yy+"px");
    document.getElementsByClassName("login")[0].setAttribute("style", "margin-left:"+xx+"px");

}
window.onload = t;

const suka = document.getElementsByClassName('judul-wisata');
for(let i = 0; i< suka.length; i++)
{
    let click = suka[i].children[1];
    let judul_text = suka[i].children[0];
    click.onclick =
    function like(){
        if(localStorage.getItem("login") !== null) {
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
        } else {
            alert("login dlu ya")
        }
    };
}

/* Nav link */
//window.onload = function(){ 
const nav_click = document.getElementById('nav_bar').children[0].children;
for(let i = 0; i< nav_click.length; i++)
{
	let d = nav_click[i].firstChild
    d.onclick =
    function yourFunction(ev){
		var element = ev.target || ev.srcElement;
		var targetSection = element.getAttribute('data-target');
        if(targetSection != 'profile') {
            window.scrollTo(0, document.getElementById(targetSection).offsetTop-75);
            if (ev.target.classList.contains('data-target')) scrollAnchors(e, targetSection);
        }
	};
}
//};



//login
function login() {
    let dt = localStorage.getItem("login")
    if(dt !== null) {
        console.log("isi")
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
        var name = prompt("Please enter your firstname:", "...");
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
    if(d != '') {
        let e = d.substr(0, 7);
        localStorage.setItem(CACHE_KEY, e);
    } else {
        alert("pastikan hanya alphabet")
    }
}

 /** Change the style **/
 function overStyle(object){
     if(object.style.textShadow === "red 0px 0px 0px") {
         object.style.textShadow = '0 0 0 grey';
    }/*  else {
        object.style.textShadow = '0 0 0 red';
    } */
    //console.log(object.style.textShadow)
 }

 /** Restores the style **/
 function outStyle(object){
    if(object.style.textShadow === "grey 0px 0px 0px") {
        object.style.textShadow = '0 0 0 red';
    }/*  else {
        object.style.textShadow = '0 0 0 grey';
    } */
    //console.log(object.style.textShadow)
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
    let dtlike = like.filter(function( a ) {
        return a.id !== id;
    });
    localStorage.setItem(CACHE_KEY, JSON.stringify(dtlike));
    location.reload();
}