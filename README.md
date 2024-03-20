p<h1 align="center">juravl tabs</a> 
<h3 align="center">Automatic tabs for the site.</h3>

<p align="center">Possibility of creating an unlimited number of independent blocks with Tabs on the page.</p>
<p align="center">Individual Tabs can be both horizontal and vertical, by adding CSS properties (.tab-3 and .tabs-3 > .tabs__list), uncommenting and changing the ordinal index on the page for tabs .tab-1, 2, etc...</p>
<p align="center">Initial structure:</p>

<div class="tabs__content"> 
  <div class="tabs__text" id="About">111111111</div> 
  <div class="tabs__text" id="View">222222222222</div> 
  <div class="tabs__text" id="Browse">333333333333333</div> 
  <div class="tabs__text" id="Service">444444444444444444</div> 
</div>

<p align="center">For each tab block:</p>
<p align="center">Based on the initial structure, navigation is created, the text of the links is taken from the id. A parent tabs block is created with a unique index. The navigation and initial structure is placed in this parent tabs block.</p>
<p align="center">In the initial structure, id can be called the same for different tabs, there will be no conflicts.</p>
<p align="center">Structure at the end</p>

<div class="tabs0"> 
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
    <div class="tabs__text" id="About">111111111</div> 
    <div class="tabs__text" id="View">222222222222</div> 
    <div class="tabs__text" id="Browse">333333333333333</div> 
    <div class="tabs__text" id="Service">444444444444444444</div> 
  </div> 
</div>


