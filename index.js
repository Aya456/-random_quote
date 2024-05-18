var quotes=[
     {
          quote: "“Be yourself; everyone else is already taken.”",
          auther:"― Oscar Wilde"
     },
     {
          quote:  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",

          auther:"― Elbert Hubbard",
     },
     {
          quote:     "“So many books, so little time.”",
          auther:"― Mark Twain",
     },
     {
          quote:     "“A room without books is like a body without a soul.”",
          auther: "― Albert Camus",
     },
     {
          quote: "“You only live once, but if you do it right, once is enough.”",
          auther:"― C.S. Lewis"
     },
     {
          quote: "“Be the change that you wish to see in the world.”",
          auther:"― Robert Frost",  
     },
     {
          quote:    "“In three words I can sum up everything I've learned about life: it goes on.”",
          auther:"― Ralph Waldo Emerson",
     },
     {
          quote:   "“If you tell the truth, you don't have to remember anything.” ",

          auther:"― Steve Jobs"
     },

     {
          quote:        "“A friend is someone who knows all about you and still loves you.”",

          auther:"― Narcotics Anonymous"
     },

     {
          quote:     "“Always forgive your enemies; nothing annoys them so much.”",
          auther:"― Ralph Waldo Emerson",
     }



]
var colors = [
     "#FF76CE",
     "#FDFFC2",
     "#94FFD8",
     "#A3D8FF",
     "#FFEAE3",
     "#FFCBCB",
     "#FFB1B1",
     "#ED9455",
     "#B5C18E",
     "#DEAC80"
 ]
var lastSelectedIndex = -1;

function newquote() {
    var randomQuote = Math.trunc((Math.random() * quotes.length));
    var randomColor = Math.trunc((Math.random() * colors.length));


     while (randomQuote === lastSelectedIndex) {
         randomQuote = Math.trunc((Math.random() * quotes.length));
     }
     lastSelectedIndex = randomQuote; 
     var newQuote = quotes[randomQuote].quote;
     var newauther=quotes[randomQuote].auther;
     var newColor=colors[randomColor];
document.getElementById("auther").style.color=newColor;
document.getElementById("quote").style.color=newColor;

// document.getElementById("quote").style.background= "#000";


document.getElementById("btn").style.backgroundColor=newColor;


     document.getElementById("auther").innerHTML=newauther;
     document.getElementById("quote").innerHTML = newQuote;
     
}

/////////////////////////////////////////////////////////////////











