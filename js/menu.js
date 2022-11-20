function classMenu() {
    let el = document.getElementById('menuClass');
    let i = document.getElementById('close');
    let ul = document.getElementById('list');

    if (el.style.display == 'none') {
        el.style.display = 'block'
        el.style.marginTop = '8rem'
        el.style.backgroundColor = 'var(--color-navbar-one)'
        el.style.borderRadius = '20px'
        el.style.color = 'var(--color-text-white)'
        el.style.width = '35vw'
        el.style.height = 'auto'
        el.style.zIndex = '99999'
        el.style.visibility = 'visible'
        
        i.style.display = 'flex'
        i.style.justifyContent = 'flex-end'
        i.style.alignItems = 'flex-end'
        i.style.width = '100%'
        i.style.height = '12vh'

        ul.style.display = 'flex'
        ul.style.flexDirection = 'column'
        ul.style.alignItems = 'center'
        ul.style.gap = '1rem'
        ul.style.margin = '1rem'
        ul.style.textDecoration = 'none'
        ul.style.listStyle = 'none'
        ul.style.backgroundColor = 'var(--color-navbar-one)'

    } else {
        el.style.display = 'none'
    }
}