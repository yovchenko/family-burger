"use strict";var ProductsModel=function(t){this.XMLHttpRequest=t,this.ajaxResponse=""};ProductsModel.prototype.getProducts=function(t){var e=new this.XMLHttpRequest;e.onload=function(e){this.ajaxResponse=JSON.parse(e.currentTarget.responseText),t(this.ajaxResponse)},e.open("GET","https://yovchenko.github.io/FamilyBurger/products.json",!0),e.send()};var ProductsView=function(){this.viewElement=document.getElementsByClassName("flex-row")[0],this.select=document.getElementById("selectMenu"),this.description=document.getElementsByClassName("description")[0],this.image=document.getElementsByClassName("product-img")[0],this.loader=document.getElementsByClassName("loader")[0],this.table=document.getElementsByClassName("js-drinks-table")[0],this.ribbon=document.getElementsByClassName("ribbon")[0]};ProductsView.prototype.render=function(t){var e,i,s,o,n=!0,r=this.select.options[this.select.selectedIndex].value,d=[],l=[];if(this.viewModel=t,this.viewElement.innerHTML="",this.table.innerHTML="","Drinks"!==r){for(this.loader.classList.remove("contentLoaded"),this.table.classList.remove("is-visible"),e=0;e<t.length;e++)t[e].type===r&&(n&&(o=e,n=!1),this.viewElement.innerHTML+='<div class="item-img"><a href="#modal-fullscreen" data-toggle="modal"><h1 class="notify-badge">'+t[e].name+'</h1><img src="images/menuLowQuality/img-'+(e+1)+'.png"alt="'+t[e].name+'"><h1 class="notify-badge add">'+t[e].nameAdd+"</h1></a></div>",l.push(new Image));this.onClickShowDescription(o,l),$(".notify-badge").arctext({radius:200})}else{this.table.classList.add("is-visible");var a="<tbody>";for(i=0;i<t.length;i++)if(t[i].type===r)for(d=t[i].description.split(";"),a+="<tr><th>"+t[i].name+"</th>",s=0;s<d.length;s++)s<d.length-1?a+="<td>"+d[s]+"</td>":a+="<td>"+d[s]+"</td></tr>";this.table.innerHTML=a+"</tbody>"}},ProductsView.prototype.showItemDescription=function(t,e){void 0!==this.viewModel[e+t].nameAdd&&null!==this.viewModel[e+t].nameAdd||(this.viewModel[e+t].nameAdd=""),this.description.innerHTML="<b>"+this.viewModel[e+t].name+" "+this.viewModel[e+t].nameAdd+"</b><br>"+this.viewModel[e+t].description,this.image.style.backgroundImage='url("images/menuHighQuality/img-'+(e+t+1)+'.png")',this.ribbon.innerHTML=this.viewModel[e+t].price};var ProductsController=function(t,e){this.productsModel=t,this.productsView=e};ProductsController.prototype.initialize=function(){this.productsModel.getProducts(this.onLoadShowProducts.bind(this)),this.productsView.onClickShowDescription=this.onClickShowDescription.bind(this),this.attachEvent(this.productsView.select,"change",this.selectEventHandler.bind(this))},ProductsController.prototype.onLoadShowProducts=function(t){this.productsView.render(t)},ProductsController.prototype.selectEventHandler=function(){this.productsView.render(this.productsView.viewModel)},ProductsController.prototype.attachEvent=function(t,e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent("on"+e,i)},ProductsController.prototype.itemsEventHandler=function(t,e){this.productsView.showItemDescription(t,e)},ProductsController.prototype.onClickShowDescription=function(t,e){this.index=t;var i,s=[],o=this;s=Array.prototype.slice.call(document.getElementsByClassName("item-img"));for(i=0;i<s.length;i++)this.attachEvent(s[i],"click",function(){o.itemsEventHandler(s.indexOf(this),o.index)}),e[i].src="./images/menuHighQuality/img-"+(t+i+1)+".png";this.attachEvent(e[i-1],"load",function(){o.productsView.loader.classList.add("contentLoaded")})},function(){var t=new ProductsModel(XMLHttpRequest),e=new ProductsView;new ProductsController(t,e).initialize()}();
