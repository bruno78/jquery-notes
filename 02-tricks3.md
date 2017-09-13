## Ajax Basics

```html

<li class='confirmation'>
  <h3>Hawaiian Vacation</h3>
  <button>Flight details</button>
  <div class='ticket'>
    <a class="view-boarding-pass">View Boarding Pass</a>
    <img src='/ticket-14836.png'>
  </div>
</li>

<script type="text/javascript">
  $('.confirmation').on('click', 'button', function(){
    $.ajax('confirmation.html',{
      success: function(response) {
        $('.ticket').html(response).slideDown();
      } // this is what we got if we get a response
    });
  });
 // Instead of using 'http://example.org/confirmation.html' you can just use confirmation.html this is if you were on the same url.

  $('.confirmation').con('click', 'view-boarding-pass', function(){
    $(this).closest('.ticket').find('img').show();
  });
</script>
```

http://example.org/confirmation.html
```html
<div class="">
  <strong>Boarding Pass: </strong>
  <a href="#" class='view-boarding-pass'>Boarding Pass</a>
  <img src="ticket.png" alt="airplane ticket" class='boarding-pass'>
</div>
```

## A short hand for the AJAX request using get method

```javascript
$.get(url, success);
```


## Sending parameters with requests


```javascript
// http://www.example.org/confiramtion.html?confNum=1234;
$.ajax('confirmation.html', {
  success: function(response) {
    $('.ticket').html(response).slideDown();
  },
  data: { "confNum": 1234 }
});
```

```html
<div class="ticket" data-confNum='1234'></div>

<script type="text/javascript">
  $.ajax('confirmation.html', {
    success: function(response) {
      $('.ticket').html(response).slideDown();
    },
    data: { "confNum": $('.ticket').data("confNum") }
  });
</script>
```

## Error

```javascript

$.ajax('confirmation.html', {
  success: function(response) {
    $('.ticket').html(response).slideDown();
  },
  error: function(request, errorType, errorMessage) {
    alert('Error: ' + errorType + ' with message: ' + errorMessage);
  }
});

```
How long does it take for a ajax log an error? It depends on the browser. Every browser has its own rules

```javascript

$.ajax('confirmation.html', {
  success: function(response) {
    $('.ticket').html(response).slideDown();
  },
  error: function(request, errorType, errorMessage) {
    alert('Error: ' + errorType + ' with message: ' + errorMessage);
  },
  timeout: 3000;

});

```
That's why sometimes is important to specify the timeout time.

### Other ajaxs command:

beforeSend: function(){
  $('.confirmation').addClass('is-loading');
} - it fires before the ajax request, and it's good for cases like creating a loading spin wheel.

complete: function(){
  $('.confirmation').removeClass('is-loading');
  } - this will run after either success or error. Good to stop the loading animation
