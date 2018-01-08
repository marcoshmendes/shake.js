# ~~ Shake.JS ~~

Let's shake baby! shake.js is a cool framework that uses Vibrate API from HTML5 to make smartphones shake up in different ways. You can use shake.js in your project to make your app more interactive, like notifications, games and others.

### Installation

```
bower install shakejs --save
```

### Usage

import script to your HTML and you're done!

```html
<script src="shake.min.js"></script>
```

Now, use the object **shake** on your script, it has a unique method named **tremble('param')**, you can manipulate vibration modes through this method.

The function accept one param from its list, you can check it out below

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

### Support

You can check browser support for this functionality on this link: https://caniuse.com/#search=Vibration%20API