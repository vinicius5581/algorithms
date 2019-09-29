// https://blog.guya.net/2015/06/12/sharing-sessionstorage-between-tabs-for-secure-multi-tab-authentication/

// Removed IE support in this demo for the sake of simplicity

(function () {

    if (!sessionStorage.length) {
        // Ask other tabs for session storage
        localStorage.setItem('getSessionStorage', Date.now());
    };

    window.addEventListener('storage', function (event) {

        //console.log('storage event', event);

        if (event.key == 'getSessionStorage') {
            // Some tab asked for the sessionStorage -> send it

            localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
            localStorage.removeItem('sessionStorage');

        } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
            // sessionStorage is empty -> fill it

            var data = JSON.parse(event.newValue),
                value;

            for (key in data) {
                sessionStorage.setItem(key, data[key]);
            }

            showSessionStorage();
        }
    });

    window.onbeforeunload = function () {
        //sessionStorage.clear();
    };


    /* This code is only for the UI in the demo, it's not part of the sulotion */

    var el;

    function showSessionStorage() {
        el.innerHTML = sessionStorage.length ? JSON.stringify(sessionStorage) : 'sessionStorage is empty';
    }

    window.addEventListener('load', function () {
        el = document.getElementById('stData');
        showSessionStorage();

        document.getElementById('btnSet').addEventListener('click', function () {
            sessionStorage.setItem('token', '123456789');
            showSessionStorage();
        })

        document.getElementById('btnClear').addEventListener('click', function () {
            sessionStorage.clear();
            showSessionStorage();
        })
    })

})();
