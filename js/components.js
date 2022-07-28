var headerBlock = '<header class="navbar">' +
'<img class="navlogo" src="img/logorose.png" alt="logo">' +

'<a href="index.html" class="navtxt">ROSENTEATRET</h1>' +

    '<a href="billet.html" class="navbarmenu">Billetter</a>' +
    '<a href="kontakt.html" class="navbarmenu" >Kontakt</a>' +
    '<a href="index.html#medlemskab" class="navbarmenu" >Medlemskab</a>' +
    '<div class="dropdown">' +
      '<button class="dropbtn">☰</button>' +
      '<div class="dropdown-content">' +
        '<a href="billet.html">Billetter</a>'+ 
        '<a href="kontakt.html">Kontakt</a>' +
        '<a href="index.html#medlemskab">Medlemskab</a>' +

'</div>'+
'</header>'; 

document.getElementById("header").innerHTML = headerBlock

var footerBlock = 
'</div>' +

    '<div class="footer">' +
      '<div class="footerTextContainer">'+
        '<h1>ROSENTEATRET</h1>'+
        '<h3>Teatertorvet 1</h3>'+
        '<h3>8000</h3>'+
        '<h3>Aarhus C</h3>'+

        '<h2>info@rosenteatret.com</h2>'+
        '<a class="return" href="index.html">Hjem</a>'+
      '</div>'+
        '<div class="mapContainer">'+
        '<iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2221.9389495836076!2d10.208409916058393!3d56.15816016812236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3f96e7a26065%3A0xf15874d09a4a3c24!2sRosenteatret!5e0!3m2!1sen!2sdk!4v1658291049041!5m2!1sen!2sdk"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'+
    '</div>'+
   
'</div>';

document.getElementById("footer").innerHTML = footerBlock;