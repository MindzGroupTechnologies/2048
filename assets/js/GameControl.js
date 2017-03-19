define(["require","exports","./Game"],function(o,e,t){"use strict";var r;return function(o){function e(o){f=document.getElementById(o),l(0),s()}function r(){document.getElementById("sb_c").innerText="0",s()}function n(o){var e=localStorage.getItem("highScore");return e||localStorage.setItem("highScore",o.toString()),e&&o>parseInt(e)&&localStorage.setItem("highScore",o.toString()),localStorage.getItem("highScore")}function s(){g=[],g.push(c(0,0)),g.push(c(0,1)),g.push(c(0,3)),w=0,a()}function l(o){w+=o;var e=document.getElementById("sb_c"),t=document.getElementById("sb_h");e.innerText=w.toString();var r=n(w);t.innerText=r}function a(){for(;f.hasChildNodes();)f.removeChild(f.lastChild);g.forEach(function(o,e){o.render(f)})}function i(o){var e=g.filter(function(e){return e.hasCordinates(o)});return e.length>0?e[0]:null}function c(o,e){for(var r=null!==o&&o>=0?o:Math.floor(Math.random()*u),n=null!==e&&e>=0?e:Math.floor(Math.random()*u);i({col:r,row:n});)var r=null!==o&&o>=0?o:Math.floor(Math.random()*u),n=null!==e&&e>=0?e:Math.floor(Math.random()*u);return new t.Tile({col:r,row:n})}function d(){g.forEach(function(o){var e=o.process();e&&e.then(function(e){l(e),g.splice(g.indexOf(o),1)})})}var f,g,h,u=4,w=0;!function(o){o[o.left=37]="left",o[o.right=39]="right",o[o.up=38]="up",o[o.down=40]="down"}(h||(h={}));var C;!function(o){o[o.left=100]="left",o[o.right=102]="right",o[o.up=104]="up",o[o.down=98]="down"}(C||(C={})),o.Start=e,o.reset=r,document.addEventListener("keydown",function(o){var e=h[o.keyCode]||C[o.keyCode];switch(console.debug("Arrow Key Pressed: %s",e),e){case"up":for(var t=0,r=1;r<u;r++){var n=g.filter(function(o){return o.Cordinates.row===r});n.length&&console.log("found %s tile(s) in %s row",n.length,r),n.forEach(function(o){console.log("selected tile (%s,%s)",o.Cordinates.col,o.Cordinates.row);for(var e=o.Cordinates.row;e>0;){e--,console.log("\ttrying at (%s,%s)",o.Cordinates.col,e);var r=i({col:o.Cordinates.col,row:e});if(r){if(r.canMerge(o)){var n=r.getGhostCordinates();console.log("\tmerged at (%s,%s)",n.col,n.row),o.setGhostOfTile(r),t++;break}if(r.IsGhost){var s=r.getGhostCordinates();o.setGhostOfCordinates({col:s.col,row:s.row+1}),console.log("\tmove at (%s,%s)",s.col,s.row+1),t++;break}console.log("\tnot moving here");break}t++,o.setGhostOfCordinates({col:o.Cordinates.col,row:e})}var n=o.getGhostCordinates();console.log("\tendded at (%s,%s)",n.col,n.row)})}if(t>0){d();var s=c(null,u-1);g.push(s),s.render(f)}break;case"down":for(var t=0,r=u-2;r>=0;r--){var n=g.filter(function(o){return o.Cordinates.row===r});n.length&&console.log("found %s tile(s) in %s row",n.length,r),n.forEach(function(o){console.log("selected tile (%s,%s)",o.Cordinates.col,o.Cordinates.row);for(var e=o.Cordinates.row;e<u-1;){e++,console.log("\ttrying at (%s,%s)",o.Cordinates.col,e);var r=i({col:o.Cordinates.col,row:e});if(r){if(r.canMerge(o)){var n=r.getGhostCordinates();console.log("\tmerged at (%s,%s)",n.col,n.row),o.setGhostOfTile(r),t++;break}if(r.IsGhost){var s=r.getGhostCordinates();o.setGhostOfCordinates({col:s.col,row:s.row-1}),console.log("\tmove at (%s,%s)",s.col,s.row-1),t++;break}console.log("\tnot moving here");break}t++,o.setGhostOfCordinates({col:o.Cordinates.col,row:e})}var n=o.getGhostCordinates();console.log("\tendded at (%s,%s)",n.col,n.row)})}if(t>0){d();var s=c(null,0);g.push(s),s.render(f)}break;case"left":for(var t=0,l=1;l<u;l++){var n=g.filter(function(o){return o.Cordinates.col===l});n.length&&console.log("found %s tile(s) in %s col",n.length,l),n.forEach(function(o){console.log("selected tile (%s,%s)",o.Cordinates.col,o.Cordinates.row);for(var e=o.Cordinates.col;e>0;){e--,console.log("\ttrying at (%s,%s)",e,o.Cordinates.row);var r=i({col:e,row:o.Cordinates.row});if(r){if(r.canMerge(o)){var n=r.getGhostCordinates();console.log("\tmerged at (%s,%s)",n.col,n.row),o.setGhostOfTile(r),t++;break}if(r.IsGhost){var s=r.getGhostCordinates();o.setGhostOfCordinates({col:s.col+1,row:s.row}),console.log("\tmove at (%s,%s)",s.col+1,s.row),t++;break}console.log("\tnot moving here");break}t++,o.setGhostOfCordinates({col:e,row:o.Cordinates.row})}var n=o.getGhostCordinates();console.log("\tendded at (%s,%s)",n.col,n.row)})}if(t>0){d();var s=c(u-1,null);g.push(s),s.render(f)}break;case"right":for(var t=0,l=u-2;l>=0;l--){var n=g.filter(function(o){return o.Cordinates.col===l});n.length&&console.log("found %s tile(s) in %s col",n.length,l),n.forEach(function(o){console.log("selected tile (%s,%s)",o.Cordinates.col,o.Cordinates.row);for(var e=o.Cordinates.col;e<u-1;){e++,console.log("\ttrying at (%s,%s)",e,o.Cordinates.row);var r=i({col:e,row:o.Cordinates.row});if(r){if(r.canMerge(o)){var n=r.getGhostCordinates();console.log("\tmerged at (%s,%s)",n.col,n.row),o.setGhostOfTile(r),t++;break}if(r.IsGhost){var s=r.getGhostCordinates();o.setGhostOfCordinates({col:s.col-1,row:s.row}),console.log("\tmove at (%s,%s)",s.col-1,s.row),t++;break}console.log("\tnot moving here");break}t++,o.setGhostOfCordinates({col:e,row:o.Cordinates.row})}var n=o.getGhostCordinates();console.log("\tendded at (%s,%s)",n.col,n.row)})}if(t>0){d();var s=c(0,null);g.push(s),s.render(f)}}g=g.filter(function(o){return!o.IsMerged}),g.forEach(function(o){o.cleanUp()})})}(r||(r={})),r});