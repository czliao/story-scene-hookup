# story-scene-hookup
For Esri ArcGIS Online Platform: Hooking up *slides* in a Scene to a Story Map *section*

## Hooking up Scene & Story Map
1. In your story map journal, for the Main Stage, choose 'Web page' under CONTENT
2. Use the scene you'd like to include for the Webpage URL (copy the url of the scene being displayed in webscene viewer, then add "&ui=min" to its end.)
3. Click 'Configure'
4. Set the 'Position' to 'Stretch'
5. Uncheck Unload when reader navigates away. Unchecking this option ensures the scene does not have to reload if the section is visited again. This is optional, but highly recommended.
6. Click 'ADD'

Source: http://blogs.esri.com/esri/arcgis/2015/03/20/using-web-scenes-in-story-maps/

## Hooking up Scene **Slides** & Story Map **Section**

Logic:

Every slide in a scene has a 'nr' number assigned to it, it starts from 0 as the first slide from the left in the horizontal slide deck counting upwards. e.g.: `<li class="slide" nr="1" bmid="slide_4">...</li>`

In order to hook a story map section to a slide you need to know the slide's `nr` number. With that number (in this case let's say it's **1**), all you have to do is go to the section you'd like to hook up in the story map editing mode. Fire up the editing window by clicking on the pencil icon to the right of each section. In the EDIT SECTION window, choose to use source-code view (second icon from the right) for the 'Floating Panel' content.

There add in this line of code into the text window:
##### add this line of code into each storymap section, changing only the data-slide value

```
<span class="slide-hook" data-slide="1"></span>
```

Finally, add in a custom javascript file to make the magic happen. Using the same method to access the source code view of the default section (just my preference, should work anywhere in the page), add in this line of code:
##### add this line of code only once in the whole storymap
```
<script type="text/javascript" src="https://rawgit.com/czliao/story-scene-hookup/master/min/the-hook-min.js"></script>
```

Done.

## Extra Features

To further simplify the UI for presentation purposes: Try pressing **p**

- the social icons and (possibly) edit button will be hidden;
- the horizontal slide deck as well as the zoom controls in the scene that shows up when your cursor goes into the scene area: gone.
- if your cursor leaves the 'story' pane, the dark backdrop as well as the 'dots navigation' will fade out for better map view. I left the texts visible because I like the graphical quality of the texts over the map, but that requires some artistic fiddling with the content pane. (feedback on how to improve welcome.)

Press **p** again to toggle back to normal mode.
<link rel="stylesheet" href="http://rawgit.com/czliao/story-scene-hookup/master/JL.css" />

## Known Issues
- This script only works with the floating-pane mode but not the side-pane mode right now
- The webscene slides should not invoke basemap changes as that is unsstable.
- One has to add the 'hook' span tag to each section that uses the webscene even though you don't want to invoke a change, otherwise it would go back to the home state.
