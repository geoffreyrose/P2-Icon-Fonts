# What are Icon Fonts?

Icon fonts are unique glyphs in a font that can be almost anything you want them to be. Common examples would be a house, an email or a cellphone. However they can be anything you want them to be.

## Why they are cool.

The cool thing about icon fonts are since they are vector they can be scaled however big you need them to be. Since they are text you can style them with CSS like you would any style any text. That means you can have them change color on a hover state, which is pretty awesome! Have fun doing that with a sprite map.

## How to make icon fonts.

All you need to make icon font is a vector editing program. I used Adobe Illustrator and Glyphs Mini to make mine. 

First thing you will need to do is draw your icon. An important thing to know while drawing your icon is to only use fills and not stokes. Stokes will just be ignored so dont use them. If you need to use a stroke just make sure to turn it into a fill before you are done. You can do this in Illustrator by choosing the Outline stroke option. 


Now you have drawn your icon you are wounding, how do I get this on my website. There are a couple ways you can do this. I will tell you of two of them.


### Export as SVG from Illustrator.

1. Save as a SVG file 
2. Go to [IcoMoon](http://icomoon.io/app/)
3. Start the IcoMoon App
4. You can just drag you SVG file right into the app.
5. Now you select the icons you want to use in your font and click the Font --> button at the bottom.
6. Change where the icon is mapped to if you want then click download.
7. Now you can use this as you would any web font with the @font-face.
8. Don't know how to use the @font-face, there is a article on [CSS Tricks](http://css-tricks.com/snippets/css/using-font-face/) that can help you out!

One draw back of this method is that each icon will have its own SVG file before you combine them with IcoMoon. If you don't like having lots of files I would suggest using the next method.

### Using [Glyphs Mini](http://glyphsapp.com/)
I found it worked best for me if you make your art board in Illustrator 1000px x 1000px because IcoMoon want the icon to be 1em and Glyphs Mini considers 1em to be 1000 x 1000 to be 1em by default

1. Fie > New
2. To make your font this 1000 units high in Glyphs Mini, go to File > Font Info
3. Then choose Metrics and make it so the difference is 1000 from te descender to and ascender. I made my ascender: 750 Cap Height: 500 xHeight: 250 and descender: -250. I am sure there is a better way to do this but this worked for me.
4. Click the "+" to add a new glyphs. 
5. Double Click the new glyph you just made and it will open it.
6. At the bottom you should see a mini table at the bottom. It will probably have a W: 600. Make that 1000 to make a square because we made it 1000 high. 
7. Copy your icon from Illustrator and paste it into Glyphs. Do that for all your fonts.
8. File > Export  Choose the otf option.
9. Go to [Font Squirrel](http://www.fontsquirrel.com/fontface/generator) and upload your otf file. Font squirrel will create all the file you would need to use for your web but we will use IcoMoon because it is easier to pick and choose and combine icons you want. 
10. You will get a SVG file, and others but we just care about the SVG
11. Go to [IcoMoon](http://icomoon.io/app/) and drag your SVG file in.
12. Now you select the icons you want to use in your font and click the Font --> button at the bottom.
13. Change where the icon is mapped to if you want then click download.
14. Now you can use this as you would any web font with the @font-face.
15. Don't know how to use the @font-face, there is a article on [CSS Tricks](http://css-tricks.com/snippets/css/using-font-face/) that can help you out!

## Now I Have my Icon Font How do I put it on my site?

The cool thing about Icomoon is it will make the css file for you that has the font-face rules in it. Link up your font and the css file like you normally would. All you have to do is put this code in where you want to use your icon font.
`<span aria-hidden="true" data-icon="&#x21dd;"></span>`

You just have to change the value for the data-icon to where you mapped it to. Not sure where you did, Icomoon also created a html file that will tell you.


You just successfully created your own Icon Font and put it on your website. YAY!

## Icon fonts are great

* They are easy to use, if you can use font-face you can have a Icon Font on your site.
* They are vector and text, so everything you can do to text you can do to them.
* They are scaleable.

### Resources
* [IcoMoon](http://icomoon.io/app/)
* [CSS Tricks - Icon Fonts](http://css-tricks.com/html-for-icon-font-usage/)
* [Font Squirrel](http://www.fontsquirrel.com/fontface/generator)
