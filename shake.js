/* Shake.JS
/ Marcos Mendes 2016
/ mhmendes.com | @marcoshmendes
/ MIT License 
*/ 

(function(window){

  'use strict';

  function shake(){
    var _shake = {};
    
    _shake.tremble = function(mode){
       switch(mode){
            case "zigZig":
                navigator.vibrate([
                    93,89,92
                ]);
                break;
            case "continous":
                navigator.vibrate([
                    850
                ]);
                break;
            case "sms":
                navigator.vibrate([
                  109,196,125,600,
                  109,230,124
                ]);
                break;
            case "badum":
                navigator.vibrate([
                  107,96,113,369,
                  155
                ]);
                break;
            case "alarmClock":
                navigator.vibrate([
                  78,36,71,46,
                  75,48,84,320,
                  77,58,78,37,
                  87,67,62
                ]);
                break;
            case "sos":
                navigator.vibrate([
                  78,63,77,62,
                  89,273,108,167,
                  124,168,180,228,
                  93,52,94,47,
                  104,939,94,58,
                  93,61,93,273,
                  109,198,124,166,
                  169,335,93,62,
                  77,47,105
                ]);
                break;
            case "intruders":
                navigator.vibrate([
                  138,297,155,284,
                  154,311,139,291,
                  176,280,166,272,
                  186,251,171,262,
                  186
                ]);
                break;
            case "annoying":
                navigator.vibrate([
                  123,447,108,74,
                  115,271,1099,285,
                  248,306,109,75,
                  124,249,1024
                ]);
                break;
            case "doorBell":
                navigator.vibrate([
                  108,321,635
                ]);
                break;
            default: 
                return false;
       }
    };

    return _shake;
  }

  if(typeof(window.shake) === 'undefined'){
    window.shake = shake();
  }
})(window);