/* reflow.js v0.4.2 - 2017 (c) Luca Morricone <morricone.luca@outlook.com> - MIT License */

( function ( w, d ) {
  /*
    w: window global object
    d: document
  */

  "use strict";

  /* //This is the function to generate the readability scale.
  var readability = ( function () {
    var R = 40, //The Readability factor: approximately equal to the number of characters per line on a small mobile device with portrait orientation. ( Change this value to personalize fonts size ).
    G = 1.25, //The Growth factor ( the same used in stylesheet ).
    cpl = []; //Initialize an array with Characters Per Line.
    for ( var i = 0; i < 7; i++ ) {
      cpl.push( +( ( R * ( Math.pow( G, i ) ) ).toFixed( 6 ) ) );
    }
    return cpl;
  } )(); //An array ( from 0 to 6 ) with all necessary values of lengths of line. */

  var html = d.documentElement;

  var readability = [40, 50, 62.5, 78.125, 97.65625, 122.070313, 152.587891];

  var breakpoint = {
    P: [ 552, 744, 962 ], //Breakpoints for Portrait device.
    L: [ 784, 1088, 1216 ] //Breakpoints for Landscape device.
  };

  function isPortrait() {
    return ( ( html.clientWidth / html.clientHeight ) < 13/9 ); //Return true or false.
  }

  function getReadability() {
    var width = w.innerWidth;
    if ( isPortrait() ) {
      if ( width < breakpoint.P[ 0 ] ) return readability[ 0 ];
      if ( width < breakpoint.P[ 1 ] ) return readability[ 1 ];
      if ( width < breakpoint.P[ 2 ] ) return readability[ 2 ];
      return readability[ 3 ];
    } else {
      if ( width < breakpoint.L[ 0 ] ) return readability[ 3 ];
      if ( width < breakpoint.L[ 1 ] ) return readability[ 4 ];
      if ( width < breakpoint.L[ 2 ] ) return readability[ 5 ];
      return readability[ 6 ];
    }
  }

  function getFontSize() {
    return +( ( 200 / getReadability() ).toFixed( 6 ) ); //2 * 100 / getReadability()
  }

  function reflow() {
    html.style.fontSize = ( html.clientWidth / 100 ) + "px"; //Set 1rem equal to 1%.
    d.body.style.fontSize = getFontSize() + "em"; //Set default font-size.
    //console.log( "Reflow" ); //Only for testing.
  }

  var ready = setInterval( function () {
    if ( d.head ) {
      clearInterval( ready );
      reflow();
      var e = 0;
      w.addEventListener( "resize", function () {
        if ( !( e++ ) ) setTimeout( function () {
          e = 0;
          reflow();
        }, 500 );
      } );
    }
  }, 250 );
} )( window, document );