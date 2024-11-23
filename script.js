document.querySelectorAll('header .ribbon-toggle, footer .ribbon-toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
        const parent = this.closest('header, footer');
        if (!parent) return;
        parent.classList.toggle('ribbon-collapsed');
        
        const icon = this.querySelector('.toggle-icon');
        if (icon.classList.contains('fa-chevron-up')) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        } else {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
    });
});