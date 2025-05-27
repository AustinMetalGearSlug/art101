// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();


let points=0;

 points=6;

 points=54;

 let pointsMessage="Your current score is" + points; 

 console.log(pointsMessage);

$('.accordion-header').click(function() {
      const body = $(this).next('.accordion-body');
      const icon = $(this).find('.icon');

      // Close other sections
      $('.accordion-body').not(body).slideUp().removeClass('open');
      $('.accordion-header .icon').not(icon).text('+');

      // Toggle current section
      if (body.hasClass('open')) {
        body.slideUp().removeClass('open');
        icon.text('+');
      } else {
        body.slideDown().addClass('open');
        icon.text('−');
      }
    });