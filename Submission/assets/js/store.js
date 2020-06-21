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