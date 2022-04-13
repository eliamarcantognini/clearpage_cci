Array.from(document.getElementsByTagName('header')).forEach(e=>e.style.display='none');
Array.from(document.getElementsByTagName('a')).forEach(e=>e.style.display='none');
Array.from(document.getElementsByTagName('body')).forEach(e=>e.style.backgroundImage='none');
Array.from(document.getElementsByClassName('cci-skin-left')).forEach(e=>e.style.display='none !important');
Array.from(document.getElementsByClassName('cci-skin-right')).forEach(e=>e.style.display='none !important');
Array.from(document.getElementsByClassName('cci-liturgia-menu')).forEach(e=>e.style.display='none');
Array.from(document.getElementsByClassName('cci-liturgia-ore-menu')).forEach(e=>e.style.display='none');
Array.from(document.getElementsByClassName('cci_breadcrumb')).forEach(e=>e.style.display='none');
Array.from(document.getElementsByClassName('sow-image-container')).forEach(e =>e.style.display='none !important')
Array.from(document.getElementsByClassName('cci-liturgia-ore-share')).forEach(e=>e.style.display='none');
Array.from(document.getElementsByClassName('row cci_footer')).forEach(e=>e.style.display='none');
Array.from(document.getElementsByClassName('main_container')).forEach(e=>e.style.backgroundColor='#FFFFFF');
Array.from(document.getElementsByClassName('seed_sidebar_left')).forEach(e=>e.style.display='none');
Array.from(document.getElementsByClassName('cci-liturgia-giorno-font-increase')).forEach(e=>e.style.display='none');
document.getElementById('cci_content_page').className = 'col-12 col-lg-12 col-md-12 col-sm-12'
jQuery('.cci-fontsize-dynamic').css('font-size', '30px');
