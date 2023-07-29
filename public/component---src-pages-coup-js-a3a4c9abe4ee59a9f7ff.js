webpackJsonp([65867890497126],{200:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(1),l=s(i),c=a(3),u=s(c),m=function(e){function t(){return r(this,t),n(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return l.default.createElement("article",{className:"w-100 mv2"},l.default.createElement("div",{className:"w-70-ns w-100 dib pr4 secondary lh-copy v-top"},l.default.createElement("div",{className:"mw7"},l.default.createElement("h4",{className:"black f5 mt3 "},"Problem statement"),l.default.createElement("p",{className:"f6 mt2"},this.props.text),l.default.createElement("h4",{className:"black f6"}),l.default.createElement("p",{className:"f6 ma0 lh-copy"},l.default.createElement("span",null,"Hypothesis:")," ",this.props.help))),l.default.createElement("img",{className:"w-30-ns w-100 mt5 mt0-ns dib",src:this.props.img,alt:"bg-img"}))},t}(l.default.Component);m.propTypes={title:u.default.string.isRequired,text:u.default.string.isRequired,img1:u.default.string.isRequired},t.default=m,e.exports=t.default},201:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(1),l=s(i),c=a(3),u=s(c),m=function(e){function t(){return r(this,t),n(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return l.default.createElement("section",{className:"mv4 dib"},l.default.createElement("div",{className:"w-100 w-40-ns mt4 fl"},l.default.createElement("img",{className:"br2 h5",src:this.props.img1,alt:"Mobile-Screenshot"})),l.default.createElement("div",{className:"w-100 w-50-ns dib mt3"},l.default.createElement("h2",null,this.props.title),l.default.createElement("p",null,this.props.text),l.default.createElement("p",null,this.props.help)))},t}(l.default.Component);m.propTypes={title:u.default.string.isRequired,text:u.default.string.isRequired,img1:u.default.string.isRequired},t.default=m,e.exports=t.default},224:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),n=s(r),o=a(21),i=s(o),l=a(57),c=(s(l),a(22)),u=s(c),m=a(200),p=s(m),d=a(201),f=(s(d),function(){return n.default.createElement("div",{className:"pt5"},n.default.createElement(i.default,{about:"Coup is a electric scooter sharing service operating in Berlin, Madrid & Paris!",role:"Coup is a Bosch owed electric mobility sharing service operating in Berlin, Paris & Madrid. It was leading the way in reimagining sustainable urban transportation. However, due to a lack of funding the service was discontinued as of mid-2020.",clients:"Product Designer ",job:"User research, Wireframing, User testing, Interface design"}),n.default.createElement("div",{className:"mb5"},n.default.createElement("img",{className:"w-30-ns w-100 pa2",src:"images/coup/2.jpg",alt:"scooter"}),n.default.createElement("img",{className:"w-30-ns w-100 pa2",src:"images/coup/1.jpg",alt:"scooter"}),n.default.createElement("img",{className:"w-30-ns w-100 pa2",src:"images/coup/3.jpg",alt:"scooter"})),n.default.createElement("h1",null,"Role summary"),n.default.createElement("p",{className:"secondary"}," During my time with Coup, I was part of the team that was responsible for the ride phase. The overall objective was to make sure that user experience was as seamless as possible, for customers interacting with the scooters. Top on our prioritize was to make sure that all scooters which were available to rent performed flawlessly and if any problems arose customers were easily able to rectify these issues."),n.default.createElement("img",{src:"images/coup/map.png",alt:"scooter"}),n.default.createElement("h2",{className:"mb4"},"Case study - Customer reporting"),n.default.createElement(p.default,{title:"Unusable scooters",img:"images/coup/role-1.png",text:"18 helmets are stolen each day on average if it is stolen the scooter is out of commission until it’s replaced. The internal operations team only finds out that the helmet is missing when its reported by the CS team.",help:"Reducing the time to replace the helmet gives Coup a lower potential loss of earning as the scooter remains out of commission for less time."}),n.default.createElement(p.default,{title:"Unknown cancellations",img:"images/coup/role-2.png",text:"12% of rides are canceled before a customer starts the engine, there are a number of hypotheses as to the cause. zb. Damage, Low battery, Missing helmet, wrong scooter selected.",help:"By gathering data on the causes of the cancellation rate we hypotheses we can reduce the number in the near future."}),n.default.createElement(p.default,{title:"Damage invoicing",img:"images/coup/role-3.png",text:"If a scooter is damaged it can be difficult to determine the cause & charge the guilty party especially if the scoter has had multiple riders.",help:"Not all customers report damage making the potential chain of rides hard to track.  By reducing the potential number of riders not making reports we aim to make the identification easier."}),n.default.createElement("h2",{className:"mt5"},"Solutions reporting"),n.default.createElement("p",{className:"w-80-ns f6 secondary w-100"},"If a customer cancels a ride without starting the engine the dismissible popup is displayed. It helps to gather data about issues faced during the ride process as well as highlighting any problems quickly to the operation team."),n.default.createElement("img",{src:"images/coup/rider.png",alt:"scooter"}),n.default.createElement("h2",{className:"mt5"},"Community-based battery swapping"),n.default.createElement("p",{className:"pb3 secondary f6"},"This research project was undertaken to help the company gathered insights and validated assumptions on a pilot scheme. The idea of community-based battery swapping had been in the works for a while however, it was difficult to verify many of the hypotheses being made without installing up the required infrastructure.",n.default.createElement("br",null),n.default.createElement("br",null),"With the assistance of the internal operations team and few changes within the application we were able to gather real firsthand research on the validity of the scheme from active customers."),n.default.createElement("img",{src:"images/coup/swap.png",alt:"scooter"}),n.default.createElement("h1",null,"Operations tooling"),n.default.createElement("p",{className:"pb3 secondary f6"},"The operational tooling suite can be separated into two subsections.  The support system a web application, enabling the dispatches to manage assets in the field both workers & scooters. This could be used to create and monitor assignments or view the status and history of a scooter.   The Field App was a mobile application used by workers out in the field to conduct maintenance and report the status of an assignment.",n.default.createElement("br",null),n.default.createElement("br",null),"I was responsible for the design and continuous development of the tooling suite. With its implementation, we saw improved fleet operational efficiency across markets which help to reduced company costs."),n.default.createElement("img",{src:"images/coup/runner.png",alt:"scooter"}),n.default.createElement("img",{src:"images/coup/report.png",alt:"scooter"}),n.default.createElement("img",{className:"w-50-ns w-100 dib",src:"images/coup/login.png",alt:"scooter"}),n.default.createElement("img",{className:"w-50-ns w-100 dib",src:"images/coup/tickets.png",alt:"scooter"}),n.default.createElement("img",{className:"w-50-ns w-100 dib",src:"images/coup/status.png",alt:"scooter"}),n.default.createElement("img",{className:"w-50-ns w-100 dib",src:"images/coup/overview.png",alt:"scooter"}),n.default.createElement(u.default,null))});t.default=f,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-coup-js-a3a4c9abe4ee59a9f7ff.js.map