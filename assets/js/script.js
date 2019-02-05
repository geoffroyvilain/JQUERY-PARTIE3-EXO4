/*Construisez une page html avec 5 boutons et un rectangle. Chaque bouton provoque une action sur le rectangle.

    Bouton 1 : augmente la hauteur de 10px, si il dépasse 100px, il remet la hauteur à 10px
    Bouton 2 : met le rectangle en vert
    Bouton 3 : remet les couleurs initiales
    Bouton 4 : fait disparaître le rectangle
    Bouton 5 : fait réaparaître le rectangle
*/
$(function(){
// on active la fonction au click pour changer la valeur du rectangle de +10px
  $('#clickPx').click(function() {
// animate permet d'animer la fonction
    $('.rectangle').animate({'height': '+=10px'});
//Si le rectangle dépasse les 100 px, il revient a 10 px.
    var height = $('.rectangle').height(); // la hauteur est egal au données du css du rectangle
    if(height >= 100){                     // si la hauteur dépasse 100, retour à 10
      $('.rectangle').animate({height: '10px'});
}
});
// on active la fonction au click pour changer le background du rectangle en vert en forçant le css
  $('#clickGreen').click(function() {
  $('.rectangle').css({'background-color': 'green'});
});
// on active la fonction au click pour changer le background en origine en forcant le css
  $('#clickOrigin').click(function() {
    $('.rectangle').css({'background-color': ''});
});
// on active la fonction au click pour cacher l'image
  $('#clickHide').click(function() {
  $('.rectangle').hide();
});
// on active la fonction au click pour afficher l'image
  $('#clickShow').click(function() {
  $('.rectangle').show();
});
});
