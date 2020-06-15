const menu = {
    btn: document.querySelector('.burger'),
    nav: document.querySelector('nav'),
    start: function () {
        let that = this;
        this.btn.addEventListener('click', function (e) {
            that.onbtn(e);
        });
    },

    onbtn: function (e) {
        this.btn.classList.toggle('active');
        this.nav.classList.toggle('active');
    },
}
menu.start();