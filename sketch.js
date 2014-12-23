$(document).ready(function() {

   repopulate(16);                                 // see further down
   
   $('input[name="dimbutton"]').click(function() { // Button looks for new row length
      var dim = $('input[name=dim]').val();        // and refreshes.
      repopulate(dim);
   });
});




//THE REPOPULATE FUNCTION, MAKING THE RESPONSIVE GRID
function repopulate(dim) {
   $('#grid').empty();
   var blockdim = (400 - (dim * 2)) / dim;
   for(var i = 0; i < dim * dim; i++) {
      /* Since js variables can't change css (to my knowledge), each div contained the 
      calculated width and height based on dividing the grid.
      */
      $('#grid').append('<div class="block" style="width:' + blockdim + 'px;height:' + blockdim + 'px;"></div>');
   }
   $('.block').hover(function() {
      $(this).addClass('highlight');
   },
      function() {  // hover takes two input functions, even if one is empty
   });
};