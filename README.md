# colorfulTab
simple & colorful jquery tab plugin

[Demo][demo]


----------

### Usage

```sh
$("#exampleTab").colorfulTab();
```

### HTML Structure

```sh
<div class="colorful-tab-wrapper" id="examplaTab">

	<!-- Tab Menu -->
	<ul class="colorful-tab-menu">
		<li class="colorful-tab-menu-item active" data-color="#000">
			<a href="#tab1">Tab 1</a>
		</li>
		<li class="colorful-tab-menu-item" data-color="#353535">
			<a href="#tab2">Tab 2</a>
		</li>
		<li class="colorful-tab-menu-item" data-color="d5d5d5">
			<a href="#tab3">Tab 3</a>
		</li>
	</ul>
	
	<!-- Tab Content -->
	<div class="colorful-tab-container">
		<div class="colorful-tab-content active" id="tab1">...</div>
		<div class="colorful-tab-content" id="tab2">...</div>
		<div class="colorful-tab-content" id="tab3">...</div>

</div>
```


### Options

theme, backgroundImage, overlayColor, overlayOpacity

Example :
```sh
$("#exampleTab").colorfulTab({
	theme:"flatline",
	backgroundImage:"true",
	overlayColor: "#002F68",
    overlayOpacity: "0.8"
});
```


### Create a Custom Theme

Example :
```sh
$("#exampleTab").colorfulTab({
	theme:"custom-theme"
});
```
SCSS
```sh
.custom-theme{
	.colorful-tab-menu{
		/* custom style */
	}
	.colorful-tab-menu-item{
		/* custom style */
	}
	.colorful-tab-container{
		/* custom style */
	}
	.colorful-tab-content{
		/* custom style */
	}
}
```
 

License
----
MIT

[demo]: <https://codepen.io/knyttneve/full/pbzBKR/>

