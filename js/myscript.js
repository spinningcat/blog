$(function(){
var obj = ['Web Dev Resources','Start working with canvas','Git Extras','Git Annex',
'Canvas project 2d web based game','Working swith flexbox - Basic'
, 'Fux and Grid Design','A real world example with flexbox', 'Markdown Syntax', 
'Type Coercion - JavaScript', 
'Pug', 'Handlebars', 'Why and how we should use "use strict"',
'JSON',"Container's size calculation", 'Msg','Specificity','Select2',
'Box-sizing',
'Page Life Cycle',
'CSS Units',
'Take a screenshot of HTML Page, do AJAX call establishing connection with backend, Sen email with PHP',
'NodeJS First Touch',
"IONIC install and first step into android world",
'React Native',
'Suggestion for newcomers to the GNU/Linux Debian operating system',
'Linux File Permission',
<<<<<<< HEAD
'Naming Convention',
'Type of Language',
'Software Design Pattern - Singeleton Pattern',
'Software Design Pattern - Dependency Injection',
'Software Design Pattern - MVC',
'Software Design Pattern - MVVM',
'First Touch to Unity',
'Node String Package',
'MonetJS',
'LightBox' ];
var template;
var myTemplate = document.querySelector('#myTemplate');

var categoryContainer = document.querySelector('.categoryContainer');
var htmlTemplate = myTemplate.innerHTML;
var htmlPart = document.createElement('div');
htmlPart.setAttribute('class', 'categoryContainer');
htmlPart.innerHTML = htmlTemplate;


//var dt = categoryContainer.querySelector('dl');
=======
'Software Design Pattern' ];
>>>>>>> parent of 66b4c53... categorization
$('pre code').each(function(i, e) {hljs.highlightBlock(e)});
$( ".expandnarrow" ).each(function( index, element ) {
   console.log(obj[index]);
   $(this).find('span').text( obj[index]);		
});
$('.expandnarrow').on('click', function(){
    $(this).closest('.subContainer').find('.blogDiv').toggleClass('visible');
});
$('pre code').each(function(i, e) {hljs.highlightBlock(e)});

function SelectText(target) {
    var doc = document
        , text = $(target).parent().find('.content')[0]
        , range, selection
    ;
    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}
document.onclick = function(e) {    
    if (e.target.className === 'click') {
       SelectText(e.target);
       document.execCommand('copy');
      
    }
};
    $('.click').on('mouseenter', function(){
    $('#detail').show();
    $( "#detail" ).tooltip({
        position: {
            my: "center bottom",
            at: "center top-10",
            collision: "flip",
            using: function( position, feedback ) {
                $( this ).addClass( feedback.vertical )
                    .css( position );
            }
        }
    });
    });
});

