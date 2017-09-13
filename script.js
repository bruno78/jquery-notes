$(document).ready(function() {
  $('div').mouseenter(function() {
    $('div').fadeTo('fast', 1);
  });
  $('div').mouseleave(function() {
    $('div').fadeTo('fast', 0.5);
  });

  // creating variables and using last elements:
  var $target = $('ol li:last-child');
  $target.fadeOut('fast');

  // clicking and fading
  // 4 divs <div class="vanish"></div>
  // </br><button>Click Me!</button>
  $('button').click(function() {
    $('.vanish').fadeOut('slow');
  })

  // selecting multiple classes
  $('.pink', '.red').fadeTo('slow', 0);

  // using 'this' to only do action on a specific div
  // in this case it will fade out on click on a specific div
  $('div').click(function() {
    $(this).fadeOut('slow');
  })

  // pulling down
  // check css file for pull-me, panel, slide classes
  $('.pull-me').click(function() {
    $('panel').slideToggle('slow');
  });

  // Appending elements:
  $("body").append("<p>I'm a paragraph!</p>");
  // Appending after an element:
  // a single element would be only be possible if it already exited on the page. but in this case here, we are creating and appending.
  $("#one").after("<p>This will be after id one</p>")

  // to remove
  $('p').remove();

  // to add or remove class
  $('selector').addClass('class');
  $('selector').removeClass('class');

  // toggle adds an element when it's called and removes after the event.
  $('selector').toggleClass('class');

  // Changing shapes and using css chaining events.
  $("div").height("200px")
          .width("200px")
          .css("border-radius", "10px");

  // .html() can be used to set the contents of the first element match it finds.
  $("selector").html("element");

  // .val() is used to get the value of form elements.
  $('input:checkbox:checked').val();
  $('input[name=checkListItem]').val()

  // creating a todo list check html...
  // to put a simple remove function wont work because by the time jQuery load the document it will simply assume that .item doesn't exist. so .on comes to help.
  $('#button').click(function() {
    var toAdd = $('input[name=checkListItem]').val();
    $(".list").append('<div class="item">' + toAdd + '</div>');
  })
  $(document).on('click', '.item', function() {
    $(this).remove();
  });

  // Hover
  ('div').hover(
    function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    }
  );

  // Implementing focus
  $('input').focus(function() {
    $(this).css('outline-color', '#FF0000');
  });

  // keydown and animate. keydown will work on whatever page element has focus. So you need to click on the element before it triggers the animation.
    $(this).keydown(function() {
        $('div').animate({
            left: '+=10px'
        },500);
    });

  // Using animate to move all directions which only consists tops and lefts
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
    			// Left arrow key pressed
    			case 37:
    				$('img').animate({left: "-=10px"}, 'fast');
    				break;
    			// Up Arrow Pressed
    			case 38:
    				$('img').animate({top: "-=10px"}, 'fast');
    				break;
    			// Right Arrow Pressed
    			case 39:
    				$('img').animate({left: "+=10px"}, 'fast');
    				break;
    			// Down Arrow Pressed
    			case 40:
    				$('img').animate({top: "+=10px"}, 'fast');
    				break;
    		}
	  });

    // Hiding elements
    $('div').hide();

    // Making an image of position: absolute going down 100px in 1 second
    $('img').animate({ top: '+=100px'}, 1000);

    // Using effect on click to blow stuff
    $('div').click(function() {
        $(this).effect('explode');
    });

    // Bouncing effect
    $('div').click(function() {
        $(this).effect('bounce', {times:3}, 500);
    });

    // slide goes from left to right
    $('div').click(function() {
        $(this).effect('slide');
    });

    // making a collapsible menu
    $("#menu").accordion({collapsible: true, active: false });

    // dragging elements
    $('element').draggable();

    // Resize elements
    $('div').resizable();

    // selectable
    $('ol').selectable();

    // Select and sort
    $('ol').sortable();

    
});
