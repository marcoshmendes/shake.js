# ~~ Shake.JS ~~

Let's shake baby! shake.js is a cool framework that uses Vibrate API from HTML5 to make smartphones shake up in different ways. You can use shake.js in your project to make your app more interactive, like notifications, games and others.

###Download

<a href="http://mhmendes.com/shakejs">http://mhmendes.com/shakejs</a>

###Installation

Import shake.js into your project

```html
<script src="shake.min.js"></script>
```
###Usage

shake.js has only one function named **tremble()**, you can manipulate vibration modes through this function.

```javascript
tremble('argument')
```

The function accept one argument from its list, you can check it out below

```javascript
//List of possible values

shake.tremble("zigZig");
shake.tremble("continous");
shake.tremble("sms");
shake.tremble("badum");
shake.tremble("alarmClock");
shake.tremble("sos");
shake.tremble("intruders");
shake.tremble("annoying");
shake.tremble("doorBell");
```

###Support

The site http://caniuse.com/ show us the support for this functionality
 
![alt text](http://mhmendes.com/shakejs/support-api.png "Support for vibrate API")
