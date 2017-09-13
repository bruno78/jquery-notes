## preventDefault() vs stopPropagation()


```html
<ul>
  <li class="vacation">
    <a href="#" class='expand'>Show Comments</a>
  </li>
</ul>

<script>
  $(document).ready(function() {
    $('.vacation').on('click', '.expand', function(event) {
      event.preventDefault();
      $(this).closest('.vacation')
             .find('.comments')
             .fadeToggle();
    })
  })
</script>
```

How the Browser Handles the Click

When an event occurs, the click event in this case, will bubble up to each parent node. In this case it will follow the link, since it will has a "#", it will go up to the DOCUMENT, which will pop up to the top of the page.

We could use stopPropagation(), to prevent from bubbling up to its ancestors. However, it will not prevent the default behavior from the browser and we still going to pop up to the top of the page. The best solution for that is using preventDefault()


### CSS

show()
hide()

```javascript

// instead
$(this).find('.price').css('display', 'block');
// use
$(this)find('.price').show();

```

### Animation

speed: 'fast' = 200
       'slow' = 600

```html
<script type="text/javascript">
//instead
$('#vacations').on('click', '.vacation', function(){

  $(this).toggleClass('highlighted');
  if($(this).hasClass('highlighted')) {
    $(this).animate({'top': '-10px'}, 'fast');
  }
  else {
    $(this).animate({'top': '0px'}, 'fast');
  }

});
//use
</script>

<script type="text/javascript">
//instead
$('#vacations').on('click', '.vacation', function(){

  $(this).toggleClass('highlighted');

});
</script>

<style>
  .vacation {
    transition: top 0.2s;
  }
  .highlighted {
    top: -10px;
  }
</style>
```
