define(["require","exports","./GameControl"],function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=document.getElementById("btnReset");document.body.addEventListener("touchmove",function(e){e.preventDefault()},!1),n.Start("game-tile"),o.onclick=function(){n.reset()}});