var h1=document.createElement("h1");
h1.setAttribute("class", "head");
h1.innerText="VOWEL COUNT IN STRING";
document.body.appendChild(h1);

var flex=document.createElement("div");
flex.setAttribute("id","val");
flex.setAttribute("class","value");
document.body.appendChild(flex);

var input=document.createElement("input");
input.setAttribute("id","num");
input.setAttribute("class","bg");
input.placeholder="enter string";
flex.appendChild(input);

var but=document.createElement("button");
but.setAttribute("id","num1");
but.setAttribute("class","bg1");
but.innerHTML="click";
flex.appendChild(but);

but.onclick=function()
{
  
var name=document.getElementById("num").value;
function fun(name)
{
	var count=0;
	for(i=name.length-1;i>=0;i--)
	{
		if(name[i]=='a'||name[i]=='e'||name[i]=='i'||name[i]=='o'||name[i]=='u')
		{
			count++;
		}
	}
	document.write(count);
}
fun(name);

}

