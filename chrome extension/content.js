var checkExist = setInterval(function() {
   if (document.getElementsByClassName('ProseMirror').length > 0) {
      var scriptTag = document.createElement("script");
scriptTag.setAttribute("src", "https://code.jquery.com/jquery-1.12.4.js");
document.body.appendChild(scriptTag);

var scriptTag1 = document.createElement("script");
scriptTag1.setAttribute("src", "https://code.jquery.com/ui/1.12.1/jquery-ui.js");
document.body.appendChild(scriptTag1);

var linkTag = document.createElement("link");
linkTag.setAttribute("rel", "stylesheet");
linkTag.setAttribute("href", "https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/smoothness/jquery-ui.min.css");
document.head.appendChild(linkTag);

function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}




var slides = document.getElementsByClassName("ProseMirror");
console.log(slides.length)
for (var i = 0; i < slides.length; i++) {
	   slides.item(i).setAttribute("id", "answerBox" + i.toString());
}
$( function() {
    var availableTags = [
        "365 Team",
        "Anaconda",
        "Bernoulli",
        "Binomial",
        "Excel",
        "Feel free to contact us again if needed!",
        "Feel free to contact us again should you need further assistance!",
        "Hope this helps!",
        "I'm glad you are in this course!",
        "I'm happy to help!",
        "I'm sorry for the late response!",
        "Jupyter",
        "Logistic",
        "Looking forward to your reply!",
        "MNIST",
        "Pandas",
        "Poisson",
        "Python",
        "Seaborn",
        "StatsModels",
        "Student's",
        "Tableau",
        "TensorFlow",
        "Thanks for reaching out to us!",
        "Thanks for the question!",
        "Uniform",
        "accuracy",
        "activation",
        "adjusted",
        "algebra",
        "algorithm",
        "alternative",
        "analysis",
        "analytics",
        "answer",
        "argument",
        "assume",
        "assumption",
        "autocorrelation",
        "backpropagation",
        "balance",
        "batch",
        "binary",
        "boolean",
        "built-in",
        "business",
        "calculate",
        "calculating",
        "categorical",
        "central",
        "chart",
        "classification",
        "cluster",
        "coefficient",
        "combination",
        "combinatorics",
        "complement",
        "conditional",
        "confidence",
        "continuous",
        "correlation",
        "covariance",
        "cross-entropy",
        "data",
        "data",
        "dataframe",
        "dataset",
        "declare",
        "dependent",
        "descent",
        "descrpitive",
        "deviation",
        "dictionary",
        "difference",
        "discrete",
        "distribution",
        "download",
        "dummy",
        "encoding",
        "endogeneity",
        "equality",
        "error",
        "estimate",
        "estimator",
        "event",
        "example",
        "exclusive",
        "exercise",
        "expected",
        "exponent",
        "factorial",
        "feature",
        "finance",
        "formula",
        "frequency",
        "function",
        "fundamentals",
        "geometry",
        "gradient",
        "histogram",
        "homoscedasticity",
        "hypothesis",
        "independent",
        "inferential",
        "infographic",
        "initialization",
        "input",
        "intelligence",
        "interface",
        "intersection",
        "interval",
        "introduction",
        "iteration",
        "known",
        "learning",
        "level",
        "level",
        "library",
        "limit",
        "linear",
        "linear",
        "machine",
        "margin",
        "matrix",
        "mean",
        "measurement",
        "mechanism",
        "median",
        "method",
        "mode",
        "model",
        "module",
        "momentum",
        "multicollinearity",
        "multiple",
        "mutually",
        "network",
        "neural",
        "normal",
        "normality",
        "notebook",
        "null",
        "number",
        "numerical",
        "objective",
        "operation",
        "operator",
        "optimization",
        "output",
        "overfitting",
        "package",
        "parameter",
        "permutations",
        "plot",
        "population",
        "practical",
        "prediction",
        "predictors",
        "preprocessing",
        "probability",
        "prompt",
        "region",
        "regression",
        "rejection",
        "relationship",
        "repetition",
        "resource",
        "resources",
        "result",
        "sample",
        "scalar",
        "scaling",
        "scatter",
        "science",
        "separate",
        "shuffle",
        "siginificance",
        "significance",
        "skewness",
        "sklearn",
        "software",
        "solution",
        "solve",
        "solving",
        "standard",
        "standardization",
        "standardize",
        "statement",
        "statistics",
        "stochastic",
        "string",
        "symmetry",
        "syntax",
        "table",
        "technique",
        "tensor",
        "testing",
        "theorem",
        "tool",
        "traditional",
        "training",
        "type",
        "underfitting",
        "union",
        "unknown",
        "validation",
        "value",
        "variable",
        "variance",
        "variation",
        "variation",
        "various",
        "vector",
        "weight"
    ];
    function split( val ) {
      return val.split( / \s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $( "#answerBox0, #answerBox1, #answerBox2, #answerBox3, #answerBox4, #answerBox5, #answerBox6, #answerBox7, #answerBox8, #answerBox9, #answerBox10, #answerBox10, #answerBox11" )
      // don't navigate away from the field on tab when selecting an item
      .on( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).autocomplete( "instance" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 2,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          var results = $.ui.autocomplete.filter(
            availableTags, extractLast( request.term )  ) ;
          response(results.slice(0,10));
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          
          var terms = Array.from(this.childNodes);
          temp = terms.pop()
          tempText = temp.textContent;
          if (tempText.includes(" ")){
            space = tempText.lastIndexOf(' ');
            newStr = tempText.substring(0, space);
            newStr = newStr + ' ' + ui.item.value ;
          }
          else{
            newStr = ui.item.value ;
          }
          temp.textContent = newStr;
          terms.push(temp);
          delete terms;
          placeCaretAtEnd(this);
          return false;
        }
      });
  } );

      clearInterval(checkExist);
   }
}, 500);
    

