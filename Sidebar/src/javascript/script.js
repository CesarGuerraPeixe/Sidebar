document.getElementById('open_btn').addEventListener('click', function () {
    let sidebar = document.getElementById('sidebar');
    let logo = document.getElementById('logo_img');

    sidebar.classList.toggle('open-sidebar');

    if (sidebar.classList.contains('open-sidebar')) {
        logo.src = 'src/images/logo.png';
        logo.style.width = 'auto';
        logo.style.height = '100px';
    } else {
        logo.src = 'src/images/lupa.png';
        logo.style.width = 'auto';
        logo.style.height = '60px';
    }
});