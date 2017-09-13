## Tricks about using jQuery

### Using Traversing the DOM technique (faster)

```javascript

// Instead
$("element li")
// use
$("element").find("li")

// Instead
$("element > li")
// use
$("element").children("li")

// Instead
$("element li:first")
// use
$("element").find("li").first();

// Instead
$('.vaction button').on('click', function() {});
// use
$('.vacation').on('click', 'button', function(){})

// Instead
$('.vacation.filter')
// use
$('.vacation').filter('.onsale')

// setting a string to a number
+$(this).val();

```

### Manipulating the DOM

```javascript

// creating DOM elements
var price = $('<p>From 399.99</p>');

```

append, prepend
after, before

or

appendTo, prependTo
insertAfter, insertBefore

### Acting on Interaction

ON -> .on(<event>, <event handler>)


Using .closest

```javascript
$(this).closest('.vacation').append(price);
```

What is going to do is, go up the DOM and find the closest ancestor.

Parent vs Closest

Closest is going to find 0 or 1 node when searches for ancestors with proper class.

Where for Parents is going to search for ALL ancestors with the proper class.

```html

<li class="europe tour">
   <h2>Paris, France</h2>
   <span class="details">$2,299 for 7 nights</span>
   <div>
     <button class="book">Book Now</button>
   </div>
</li>

<script>
  $(document).ready(function() {
    $('button').on('click', function() {
      var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
      $(this).closest('.tour').append(message);
      $(this).remove();
    });
  });
</script>

```

Instead of attaching to the div, we want to attach to the bottom of .tour and since the DOM is changing by removing the button, we'd better find the parent and append the element.


### Refactoring the same structure above

```javascript

$(document).ready(function() {
  $('.tour').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $(this).append(message).find('button').remove();
  });
});

```

### Creating variables to query the DOM once and making faster

```html

<li class="europe tour" data-price='399.99'>
   <h2>Hawaiian Vacation</h2>
   <button>Get Price</button>
   <ul class='comments'>
     <li>Amazing deal!</li>
     <li>Want to go!</li>
   </ul>
</li>

<script type="text/javascript">
  $(document).ready(function() {
    $('button').on('click', function() {
      var vacation = $(this).closest('.vacation');
      var amount = vacation.data('price');
      var price = $('<p> From $' + amount + '</p>');
      vacation.append(price);
      $(this).remove();
    });
  });
</script>

```

### Event Delegation

```javascript
$('.vacation').on('click', 'button', function(){})
```
Only target a 'button' if it's inside a '.vacation'


### Toggling without toggle.

First remove a filter/class and then add it

```javascript
$('#filters').on('click', '.onsale-filter', function(){
  $('.highlighted').removeClass('highlighted');
  $('.vacation').filter('.onsale').addClass('highlighted');
})
```


### Exercise

Let's add a bit more incentive to get people to book these tours by offering a discount if they book today. Create a discount variable, and then assign the discount that is stored in the data() attribute on the .tour element. To assign the correct data value, traverse from the clicked button, $(this), to the closest .tour element, and then use data() to find the discount. We don't need to do anything with the discount variable just yet.

```html
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="usa tour" data-discount="299">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
    <li class="europe tour" data-discount="176">
      <h2>Paris, France</h2>
      <span class="details">$2,299 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
    <li class="asia tour" data-discount="349">
      <h2>Tokyo, Japan</h2>
      <span class="details">$3,799 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
  </ul>
</div>

<script type="text/javascript">

$(document).ready(function() {
  $('button').on('click', function() {
    $('button').on('click', function() {
      var tour = $(this).closest('.tour');
      var discount = tour.data('discount');
      var message = $('<span>Call 1-555-jquery-air for a ' + discount + ' discount.</span>');
      tour.append(message);
      $(this).remove();
    });
  });
});

</script>
```

### Using slideDown

```html
<div id="tour">
  <h2>Paris, France Tour</h2>
  <p>$2,499 for 7 Nights</p>
  <button>See photos from our last tour</button>
  <ul class="photos">
    <li>
      <img src="/assets/photos/paris1.jpg">
      <span>Arc de Triomphe</span>
    </li>
    <li>
      <img src="/assets/photos/paris2.jpg">
      <span>The Eiffel Tower</span>
    </li>
    <li>
      <img src="/assets/photos/paris3.jpg">
      <span>Notre Dame de Paris</span>
    </li>
  </ul>
</div>

<script type="text/javascript">
  $(document).ready(function() {
    $('#tour').on('click', 'button', function() {
      $(this).closest('#tour').find('.photos').slideToggle() // slideDown();
    });
  });
</script>

```

On button click we need to find button's(this) nearest parent #tour and then find the .photos to toggle.

### Expanding on()

Mouse events:

click, focusin, mousedown, mousemove, mouseover, mouseenter, mouseleave, dblclick, focusout, mouseup, mouseout, mouselave

keyboard events:

keypress, keydown, keyup

Form events:

blur, select, change, focus, submit

jQuery Object Methods

fadeIn, fadeOut, fadeToggle


```javascript
$('.confirmation').on('click', 'button', showTicket); // The reason we don't put () after a custom function is because if we do this function will be called immediately. We only do when the function is triggered.
```

### Calculating and passing values

```html
<div class="tour" data-daily-price="357">
  <h2>Paris, France Tour</h2>
  <p>$<span id="total">2,499</span> for <span id="nights-count">7</span> Nights</p>
  <p>
    <label for="nights">Number of Nights</label>
  </p>
  <p>
    <input type="number" id="nights" value="7">
  </p>
</div>

<script type="text/javascript">
  $(document).ready(function() {
    $('#nights').on('keyup', function() {
      // Don't forget to find the closest parent element from the target event to avoid triggering other events.
      var price = $(this).closest('.tour').data('daily-price');
      var count = +$(this).val();
      var total = count * price;
      $('#total').text(total);
      $('#nights-count').text(count);
    });
  });
</script>
```
