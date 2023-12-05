(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define(['buoy'], factory(root));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(require('buoy'));
	} else {
		root.myPlugin = factory(root, root.buoy);
	}
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {
    function createFormRow() {
        var d = document.createElement('div')
        d.style.padding = '8px'

        return d
    }

    function createInput(o, p) {
        var i = document.createElement('input')
        i.setAttribute('type', p.type)
        i.setAttribute('name', p.name)

        if (p.placeholder) {
            i.setAttribute('placeholder', p.placeholder)
        }
        if (p.value) {
            i.setAttribute('value', p.value)
        }

        i.style.width = '100%'
        i.style.outline = '0'
        i.style.width = 'auto'
        i.style.padding = '12px'
        i.style.borderRadius = o.borderRadius
        i.style.border = o.borderWidthInput ? `${o.borderWidthInput} solid ${o.borderColorInput}` : '0'
        
        return i
    }

    function g(fn, p) {
        const req = new XMLHttpRequest();
        const url = 'https://ivana3351.c35.integrator.host/api/v1/c/'+p;
        req.overrideMimeType("application/json");
        req.open('GET', url, true);
        req.send()
        req.onload = function() {          
            var r = JSON.parse(req.responseText);
            
            if (req.status == 200) {
                window.sessionStorage.setItem('o', req.responseText)
                fn(r)
            }
        };
    }

    function b(o, i) {
        var f = document.createElement('form')
        f.setAttribute('method', 'get')
        f.setAttribute('target', '_blank')
        f.style.borderRadius = o.borderRadius
        f.style.backgroundColor = o.formBackgroundColor

        var d = createFormRow()
        
        d.appendChild(createInput(o, {
            type: 'email',
            placeholder: 'Seu e-mail',
            name: 'email'
        }))

        f.appendChild(d)

        if (o.isEnableNameInput) {
            var d2 = createFormRow()

            d2.appendChild(createInput(o, {
                type: 'text',
                placeholder: 'Seu nome',
                name: 'name'
            }))

            f.appendChild(d2)
        }

        if (o.isEnablePhoneNumberInput) {
            var d3 = createFormRow()

            d3.appendChild(createInput(o, {
                type: 'phone',
                placeholder: 'Seu número',
                name: 'phone'
            }))

            f.appendChild(d3)
        }

        // Create hidden input
        var d4 = createFormRow()

        d4.appendChild(createInput(o, {
            type: 'hidden',
            name: 'i',
            value: i
        }))

        f.appendChild(d4)

        var d4 = createFormRow()
        d4.style.marginTop = '36px'


        var su = document.createElement('input')
        su.setAttribute('type', 'button')
        su.setAttribute('formaction', 'http://listfy.app/t')
        su.style.width = '100%'
        su.style.cursor = "pointer";
        su.style.outline = 0;
        su.style.color = o.fontColorButton;
        su.style.backgroundColor = o.buttonBackgroundColor;
        su.style.fontWeight = "400";
        su.style.lineHeight = "1.5";
        su.style.textAlign = "center"
        su.style.border = o.borderWidthButton ? `${o.borderWidthButton} solid ${o.borderColorButton}` : '0';
        su.style.padding = "6px 12px"
        su.style.fontSize = o.fontSize
        su.style.borderRadius = o.borderRadius

        su.addEventListener('click', (e) => {
            e.preventDefault()

            
        })

        d4.appendChild(su)
        f.appendChild(d4)
        r.appendChild(f)
    }

    var r

    setTimeout(() => {
        console.log(document.getElementById('__listfy-widget'))
        r = document.getElementById('__listfy-widget')
        var i = r.getAttribute('data-id')
        if (!i) return

        var c = window.sessionStorage.getItem('o')
        if (c) {
            b(JSON.parse(c), i)
        }
        else {
            g((w) => b(w, i), i)
        }
        }, 1000)
});