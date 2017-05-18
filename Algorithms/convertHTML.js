
function convertHTML(str) {
 str = str.replace(/&/gi,"&amp;");
 str = str.replace(/</gi,"&lt;");
 str = str.replace(/>/gi,"&gt;");
 str = str.replace(/"/gi,"&quot;");
 str = str.replace(/'/gi,"&apos;");
 
// &  &amp; 
// <  &lt;
// >  &gt;
// "  &quot;
// '  &apos;
  
  return str;
}

convertHTML("Hamburgers < Pizza < Tacos");
