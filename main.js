const vm = Vue.createApp({
    data() {
        return {
            unitPrice: 25,
            quantity: 4,
            twd: 0.278,
            //jpy: 1,

            isBtndisabled: true,
            message: 'My input text',
            moremessage: 'More message text',
            picked: 1,
            checkedNames: [],
            isChecked: true,
            selected: '',
            num1: 1,
            num2: 2,
            msg: '',
            counter: 0,
            
        }
    },
    methods: {
        subtotalM() {
            console.log('methods');
            return this.unitPrice * this.quantity;
        },
        // ,
        // twdTojpy(){
        //     this.jpy = Number.parseFloat(Number(this.twd)/0.278).toFixed(3);
        // },
        // jpyTotwd(){
        //     this.twd = Number.parseFloat(Number(this.jpy)*0.278).toFixed(3);
        // }
        count(){
            this.counter++;
        },

    },
    computed: {
        subtotalCom() {
            console.log('computed');
            return this.unitPrice * this.quantity;

        },
        jpy: {
            get() {
                return Number.parseFloat(Number(this.twd) / 0.278).toFixed(3);
            },
            set(val) {
                this.twd = Number.parseFloat(Number(val) * 0.278).toFixed(3);
            }
        },
        usd: {
            get() {
                return Number.parseFloat(Number(this.twd) / 28.1).toFixed(3);
            },
            set(val) {
                this.twd = Number.parseFloat(Number(val) * 28.1).toFixed(3);
            }
        },
        sum() {
            return this.num1 + this.num2;
        },
        isValid() {
            return this.msg.length <= 5;
        },
        msgStyle() {
            return {
                'border': this.isValid ? '' : 'red solid 2px',
                'color': this.isValid ? '' : 'red'
            };
        },
        
    }
}).mount('.app');
vm.$data.quantity = 6; //改變data內屬性的值