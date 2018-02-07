# reflow.js

This script adjusts the text size and forces the text reflow to obtain a better readability and a very good responsive design, it also set 1rem equal to 1%. The term "text reflow" only refers to when the text in a document automatically shifts to fit the screen or the window.

## How it works

Traditional line length research, limited to print based text, resulted in a variety of results but generally for printed text it is widely accepted that line length fall between 45-75 characters per line (cpl), though the ideal is 66 cpl (including letters and spaces). For printed works with multiple columns 40-50 cpl is often better. Screen reading may be more difficult making the adoption of traditional line length research to the digital format problematic. For example, some studies have shown that 100 cpl can be read faster than lines with 25 characters, but the level of comprehension remains the same. In order for on-screen text to have both the best speed and comprehension possible about 55 cpl should be used, but the font size would be too small on smartphones.

This script defines a readability factor approximately equal to 40.96 cpl on a small device with portrait orientation, and a growth factor equal to 1.25 (the same suggested for increase font size in your stylesheet). It has a different behavior depending on device orientation: it assumes 552px, 744px and 962px as breakpoints for devices with portrait orientation, and 784px, 1088px and 1216px as breakpoints for devices with landscape orientation.

Finally it will be easy to make responsive objects as squares and circles, because reflow.js sets 1rem equal to 1%.

## How to install

Download files from repository and include reflow.js or reflow.min.js in your project.

Add this to your stylesheet to prevent adjustments of font size on mobile browser:

```
html *,
::before,
::after {
  max-height: 999999px;
}
```

And add this to prevent incorrect window width calculation and horizontal bar scrolling:

```
html,
body {
  overflow-x: hidden;
  width: 100%;
}
```

## Copyright and license

Copyright 2018 Luca Morricone, released under the [MIT license](LICENSE.txt).