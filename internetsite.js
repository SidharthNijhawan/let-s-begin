// var http = require("http");
// var fs = require("fs");
// var file = fs.readFileSync("data.json");
// var product = fs.readFileSync("./product.html");
// // console.log(typeof product);
// // console.log(typeof(product + " "));
// product = product + ""; 
// product = JSON.parse(product);                //data being convertes into string format present in hexadecimal format
// product = product.replace(/{#image}/g,product[0]["image"]);
// product = product.replace(/{#nutrients}/g,"Organic Avocados");
// product = product.replace(/{#wieght}/g,"Organic Avocados");
// product = product.replace(/{#price}/g,"Organic Avocados");
// product = product.replace(/{#description}/g,"Organic Avocados");
// //var json = JSON.parse(data);
// //console.log(json);
// var server = http.createServer(function(req,res){
//    console.log(req.url);
     
    

//     if(req.url=="/" || req.url=="overview"){
//         res.write("you are at home page");
//         res.end("the end");

//     }else if(req.url == "/api"){
        
//         res.write(file);
//         res.end("it's time to go");
//     }
//     else if(req.url == "/product"){
//         res.writeHead(200,{"content-type":"text/html"});
//         res.write(product);
//         res.end("you are at home page");
//     } else{
//         var url = 
//         res.end("error 404 page not found");
//     }
// });
// server.listen(3000,function(){
//     console.log("server has started on port 3000");
// });

// var http = require("http");
// var fs = require("fs");
// var url = require("url");
// var server = http.createServer();
// var data = fs.readFileSync("data.json");
// var output = JSON.parse(data);
// var data = (data+" ");

// // console.log(productPage);
// // console.log(typeof productPage);
// // console.log(typeof (productPage + ""));
// //productPage = productPage + "";
// // console.log(productPage);
// // String

// function replace(id){
//     var productPage = fs.readFileSync("./product.html");
//     var productPage = productPage + "";
// productPage = productPage.replace(/Fresh Avocados/g,output[id] ["Organic Avocados"]);
// productPage =productPage.replace(/{#nutrients}/g,output[id]["nutrients"]);
// productPage = productPage.replace(/{#wieght}/g,output[id]["wieght"]);
// productPage = productPage.replace(/{#price}/g,output[id]["price"]);
// productPage = productPage.replace(/{#description}/g,output[id]["description"]);
// return productPage;
// }
// // productPage = productPage.replace("Fresh Avocados", "Organic Avocados");
// // Object
// // var json = JSON.parse(data);
// // console.log(json);
// var server = http.createServer(function(req, res) {
//   // if (req.url);
//   // console.log(req.url);
//   var parsedUrl = url.parse(req.url,true);
//   console.log(parsedUrl);

//   if (req.url == "/" || req.url == "overview") {
//     res.write("Overview Page");
//   } else if (req.url == "/api") {
//     res.write(output);
//   } else if (parsedUrl.pathname == "/product") {
//      var id = parsedUrl.query.id;
//      var ans = replace(id);
//     res.write(ans);
  
//   } else {
//     // console.log(req.url);
//     console.log("``````");
//     // var productId=url.parse(req.url,true).query.id;
//     // console.log(productId);

//     // console.log(url.parse(req.url,true));
//     // res.write(req.url);
//     // res.write(""+));

//     res.write("Error 404 Page Not found");
//   }
//   // res.write("Response from Node Server");
//   // res.write(req.url);
//   res.end();
// });
// server.listen(3000, function() {
//   console.log("Server is running at port 3000");
// });




var http = require("http");
var fs = require("fs");
var url = require("url");
var server = http.createServer();
var data = fs.readFileSync("data.json");
var output = JSON.parse(data);
var data = (data+" ");
// var oData=

function product(id)
{
    var productPage = fs.readFileSync("./product.html");
    productPage = productPage + "";
    productPage = productPage.replace(/{#image#}/g, output[id]["image"]);
    productPage = productPage.replace(/{#Description#}/g, output[id]["description"]);
    productPage = productPage.replace(/{#From#}/g, output[id]["from"]);
    productPage = productPage.replace(/{#Nutrients#}/g, output[id]["nutrients"]);
    productPage = productPage.replace(/{#quantity#}/g, output[id]["quantity"]);
    productPage = productPage.replace(/{#Price#}/g, output[id]["price"]);
    productPage = productPage.replace(/{#Productname#}/g, output[id]["productName"]);
    productPage = productPage.replace(/{#organic#/g, output[id]["organic"]);
   return productPage;
}

function replace(id)
{
    console.log(id);
    console.log(output[id]);
    var cardTemp = fs.readFileSync("./cardTemp.html");
    cardTemp = cardTemp + "";
    cardTemp = cardTemp.replace(/#image#/g, output[id]["image"]);
    cardTemp = cardTemp.replace(/#quantity#/g, output[id]["quantity"]);
    cardTemp = cardTemp.replace(/#Price#/g, output[id]["price"]);
    cardTemp = cardTemp.replace(/#Productname#/g, output[id]["productName"]);
    cardTemp = cardTemp.replace(/#organic#/g, output[id]["organic"]);
   return cardTemp;
}

function overviewRep(cards)
{
    var overview = fs.readFileSync("./overview.html");
    overview = overview + "";
    overview = overview.replace(/#CARDS#/g,cards);
    return overview;
}
var server = http.createServer(function (req, res) 
{
    var parsedUrl = url.parse(req.url);
        console.log(parsedUrl);
    if (req.url == "/api") 
    {
        res.writeHead(200, { "Content-type": "application/json" });
        res.write((data));
    } 
    else if (parsedUrl.pathname == "/product") 
    { 
        var id = parsedUrl.query.id;
        var ans = product(id);
        res.write(ans);
    } 
    else if (req.url == "/overview" || req.url == "/" || req.url === "") 
    {
        var cards = "";
        for(var i = 0 ; i<output.length ; i++)
        {
            cards += replace(i);
        }
        var ans = overviewRep(cards);
        res.write(ans);
    } 
    else 
    {// console.log(req.url);
        console.log("``````");
        // var productId=url.parse(req.url,true).query.id;
        // console.log(productId);
    
        // console.log(url.parse(req.url,true));
        // res.write(req.url);
        // res.write(""+));
    
        // res.write("Error 404 Page Not found");
    }
    res.end();
});
var port = process.env.PORT||3000;
server.listen(port, function () {
    console.log("server is at port 3000");
})