
class ScrollBasedAnimation {
    constructor(options) {
        this.options = options;
    }

    create() {
        for (let i of this.options) {
            let e = document.getElementById(i.id);
            for (let j in i.values) {
                e.style[j] = i.values[j].unit ? i.values[j].from + i.values[j].unit : i.values[j].from;
            }
        }

        window.addEventListener('scroll', this.scrollHandler.bind(this));
    }

    destroy() {
        window.removeEventListener('scroll', this.scrollHandler.bind(this));
    }

    scrollHandler(ev) {
        let pos = window.scrollY, height = window.innerHeight || document.documentElement.clientHeight || 
        document.body.clientHeight;
        
        for (let i of this.options) {
            let e = document.getElementById(i.id);
            let val = (!i.unit || i.unit === 'vh') ? pos / height * 100 : pos;
            
            let p;
            if (val <= i.from) p = 0;
            else if (val >= i.to) p = 1;
            else p = (val - i.from) / (i.to - i.from);

            for (let j in i.values) {
                let styleValue = i.values[j].from + (i.values[j].to - i.values[j].from) * p;
                e.style[j] = i.values[j].unit ? styleValue + i.values[j].unit : styleValue;
            }
        }
    }
}

export default ScrollBasedAnimation;