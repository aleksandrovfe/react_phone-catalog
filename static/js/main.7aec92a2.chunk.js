(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,a,t){e.exports=t(57)},47:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(35),l=t.n(s),r=t(7),i=t(10),o=t(19),m=t(5),d=t(8),u=t(12),p=t(11),h=t(13),E=t(17),v=(t(47),function(){return c.a.createElement("section",{className:"animation"},c.a.createElement("div",{className:"cssload-wrap"},c.a.createElement("div",{className:"cssload-circle"}),c.a.createElement("div",{className:"cssload-circle"}),c.a.createElement("div",{className:"cssload-circle"}),c.a.createElement("div",{className:"cssload-circle"}),c.a.createElement("div",{className:"cssload-circle"})))}),f=t(15),g=t.n(f),N=t(18),b=function(){var e=Object(N.a)(g.a.mark(function e(){var a,t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/phone-catalogue-static/api/phones.json",e.next=3,fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones.json");case 3:return a=e.sent,e.next=6,a.json();case 6:return t=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(N.a)(g.a.mark(function e(a){var t,n,c;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://mate-academy.github.io/phone-catalogue-static/api/phones/".concat(a,".json"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),P=function(){return c.a.createElement("section",{className:"animation"},c.a.createElement("div",{className:"cssload-loader"},c.a.createElement("div",{className:"cssload-top"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"}))))))),c.a.createElement("div",{className:"cssload-bottom"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"}))))))),c.a.createElement("div",{className:"cssload-left"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"}))))))),c.a.createElement("div",{className:"cssload-right"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"})))))))))},_=t(40),C=t(61),j=function(e){var a=e.image,t=c.a.useState(0),n=Object(_.a)(t,2),s=n[0],l=n[1];return c.a.createElement(C.a,{style:{height:"60vh",width:"60vw"},index:s,onRequestChange:function(e){l(e)}},a.map(function(e){return c.a.createElement(C.b,{objectFit:"contain",key:e,src:e})}))},k=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(c)))).state={currentPhone:[],currentImage:0,isLoaded:!1,isLoading:!1},t.componentDidMount=Object(N.a)(g.a.mark(function e(){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,y(t.props.phone.id);case 3:a=e.sent,t.setState({currentPhone:a,isLoaded:!0,isLoading:!1});case 5:case"end":return e.stop()}},e)})),t.handleChangePhoto=function(e){t.setState({currentImage:e})},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.currentPhone,n=a.isLoading,s=a.isLoaded;a.currentImage;return console.log(t),s?c.a.createElement("main",null,c.a.createElement("section",{className:"phone-details"},c.a.createElement("button",{className:"phone-details_add",onClick:function(){return e.props.handleClickAddPhoneToCart(t)}},"Add to Cart"),c.a.createElement("div",{className:"phone-details_name"},t.name),c.a.createElement(r.b,{className:"cart-phones_link-back",to:"/phones"},"Go back to catalog")),c.a.createElement("div",{className:"phone-details_additionalFeatures"},t.additionalFeatures),c.a.createElement("article",{className:"phone-details_header"},c.a.createElement("div",{className:"phone-details_images"},c.a.createElement(j,{image:t.images}))),c.a.createElement("div",{className:"phone-details_description"},t.description),c.a.createElement("section",null,c.a.createElement("div",{className:"specifications_sign"},"Specifications"),c.a.createElement("div",{className:"specifications"},c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"Operating system"),c.a.createElement("p",null,"os:",t.android.os),c.a.createElement("p",null,"ui:",t.android.ui)),c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"Camera"),c.a.createElement("p",null,"primary:",t.camera.primary),c.a.createElement("p",null,"features:",t.camera.features.join(", "))),c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"Battary"),c.a.createElement("p",null,"standbyTime:",t.battery.standbyTime),c.a.createElement("p",null,"talkTime:",t.battery.talkTime),c.a.createElement("p",null,"type:",t.battery.type)),c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"Connectivity"),c.a.createElement("p",null,"bluetooth:",t.connectivity.bluetooth),c.a.createElement("p",null,"cell:",t.connectivity.cell),c.a.createElement("p",null,"gps:",t.connectivity.gps?"yes":"no"),c.a.createElement("p",null,"infrared:",t.connectivity.infrared?"yes":"no"),c.a.createElement("p",null,"wifi:",t.connectivity.wifi)),c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"Display"),c.a.createElement("p",null,"screenResolution:",t.display.screenResolution),c.a.createElement("p",null,"screenSize:",t.display.screenSize),c.a.createElement("p",null,"touchScreen:",t.display.touchScreen?"yes":"no")),c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"Hardware"),c.a.createElement("p",null,"accelerometer:",t.hardware.accelerometer?"yes":"no"),c.a.createElement("p",null,"audioJack:",t.hardware.audioJack),c.a.createElement("p",null,"cpu:",t.hardware.cpu),c.a.createElement("p",null,"fmRadio:",t.hardware.fmRadio?"yes":"no"),c.a.createElement("p",null,"physicalKeyboard:",t.hardware.physicalKeyboard?"yes":"no"),c.a.createElement("p",null,"usb:",t.hardware.usb)),c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"Storage"),c.a.createElement("p",null,"flash:",t.storage.flash," "),c.a.createElement("p",null,"ram:",t.storage.ram)),c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"sizeAndWeight "),c.a.createElement("p",null,t.sizeAndWeight.dimensions.join(", ")),c.a.createElement("p",null,"weight:",t.sizeAndWeight.weight))))):c.a.createElement("div",{className:"load-sign"},n?c.a.createElement(P,null):"")}}]),a}(c.a.Component),w=function(){return c.a.createElement("div",{className:"error-message"},c.a.createElement("div",{className:"error-image"}),c.a.createElement(r.b,{to:"/",className:"back-to-home-error-button"},"Back to Home Page"))},O=function(e){var a=e.handleChangeFilter;return c.a.createElement("div",{className:"search_list"},c.a.createElement("input",{className:"search_field",type:"text",onChange:a,placeholder:"Search"}))},A=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(c)))).state={phones:[],visipblePhones:[],isLoaded:!1,isLoading:!1,direction:1},t.componentDidMount=Object(N.a)(g.a.mark(function e(){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,b();case 3:a=e.sent,t.setState({phones:a,visipblePhones:a,isLoaded:!0,isLoading:!1});case 5:case"end":return e.stop()}},e)})),t.handleChangeFilter=function(e){var a=e.target.value;t.setState({visipblePhones:t.state.phones.filter(function(e){return[e.name].join("").toLowerCase().includes(a.toLowerCase())})})},t.getSortedBy=function(e){switch(e.target.value){case"age":return t.setState(function(e){return{visipblePhones:Object(i.a)(e.phones).sort(function(e,a){return e.age-a.age})}});case"alphabet":return t.setState(function(e){return{visipblePhones:Object(i.a)(e.phones).sort(function(e,a){return e.name.localeCompare(a.name)})}});default:return t.setState(function(e){return{visipblePhones:e.phones}})}},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.visipblePhones,n=a.isLoading,s=a.isLoaded,l=this.props.id;return s?l?c.a.createElement(k,{phone:t.find(function(e){return e.id===l}),handleClickAddPhoneToCart:this.props.handleClickAddPhoneToCart}):c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{handleChangeFilter:this.handleChangeFilter}),c.a.createElement("div",{className:"sorting"},c.a.createElement("label",{htmlFor:"sort-field"},c.a.createElement("p",{className:"sort-field-sign"},"Select sorting method"),c.a.createElement("select",{id:"sort-field",name:"sort-field",className:"sort-field",onChange:this.getSortedBy},c.a.createElement("option",{value:"age"},"Newest"),c.a.createElement("option",{value:"alphabet"},"Alphabetical")))),c.a.createElement("div",{className:"catalog"},t.map(function(a){return c.a.createElement("div",{className:"catalog_phone",key:a.id},c.a.createElement("section",{className:"catalog_phone-add-grid"},c.a.createElement("button",{className:"catalog_phone-add",onClick:function(){return e.props.handleClickAddPhoneToCart(a)}},"Add to Cart")),c.a.createElement(r.c,{className:"catalog_phone-text-decoration",to:"/phones/".concat(a.id)},c.a.createElement("img",{className:"catalog_phone-img",src:a.imageUrl,alt:""}),c.a.createElement("div",{className:"catalog_phone-name"},a.name)))}))):c.a.createElement("div",{className:"load-sign"},n?c.a.createElement(P,null):"")}}]),a}(c.a.Component),q=function(e){var a=e.selectedPhone,t=e.deletePhone,n=e.changeAmountPlus,s=e.changeAmountMinus;return c.a.createElement("div",null,c.a.createElement("div",{className:"cart-phones"},c.a.createElement(r.b,{className:"cart-phones_link-back",to:"/phones"},"Go back to catalog"),c.a.createElement("p",{className:"cart-phone_sign"},"There are"," ",a.length," ",a.length>=2?"phones":"phone"," ","in your cart")),a.map(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"cart-phone_table"},c.a.createElement(r.b,{className:"catalog_phone-text-decoration",to:"/phones/".concat(e.id)},c.a.createElement("img",{src:e.image,alt:"",className:"cart-phone_table-img"}),c.a.createElement("p",{className:"cart-phone_table-name"},e.name)),c.a.createElement("div",{className:"cart-phone_table-grid"},c.a.createElement("button",{className:"cart-phone_table-amount-btn",onClick:function(){return n(e.id)}},"+"),c.a.createElement("p",{className:"cart-phone_table-amount-sign"},"Amount:",e.amount),c.a.createElement("button",{className:"cart-phone_table-amount-btn",onClick:function(){return s(e.id)}},"-"),c.a.createElement("div",null,c.a.createElement("button",{className:"cart-phone_table-remove-btn",onClick:function(){return t(e.id)}},"Remove from cart")))))}))},S=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(c)))).state={selectedPhone:[]},t.handleClickAddPhoneToCart=function(e){t.setState(function(a){return{selectedPhone:a.selectedPhone.find(function(a){return a.id===e.id})?a.selectedPhone.map(function(a){return a.id===e.id?Object(o.a)({},a,{amount:a.amount+1}):a}):[].concat(Object(i.a)(a.selectedPhone),[{name:e.name,id:e.id,image:e.imageUrl||e.images[0],amount:1}])}})},t.deletePhone=function(e){t.setState(function(a){return{selectedPhone:a.selectedPhone.filter(function(a){return a.id!==e})}})},t.changeAmountPlus=function(e){t.setState(function(a){return{selectedPhone:a.selectedPhone.map(function(a){return a.id===e?Object(o.a)({},a,{amount:a.amount+1}):Object(o.a)({},a)})}})},t.changeAmountMinus=function(e){t.setState(function(a){return{selectedPhone:a.selectedPhone.map(function(a){return a.id===e&&a.amount>1?Object(o.a)({},a,{amount:a.amount-1}):Object(o.a)({},a)})}})},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("nav",null,c.a.createElement("ul",{className:"nav-list"},c.a.createElement("li",null,c.a.createElement(r.c,{to:"/",exact:!0},c.a.createElement("div",{className:"logo-size"},c.a.createElement("div",{className:"logo"})))),c.a.createElement("li",null,c.a.createElement(r.c,{to:"/cart"},c.a.createElement("p",{className:"cart-amount"},this.state.selectedPhone.length),c.a.createElement("div",{className:"cart"}))),c.a.createElement("li",null,c.a.createElement(r.c,{className:"nav-list-link",activeClassName:"active-nav_link",to:"/phones"},"Phone Catalog")))),c.a.createElement(E.c,null,c.a.createElement(E.a,{exact:!0,path:"/",render:function(){return c.a.createElement(v,null)}}),c.a.createElement(E.a,{exact:!0,path:"/phones/:id?",render:function(a){var t=a.match;return c.a.createElement(A,{handleClickAddPhoneToCart:e.handleClickAddPhoneToCart,deletePhone:e.deletePhone,id:t.params.id})}}),c.a.createElement(E.a,{path:"/cart",render:function(){return c.a.createElement(q,{selectedPhone:e.state.selectedPhone,deletePhone:e.deletePhone,changeAmountPlus:e.changeAmountPlus,changeAmountMinus:e.changeAmountMinus})}}),c.a.createElement(E.a,{component:w})))}}]),a}(c.a.Component);l.a.render(c.a.createElement(r.a,null,c.a.createElement(S,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.7aec92a2.chunk.js.map