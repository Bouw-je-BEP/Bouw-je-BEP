//> Open this page at [https://bouw-je-bep.github.io/Bouw-je-BEP/](https://bouw-je-bep.github.io/Bouw-je-BEP/)

![](https://bouwjebep.nl/wp-content/uploads/2020/08/BEP_Logo_V5.png)

# MakeCode Package for the 4tronix ServoBit Servo Controller Board & Bouw je BEP kit
This extension uses the [4tronix ServoBit](https://4tronix.co.uk/servobit) with a PCA9685 to control a Bouw je BEP (https://bouwjebep.nl) robot kit with 5 independent servos. Helper commands are available to set individual servos to 3 differant degrees to program BEP's expressions or emotion.

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/bouw-je-bep/bouw-je-bep** and import

## Edit this project ![Build status badge](https://github.com/bouw-je-bep/bouw-je-bep/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/bouw-je-bep/bouw-je-bep** and click import

## BEP Servomotors #BEP.servoWrite
How to move parts of BEP:
```blocks
BEP.servoWrite(BEP.Servos.Rechteroog, 1)
BEP.servoWrite(BEP.Servos.Linkeroog, 1)
BEP.servoWrite(BEP.Servos.Geletandwiel, 1)
BEP.servoWrite(BEP.Servos.Rechtwenkbrauw, 1)
BEP.servoWrite(BEP.Servos.Linkerwenkbrauw, 1)
```
Change the numbers and hit download.


## License

MIT 

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
