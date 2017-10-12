$(function(){
var obj = ['Web Dev Resources','Start working with canvas','Canvas project 2d web based game','Working swith flexbox - Basic'
, 'Fux and Grid Design','A real world example with flexbox', 'Markdown Syntax', 
'Type Coercion - JavaScript', 
'Pug', 'Handlebars', 'Why and how we should use "use strict"',
'JSON',"Container's size calculation", 'Msg','Specificity','Select2',
'Box-sizing',
'Page Life Cycle',
'CSS Units',
'Take a screenshot of HTML Page, do AJAX call establishing connection with backend, Sen email with PHP',
'NodeJS',
'Suggestion for newcomers to the GNU/Linux Debian operating system' ];
$('pre code').each(function(i, e) {hljs.highlightBlock(e)});

function SelectText(element) {
    var doc = document
        , text = doc.getElementById(element)
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
        SelectText('thing');
    }
};

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
    }
};
});


