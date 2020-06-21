var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

function t() {
    let dt = localStorage.length
    if(dt !== 0) {
        let login = "Hi, " + localStorage.getItem("login") + "!";
        document.getElementsByClassName("login")[0].innerHTML = login;
        if(localStorage.getItem(CACHE_KEY) !== null) {
            let wisata = JSON.parse(localStorage.getItem(CACHE_KEY));
            console.log(wisata)
            const suka = document.getElementsByClassName('judul-wisata');
            for(let a = 0; a< suka.length; a++) {
                let click = suka[a].children[1].children[0];
                for(let i = 0; i< wisata.length; i++) {
                    //console.log(wisata[i].id)
                    //console.log(wisata[i].id)
                    if(wisata[i].id === a) {
                        /* if(click.style.textShadow !== "red 0px 0px 0px") {
                        } */
                        click.style.textShadow = 'red 0px 0px 0px'
                        click.style.backgroundColor = 'red'
                        //click.style.backgroundColor = 'red'
                    } else {
                        click.style.textShadow = 'grey 0px 0px 0px'
                        //click.style.backgroundColor = 'green'
                    }
                }
                console.log(click)
            }
        } else {
            console.log("favorit kosong")             
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
            const like = {
                id: i,
                judul: judul_text.innerText,
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

		window.scrollTo(0, document.getElementById(targetSection).offsetTop-75);
		if (ev.target.classList.contains('data-target')) scrollAnchors(e, targetSection);
	};
}
//};



//login
function login() {
    let dt = localStorage.length
    if(dt !== 0) {
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
    localStorage.setItem(CACHE_KEY, data);
}

 /** Change the style **/
 function overStyle(object){
     if(object.style.textShadow === "red 0px 0px 0px") {
         object.style.textShadow = '0 0 0 grey';
    } else {
        object.style.textShadow = '0 0 0 red';
    }
    //console.log(object.style.textShadow)
 }

 /** Restores the style **/
 function outStyle(object){
    if(object.style.textShadow === "grey 0px 0px 0px") {
        object.style.textShadow = '0 0 0 red';
    } else {
        object.style.textShadow = '0 0 0 grey';
    }
    //console.log(object.style.textShadow)
 }