$(function(){
    var titles = {
        'Operating Systems': 'Tip and tricks for GNU/Linux users',
        'Software General': 'General software topics like software design pattern, naming convention, static type, dynamic type? etc.',
        'Web General': 'The area to discuss some spesific matters ',
        'FrontEnd': 'CSS, Javascript, jQuery and/or some frameworks',
        'JavaScript/jQuery': 'Small Javascript and jQuery Examples',
        'BackEnd': 'Examples',
        'Editorial': 'Possible options for editting',
        'Useful Node Packages': 'Short Examples with Handy Node Packages',
        'Useful JavaScript Libraries' : 'Some External Libraries You want to take a look at',
        'New Tech': 'Developments that need to be discovered',
        'Mobile': 'Ionic, React Native brief mobile development',
        'Unity': 'Unity development',
        'Tool For Deployment Software' : 'Git, SVN, BZR, SVN ',
        'Projects': 'Partial telling about project with some code samples'
      };
var obj = ['Web Dev Resources','Start working with canvas',
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
'Naming Convention',
'Type of Language - Static or Dynamic',
'Software Design Pattern - Factory Pattern',
'Software Design Pattern - Structural Pattern',
'Software Design Pattern - Singeleton Pattern',
'Software Design Pattern - Dependency Injection',
'Software Design Pattern - MVC',
'Software Design Pattern - MVVM',
'First Touch to Unity',
'Node String Package',
'MonetJS',
'LightBox',
'LetteringJS',
'TexillateJS',
'Latex - Introduction',
'Latex - Beamer',
'GIT -Introduction',
'Git Extras','Git Annex',
'Facebook Yoga',
'Normalization',
'CTE - Common Table Expression',
'DOM Parser',
'Exa',
'Bzr',
'SVN',
'Having html page on github with extension io' ];
var template;
var myTemplate = document.querySelector('#myTemplate');

var categoryContainer = document.querySelector('.categoryContainer');
var htmlTemplate = myTemplate.innerHTML;
var htmlPart = document.createElement('div');
htmlPart.setAttribute('class', 'categoryContainer');
htmlPart.innerHTML = htmlTemplate;


//var dt = categoryContainer.querySelector('dl');

$('pre code').each(function(i, e) {hljs.highlightBlock(e)});
$( ".expandnarrow" ).each(function( index, element ) {
   console.log(obj[index]);
   $(this).find('span').text( obj[index]);	
   $(this).attr('id', index);	
   console.log( $(this).attr('id'));
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
   
    

    
    function constructPartialMarkup() {
        
      var parser = new DOMParser;
      for (var items in titles) {
                 template = parser.parseFromString(htmlTemplate, "text/html");
           
           template.querySelector('dt').setAttribute('class', S(items).strip(' ', '_', '-').s);
           template.querySelector('dt').innerHTML = items;
           template.querySelector('dt').addEventListener('click',
           appendArticlesToDiv);
           template.querySelector('dd').innerHTML = titles[items];
           categoryContainer.appendChild(template.firstChild);
      }
    }
    constructPartialMarkup();
    var subContainer = document.querySelectorAll('.subContainer');
   
    var titleContainer = document.querySelector('.titleContainer');
    var titleSub = document.querySelectorAll('.titleContainer .subContainer');
    var arrowContainer = document.querySelector('.arrowContainer');
    
    var dt = document.querySelectorAll('.categoryContainer dt');
    var classAttr;
    function appendArticlesToDiv(){
        
        categoryContainer.classList.add('hiding');
        titleContainer.classList.remove('hiding');
        classAttr = this.getAttribute('class');
     
       
      
        subContainer.forEach(function(element, index){
           
            if(classAttr === element.getAttribute('data')){
                titleContainer.appendChild(element);
             }
        });
        $(titleContainer).find(subContainer).removeClass('hiding');
        arrowContainer.classList.remove('hiding');
    
        
        
       
       
    }
    arrowContainer.addEventListener('click', function(){
        arrowContainer.classList.add('hiding');
        titleContainer.classList.add('hiding');
        categoryContainer.classList.remove('hiding');
        titleContainer.innerHTML = '';
    });
   
});



