$(function(){
var obj = ['Web Dev Resources','Start working with canvas','Canvas project 2d web based game','Working swith flexbox - Basic'
, 'Fux and Grid Design','A real world example with flexbox', 'Markdown Syntax', 
'Type Coercion - JavaScript', 
'Pug', 'Handlebars', 'Why and how we should use "use strict"',
'JSON',"Container's size calculation", 'Msg','Specificity','Select2',
'Box-sizing',
'Page Life Cycle',
'CSS Units',
'Take a screenshot of HTML Page, do AJAX call establishing connection with backend, Sen email with PHP','NodeJS' ];


$( ".expandnarrow" ).each(function( index, element ) {
   console.log(obj[index]);
   $(this).find('span').text( obj[index]);		
});
$('.expandnarrow').on('click', function(){
    $(this).closest('.subContainer').find('.blogDiv').toggleClass('visible');
});
$('pre code').each(function(i, e) {hljs.highlightBlock(e)});


});
