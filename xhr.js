const EFOLAB = {} || EFOLAB;
EFOLAB.XHR = function () {
    this.xhr = new XMLHttpRequest();
};
EFOLAB.XHR.prototype.get = function (param) {
    const url = param.url;
    this.xhr.addEventListener('readystatechange', this, false);
    this.xhr.open('get', url, true);
    this.xhr.send();
};
EFOLAB.XHR.prototype.handleEvent = function (event) {

    if (this.xhr.readyState === 4) {
        if (this.xhr.status === 200) {
            console.log(this.xhr.responseText);
        } else {
            console.log('xhr.status = ' + this.xhr.status);
        }
    }
};

const xhr = new EFOLAB.XHR();


(function () {
    'use strict';
    const listener = function (event) {
        console.log(event.type);
        if (event.type === 'click') {
            const param = [];
            param.url = 'post.php?hoge="hogehoge"';
            xhr.get(param);
        }
    };
    const init = function () {
        const button = document.getElementById('button');
        button.addEventListener('click', listener, false);

    };
    if (document.body) {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init, false);
    }
}());

