// Components are different parts of the webpage.
Vue.component('mainheader', {
    template: '<div class="lightbrown">\n' +
    '    <nav class="brown" role="navigation">\n' +
    '        <div class="nav-wrapper container"><a id="logo-container" href="index.html" class="brand-logo">Ape of\n' +
    '            Divinity</a>\n' +
    '            <ul class="right hide-on-med-and-down">\n' +
    '                <li><a href="#">Contact</a></li>\n' +
    '            </ul>\n' +
    '            <ul class="right hide-on-med-and-down">\n' +
    '                <li><a href="#">Team</a></li>\n' +
    '            </ul>\n' +
    '            <ul class="right hide-on-med-and-down">\n' +
    '                <li><a href="story.html">Verhaal</a></li>\n' +
    '            </ul>\n' +
    '\n' +
    '            <ul id="nav-mobile" class="sidenav">\n' +
    '                <li><a href="story.html">Verhaal</a></li>\n' +
    '                <li><a href="team.html">Team</a></li>\n' +
    '                <li><a href="contact.html">Contact</a></li>\n' +
    '            </ul>\n' +
    '            <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>\n' +
    '        </div>\n' +
    '    </nav>'
});

Vue.component('maincontent', {
    template: '<div class="container center-align">\n' +
    '\n' +
    '        <h2>Ben jij klaar om de wereld van Griekse goden te verkennen?</h2>\n' +
    '        <p>Ape of Divinity is een spel bestemd voor kids tussen de 5 en de 10 jaar om ze meer over Griekse mythologie te leren.</p>\n' +
    '\n' +
    '        <img src="media/player.gif" alt="Geanimeerde speler"/>\n' +
    '        <p>Je speelt als een aapje en het is de bedoeling dat jij verscheidene goden verslaat. Kijk anders eens onder het kopje \'Verhaal\' om er meer over te weten te komen.</p>\n' +
    '        <!-- Card -->\n' +
    '                <div class="card">\n' +
    '                    <div class="card-image">\n' +
    '                        <img src="media/cardbackground.png">\n' +
    '                    </div>\n' +
    '                    <div class="card-content">\n' +
    '                        <p>Ontdek meerdere kaarten in het \'Verhaal\' en \'Team\' gedeelte.</p>\n' +
    '                    </div>\n' +
    '                    <div class="card-action">\n' +
    '                        <a href="story.html">Verhaal</a>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>'
});

Vue.component('mainfooter', {
    template: '  <footer class="page-footer brown">\n' +
    '    <div class="container">\n' +
    '      <div class="row">\n' +
    '        <div class="col l6 s12">\n' +
    '          <h5 class="white-text">Hoe?</h5>\n' +
    '          <p class="grey-text text-lighten-4">Wij zijn een groep studenten met de opdracht om een game te bedenken met de elementen empowerment, aapjes en Griekse Goden. Hieruit is de volgende oplossing bedacht: Ape of Divinity.</p>\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="col l3 s12">\n' +
    '          <h5 class="white-text">Blogs van de ontwikkelaars</h5>\n' +
    '          <ul>\n' +
    '            <li><a class="white-text" href="#!">Lotte\'s Blog</a></li>\n' +
    '            <li><a class="white-text" href="#!">Zoë\'s Blog</a></li>\n' +
    '            <li><a class="white-text" href="#!">Jaspers Blog</a></li>\n' +
    '              <li><a class="white-text" href="https://stud.hosted.hr.nl/0940599" target="_blank">Frank\'s Blog</a></li>\n' +
    '          </ul>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="footer-copyright">\n' +
    '      <div class="container">\n' +
    '      Made by <a class="orange-text text-lighten-3" href="http://ikbenfrank.ml">Frank Solleveld</a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </footer>'
});

env : {
    jquery: true
}

new Vue({
    el: '#MainPage',
});