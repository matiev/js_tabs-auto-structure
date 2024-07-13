
<h1 align="center">Javascript tabs, native</a> 
<h3 align="center">Automatic tabs for the site.</h3>

<p>Possibility of creating an unlimited number of independent blocks with Tabs on the page.</p>
<p>Individual Tabs can be both horizontal and vertical, by adding CSS properties (.tab-3 and .tabs-3 > .tabs__list), uncommenting and changing the ordinal index on the page for tabs .tab-1, 2, etc...</p>
<p>Initial structure:</p>




```
<div class="tabs__content"> 
  <div class="tabs__text" id="Testimonials">First some text</div>
  <div class="tabs__text" id="Tips">Second some text</div>
  <div class="tabs__text" id="View">Some text</div>
  <div class="tabs__text" id="Popular">New other text</div>
</div>
```

<p>For each tab block:</p>
<p>Based on the initial structure, navigation is cresated, the text of the links is taken from the id. A parent tabs block is created with a unique index. The navigation and initial structure is placed in this parent tabs block.</p>
<p>In the initial structure, id can be called the same for different tabs, there will be no conflicts.</p>
<p>Structure at the end</p>
```
<div class="tabs-0"> 
  <ul class="tabs__list"> 
    <li class="tabs__item"> 
      <a href="#" class="tabs__link">About</a> 
    </li> 
    <li class="tabs__item"> 
      <a href="#" class="tabs__link">View</a> 
    </li> 
    <li class="tabs__item"> 
      <a href="#" class="tabs__link">Browse</a> 
    </li> 
    <li class="tabs__item"> 
      <a href="#" class="tabs__link">Service</a> 
    </li> 
  </ul>	
  <div class="tabs__content"> 
    <div class="tabs__text" id="Testimonials">First some text</div>
    <div class="tabs__text" id="Tips">Second some text</div>
    <div class="tabs__text" id="View">Some text</div>
    <div class="tabs__text" id="Popular">New other text</div> 
  </div> 
</div>
```

