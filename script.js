var app = new Vue({
    el: '#app',
    data: {
        tryb: '', choseel: '', showop: '',
        all: '',
        ktab0: ['nawiedzony', 'zacofany', 'zaściankowy'],
        ktab1: ['pisowski ksiądz', 'kaczyński', 'pisowiec', 'katotalib'],
        ktab2: ['znieważa', 'zawstydza', 'zwalcza', 'atakuje', 'niszczy', 'psuje', 'molestuje', 'pali'],
        ktab3: ['dzieci', 'europe', 'szkołę', 'uchodźców', 'niezawisłe sądy', 'prawa osób LGBT'],
        kptab2: ['zachwala', 'kultywuje', 'utrzymuje'],
        kptab3: ['polski ciemnogród', 'nietolerancję i zacofanie', 'pedofilie wśród księży'],
        dtab0: ['zdradziecki', 'lewacki', 'parszywy', 'sprzedajny', 'złodziejski', 'żałosny'],
        dtab1: ['Tusk', 'leming', 'wykształciuch', 'POwiec'],
        dtab2: ['zdradza', 'sprzedaje', 'znieważa', 'donosi na', 'poniża', 'okrada'],
        dtab3: ['suwerenny rząd wybrany przez Polaków', 'kraj który wydał na świat Papieża Polaka', 'Polską suwerenność', 'Polską godność, dumę i tradycję'],
        dptab2: ['zdradziecko', 'lewacko', 'sprzedajnie', 'parszywie'],
        dptab3: ['zachwala', 'ubóstwia'],
        dptab4: ['upadły zachód', 'zgniły zachód', 'unijne instytucje', 'złotego cielca'],
        rtab0: ['Przedłużacie konflikt w Ukrainie przez dostawy broni','wy się czepiacie Putina', 'wy się czepiacie Rosji', 'macie pretensje do Putina','macie pretensje do Rosji','oskarżacie Rosję','wysyłacie broń do Ukrainy'],
        rtab1: ['a gdzie byliście jak', 'a nie obchodzi was że','a zapomnieliście że','a'],
        rtab2: ['Ameryka bezkarnie napadła na Wenezuelę', 'bombardowali Gaze', 'Ameryka miała wojnę w Wietnamie i Korei', 'bombili Donbas', 'w Iraku nie było broni masowego rażenia','Unia zakazała wydobywać polski węgiel','u was bezdomni zamarzają na ulicach','bogacą się amerykańskie koncerny zbrojeniowe','zachód upada przez swoją głupotę','szykanowany sędzie uciekł na Białoruś'],
        all: '',
        all2: '',
        errors: []
    },
    methods: {
        generate() {
            if (this.check()) {
                let num = Math.floor((Math.random() + 0.1) * 2);
                console.log(num);
                // var self=this;
                if (this.tryb == 'PIS') {
                    if (num == 1 && this.kptab3.length > 0) { this.all = this.gen(this.ktab0) + ' ' + this.gen(this.ktab1) + ' ' + this.gen(this.ktab2) + ' ' + this.gen(this.ktab3) }
                    else { this.all = this.gen(this.ktab0) + ' ' + this.gen(this.ktab1) + ' ' + this.gen(this.kptab2) + ' ' + this.gen(this.kptab3) }
                }

                if (this.tryb == 'PO') {
                    if (num == 1) { this.all = this.gen(this.dtab0) + ' ' + this.gen(this.dtab1) + ' ' + this.gen(this.dptab2) + ' ' + this.gen(this.dtab2) + ' ' + this.gen(this.dtab3); }
                    else { this.all = this.gen(this.dtab0) + ' ' + this.gen(this.dtab1) + ' ' + this.gen(this.dptab2) + ' ' + this.gen(this.dptab3) + ' ' + this.gen(this.dptab4) }
                }

                if (this.tryb == 'RU') {
                    this.all = this.gen(this.rtab0) + ' ' + this.gen(this.rtab1) + ' ' + this.gen(this.rtab2) + ' '
                }
            }
        },
        gen(elem) {
            return elem[Math.floor(Math.random() * elem.length)];
        },
        gettryb() {

        },
        check() {
            if (this.tryb == '') {
                this.errors.push('Wybierz tryb propagandy');
                return false;
            } else {
                this.errors = [];
                return true;
            }
        },
        test(elem) {
            let str = '';
            for (i = 0; i < elem.length; i++) {

            }
        },
        myjoin() {
            let newar = this.kptab3.concat(this.dtab3);
            console.log(newar);
        },
        remove() {
            this.kptab3.splice(this.choseel, 1);
        }

    }
})

// let tab=['a','b','c','d'];
// function gen(elem){
//   return
// }
