const CACHE_KEY = localStorage.getItem("login");

function checkForStorage() {
    return typeof (Storage) !== "undefined";
}

function storeLike(data) {
    if (checkForStorage()) {
        let likeData = null;
        if (localStorage.getItem(CACHE_KEY) === null) {
            likeData = [];
        } else {
            likeData = JSON.parse(localStorage.getItem(CACHE_KEY));
            //console.log(likeData)
        }

        likeData.unshift(data);

        if (likeData.length > 5) {
            likeData.pop();
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify(likeData));
    }
}

function checkForStorage() {
    return typeof (Storage) !== "undefined";
}

/**
 * * Get favorite
 */
function showLike() {
    if (checkForStorage) {
        //console.log(JSON.parse(localStorage.getItem(CACHE_KEY)))
        //console.log(localStorage.getItem(CACHE_KEY))
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}

function renderLike() {
    const likeData = showLike();
    let likeList = document.querySelector("#likeList");
    likeList.innerHTML = "";

    for (let [index, like] of Object.entries(likeData)) {
        let no = parseInt(index) + 1
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + no + "</td>";
        row.innerHTML += "<td>" + like.id + "</td>";
        row.innerHTML += "<td>" + like.judul + "</td>";
        row.innerHTML += "<td>" + like.created + "</td>";
        row.innerHTML += "<td style='cursor: pointer' onclick='hplike(" + like.id + ")'>Hapus</td>";

        likeList.appendChild(row);
    }
}

renderLike();