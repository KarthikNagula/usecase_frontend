(this.webpackJsonpdemoapp=this.webpackJsonpdemoapp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},106:function(e,t,a){e.exports=a(202)},202:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(17),r=a.n(i),c=a(10),o=a(11),s=a(13),m=a(12),u=a(14),p=a(22),d=a(208),h=a(97),C=(a(45),a(49),a(50),a(51),a(7)),N=(a(111),a(26)),g=a.n(N),I=(a(173),a(209)),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onChangeINCSubject=a.onChangeINCSubject.bind(Object(C.a)(a)),a.onChangeINCRaisedOn=a.onChangeINCRaisedOn.bind(Object(C.a)(a)),a.onChangeINCImpactedApplications=a.onChangeINCImpactedApplications.bind(Object(C.a)(a)),a.onChangeINCType=a.onChangeINCType.bind(Object(C.a)(a)),a.onChangeINCDescription=a.onChangeINCDescription.bind(Object(C.a)(a)),a.onChangeINCAssignedTo=a.onChangeINCAssignedTo.bind(Object(C.a)(a)),a.onChangeINCPriority=a.onChangeINCPriority.bind(Object(C.a)(a)),a.onSubmit=a.onSubmit.bind(Object(C.a)(a)),a.state={INC_Subject:"",INC_RaisedOn:new Date,INC_ImpactedApplications:"",INC_Type:"",INC_Description:"",INC_AssignedTo:"",INC_Priority:"",INC_Status:"Active"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onChangeINCSubject",value:function(e){this.setState({INC_Subject:e.target.value})}},{key:"onChangeINCRaisedOn",value:function(e){console.log("INC Raised Date: ".concat(this.state.INC_RaisedOn," ")+e.target.value),this.setState({INC_RaisedOn:e.target.value})}},{key:"onChangeINCImpactedApplications",value:function(e){console.log("inside onchane impacted applications"+e.target.value),this.setState({INC_ImpactedApplications:e.target.value})}},{key:"onChangeINCType",value:function(e){this.setState({INC_Type:e.target.value})}},{key:"onChangeINCDescription",value:function(e){this.setState({INC_Description:e.target.value})}},{key:"onChangeINCAssignedTo",value:function(e){this.setState({INC_AssignedTo:e.target.value})}},{key:"onChangeINCPriority",value:function(e){this.setState({INC_Priority:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("Form submitted:"),console.log("INC Priority: ".concat(this.state.INC_Status)),console.log("INC Priority: ".concat(this.state.INC_ImpactedApplications)),console.log("INC Priority: ".concat(this.state.INC_AssignedTo)),console.log("INC Priority: ".concat(this.state.INC_Priority));var t={INC_Subject:this.state.INC_Subject,INC_RaisedOn:this.state.INC_RaisedOn,INC_ImpactedApplications:this.state.INC_ImpactedApplications,INC_Type:this.state.INC_Type,INC_Description:this.state.INC_Description,INC_AssignedTo:this.state.INC_AssignedTo,INC_Priority:this.state.INC_Priority,INC_Status:this.state.INC_Status};g.a.post("http://localhost:4000/incs/add",t).then((function(e){return console.log(e.data)})),this.props.history.push("/"),this.setState({INC_Subject:"",INC_RaisedOn:new Date,INC_ImpactedApplications:"",INC_Type:"",INC_Description:"",INC_AssignedTo:"",INC_Priority:"",INC_Status:"Active"})}},{key:"render",value:function(){return l.a.createElement("div",{style:{marginTop:10}},l.a.createElement("h3",null,"Create New INC"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Subject: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.INC_Subject,onChange:this.onChangeINCSubject})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.INC_Description,onChange:this.onChangeINCDescription})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Raised On: "),l.a.createElement("input",{type:"date",className:"form-control",selected:this.state.INC_RaisedOn,onChange:this.onChangeINCRaisedOn})),l.a.createElement(I.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(I.a.Label,null,"Impacted Application:"),l.a.createElement(I.a.Control,{as:"select",value:this.state.INC_ImpactedApplications,onChange:this.onChangeINCImpactedApplications},l.a.createElement("option",null,"----Select Application----"),l.a.createElement("option",{value:"Retail"},"Retail"),l.a.createElement("option",{value:"Galaxy"},"Galaxy"),l.a.createElement("option",{value:"Mortgage"},"Mortgage"),l.a.createElement("option",{value:"Telephony"},"Telephony"),l.a.createElement("option",{value:"Pega"},"Pega"),l.a.createElement("option",{value:"All Core Apps"},"All Core Apps"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Issue Type : "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.INC_Type,onChange:this.onChangeINCType,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Assigned To: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.INC_AssignedTo,onChange:this.onChangeINCAssignedTo})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("label",null,"Issue Priority : "),l.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityLow",value:"Low",checked:"Low"===this.state.INC_Priority,onChange:this.onChangeINCPriority}),l.a.createElement("label",{className:"form-check-label"},"Low")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityMedium",value:"Medium",checked:"Medium"===this.state.INC_Priority,onChange:this.onChangeINCPriority}),l.a.createElement("label",{className:"form-check-label"},"Medium")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityHigh",value:"High",checked:"High"===this.state.INC_Priority,onChange:this.onChangeINCPriority}),l.a.createElement("label",{className:"form-check-label"},"High"))),l.a.createElement(I.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(I.a.Label,null,"Issue Status"),l.a.createElement(I.a.Control,{as:"select",readOnly:!0,value:"Active",onChange:this.onChangeINCStatus},l.a.createElement("option",{value:"Active"},"Active"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Create INC",className:"btn btn-primary"}))))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onChangeINCSubject=a.onChangeINCSubject.bind(Object(C.a)(a)),a.onChangeINCImpactedApplications=a.onChangeINCImpactedApplications.bind(Object(C.a)(a)),a.onChangeINCType=a.onChangeINCType.bind(Object(C.a)(a)),a.onChangeINCDescription=a.onChangeINCDescription.bind(Object(C.a)(a)),a.onChangeINCAssignedTo=a.onChangeINCAssignedTo.bind(Object(C.a)(a)),a.onChangeINCPriority=a.onChangeINCPriority.bind(Object(C.a)(a)),a.onChangeINCStatus=a.onChangeINCStatus.bind(Object(C.a)(a)),a.onSubmit=a.onSubmit.bind(Object(C.a)(a)),a.state={INC_Subject:"",INC_ImpactedApplications:"",INC_Type:"",INC_Description:"",INC_AssignedTo:"",INC_Priority:"",INC_Status:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onChangeINCSubject",value:function(e){this.setState({INC_Subject:e.target.value})}},{key:"onChangeINCImpactedApplications",value:function(e){this.setState({INC_ImpactedApplications:e.target.value})}},{key:"onChangeINCType",value:function(e){this.setState({INC_Type:e.target.value})}},{key:"onChangeINCDescription",value:function(e){this.setState({INC_Description:e.target.value})}},{key:"onChangeINCAssignedTo",value:function(e){this.setState({INC_AssignedTo:e.target.value})}},{key:"onChangeINCStatus",value:function(e){this.setState({INC_Status:e.target.value})}},{key:"onChangeINCPriority",value:function(e){this.setState({INC_Priority:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:4000/incs/"+this.props.match.params.id).then((function(t){e.setState({INC_Subject:t.data.INC_Subject,INC_ImpactedApplications:t.data.INC_ImpactedApplications,INC_Type:t.data.INC_Type,INC_Description:t.data.INC_Description,INC_AssignedTo:t.data.INC_AssignedTo,INC_Priority:t.data.INC_Priority,INC_Status:t.data.INC_Status})})).catch((function(e){console.log(e)}))}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("Form submitted:"),console.log("INC Priority: ".concat(this.state.INC_Priority));var t={INC_Subject:this.state.INC_Subject,INC_ImpactedApplications:this.state.INC_ImpactedApplications,INC_Type:this.state.INC_Type,INC_Description:this.state.INC_Description,INC_AssignedTo:this.state.INC_AssignedTo,INC_Priority:this.state.INC_Priority,INC_Status:this.state.INC_Status};console.log(t),console.log("list of INC raised"),g.a.post("http://localhost:4000/incs/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),this.props.history.push("/")}},{key:"render",value:function(){return l.a.createElement("div",{style:{marginTop:10}},l.a.createElement("h3",null,"Create New INC"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Subject: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.INC_Subject,onChange:this.onChangeINCSubject})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.INC_Description,onChange:this.onChangeINCDescription})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Impacted Application: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.INC_ImpactedApplications,onChange:this.onChangeINCImpactedApplications})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Issue Type : "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.INC_Type,onChange:this.onChangeINCType})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Assigned To: "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.INC_AssignedTo,onChange:this.onChangeINCAssignedTo})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("label",null,"Issue Priority : "),l.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityLow",value:"Low",checked:"Low"===this.state.INC_Priority,onChange:this.onChangeINCPriority}),l.a.createElement("label",{className:"form-check-label"},"Low")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityMedium",value:"Medium",checked:"Medium"===this.state.INC_Priority,onChange:this.onChangeINCPriority}),l.a.createElement("label",{className:"form-check-label"},"Medium")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityHigh",value:"High",checked:"High"===this.state.INC_Priority,onChange:this.onChangeINCPriority}),l.a.createElement("label",{className:"form-check-label"},"High"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Issue Current Status : "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.INC_Status,onChange:this.onChangeINCStatus})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Edit INC",className:"btn btn-primary"}))))}}]),t}(n.Component),y=(a(175),a(99)),f=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.incKey.INC_Subject),l.a.createElement("td",null,e.incKey.INC_Description),l.a.createElement("td",null,e.incKey.INC_RaisedOn),l.a.createElement("td",null,e.incKey.INC_ImpactedApplications),l.a.createElement("td",null,e.incKey.INC_AssignedTo),l.a.createElement("td",null,e.incKey.INC_Type),l.a.createElement("td",null,e.incKey.INC_Priority),l.a.createElement("td",null,e.incKey.INC_Status),l.a.createElement("td",null,l.a.createElement(p.b,{to:"/edit/"+e.incKey._id},"Edit")))},v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={currentPage:1,todosPerPage:10,activePage:1,incs:[]},a.handleClick=a.handleClick.bind(Object(C.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:4000/incs/").then((function(t){e.setState({incs:t.data})})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){var e=this;g.a.get("http://localhost:4000/incs/").then((function(t){e.setState({incs:t.data})})).catch((function(e){console.log(e)}))}},{key:"todoList",value:function(){return this.state.incs.map((function(e,t){return l.a.createElement(f,{incKey:e,key:t})}))}},{key:"handleClick",value:function(e){this.setState({currentPage:Number(e.target.id)})}},{key:"handlePageChange",value:function(e){console.log("active page is ".concat(e)),this.setState({activePage:e})}},{key:"render",value:function(){for(var e=this,t=this.state,a=t.incs,n=t.currentPage,i=t.todosPerPage,r=n*i,c=r-i,o=a.slice(c,r).map((function(e,t){return l.a.createElement(f,{incKey:e,key:t})})),s=[],m=1;m<=Math.ceil(a.length/i);m++)s.push(m);var u=s.map((function(t){return l.a.createElement(y.a,{variant:"outline-primary",key:t,id:t,onClick:e.handleClick},t)}));return l.a.createElement("div",null,l.a.createElement("h3",null,"INCIDENT Current List"),l.a.createElement("table",{className:"table table-striped",style:{marginTop:20}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Subject"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Raised On"),l.a.createElement("th",null,"Impacted Application"),l.a.createElement("th",null,"Assigned To"),l.a.createElement("th",null,"Issue Type"),l.a.createElement("th",null,"Priority"),l.a.createElement("th",null,"Current Status"))),l.a.createElement("tbody",null,o)),l.a.createElement("ul",{id:"page-numbers"},l.a.createElement("center",null,u)))}}]),t}(l.a.Component),_=a(79),S=a(100),j=a.n(S),O=(a(180),function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.incKey.INC_Subject),l.a.createElement("td",null,e.incKey.INC_Description),l.a.createElement("td",null,e.incKey.INC_ImpactedApplications),l.a.createElement("td",null,e.incKey.INC_AssignedTo),l.a.createElement("td",null,e.incKey.INC_Type),l.a.createElement("td",null,e.incKey.INC_Priority),l.a.createElement("td",null,e.incKey.INC_Status),l.a.createElement("td",null,l.a.createElement(p.b,{to:"/edit/"+e.incKey._id},"Edit")))}),k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleNewUserMessage=function(e){console.log("New message incoming! ".concat(e)),g.a.get("http://localhost:8080/classify/"+e).then((function(e){console.log(e),Object(_.addResponseMessage)(e.data)})).catch((function(e){console.log(e)}))},e.updateSearch=e.updateSearch.bind(Object(C.a)(e)),e.state={incs:[],search:""},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"updateSearch",value:function(e){this.setState({search:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:4000/incs/").then((function(t){e.setState({incs:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.incs.filter((function(t){return-1!==t.INC_Description.toString().toLowerCase().indexOf(e.state.search.toString().toLowerCase())}));return l.a.createElement("div",null,l.a.createElement("h3",null,"INCIDENT Current List"),"  ",l.a.createElement("i",{class:"fas fa-robot"}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Search Filter : "),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.search,onChange:this.updateSearch})),l.a.createElement("div",{style:{overflow:"scroll",width:"100%",height:"550px"}},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Subject"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Impacted Application"),l.a.createElement("th",null,"Assigned To"),l.a.createElement("th",null,"Issue Type"),l.a.createElement("th",null,"Priority"),l.a.createElement("th",null,"Current Status"))),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement(O,{incKey:e,key:t})}))))),l.a.createElement("div",{className:"App"},l.a.createElement(_.Widget,{handleNewUserMessage:this.handleNewUserMessage,profileAvatar:j.a,title:"Automated INC Resolution",subtitle:"Help Portal"})))}}]),t}(n.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"navbar navbar-expand navbar-dark bg-dark static-top"},l.a.createElement("div",{className:"btn btn-link btn-sm text-white order-1 order-sm-0",id:"sidebarToggle",href:"#"},l.a.createElement("i",{className:"fas fa-bars"})),l.a.createElement("a",{className:"navbar-brand mr-1",href:"/"},"Incident Management Tracker & Assitance"),l.a.createElement("div",{className:"form-group d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search for...","aria-label":"Search","aria-describedby":"basic-addon2"}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-primary",type:"button",value:"Search"},l.a.createElement("i",{className:"fas fa-search"},"Search"))))),l.a.createElement("ul",{className:"navbar-nav ml-auto ml-md-0"},l.a.createElement("li",{className:"nav-item dropdown no-arrow mx-1"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"alertsDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{className:"fas fa-bell fa-fw"}),l.a.createElement("span",{className:"badge badge-danger"},"9+")),l.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"alertsDropdown"},l.a.createElement("a",{className:"dropdown-item",href:"#"},"Action"),l.a.createElement("a",{className:"dropdown-item",href:"#"},"Another action"),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here"))),l.a.createElement("li",{className:"nav-item dropdown no-arrow mx-1"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"messagesDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{className:"fas fa-envelope fa-fw"}),l.a.createElement("span",{className:"badge badge-danger"},"7")),l.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"messagesDropdown"},l.a.createElement("a",{className:"dropdown-item",href:"#"},"Action"),l.a.createElement("a",{className:"dropdown-item",href:"#"},"Another action"),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here"))),l.a.createElement("li",{className:"nav-item dropdown no-arrow"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{className:"fas fa-user-circle fa-fw"})),l.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"userDropdown"},l.a.createElement("a",{className:"dropdown-item",href:"#"},"Settings"),l.a.createElement("a",{className:"dropdown-item",href:"#"},"Activity Log"),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("a",{className:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#logoutModal"},"Logout")))))}}]),t}(n.Component),w=a(33),T=a(80),P=a.n(T),D=a(101),x=a.n(D),M=a(102),R=a.n(M),K=a(103),L=a.n(K);P.a.fcRoot(x.a,R.a,L.a);var H={type:"column2d",width:"700",height:"400",dataFormat:"json",dataSource:{chart:{caption:"Incident Been Raised in Current Year",subCaption:"(Across all Platforms)",xAxisName:"Month (2019)",yAxisName:"INC Count (N)",numberSuffix:"",theme:"fusion"},data:[{label:"APR",value:"160"},{label:"MAY",value:"260"},{label:"JUN",value:"100"},{label:"JUL",value:"200"},{label:"AUG",value:"115"},{label:"SEP",value:"100"},{label:"OCT",value:"30"},{label:"NOV",value:"300"}]}},U=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("center",null,l.a.createElement(P.a,H))}}]),t}(l.a.Component),F=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{class:"navbar-brand",href:"https://codingthesmartway.com",target:"_blank"}),l.a.createElement(p.b,{to:"/",className:"navbar-brand"},"Welcome to InciDentManagement Tool ")),l.a.createElement("br",null),l.a.createElement(w.a,{path:"/",exact:!0,component:v}),l.a.createElement(w.a,{path:"/charts",exact:!0,component:U}),l.a.createElement(w.a,{path:"/edit/:id",component:E}),l.a.createElement(w.a,{path:"/view",component:v}),l.a.createElement(w.a,{path:"/create",component:b}),l.a.createElement(w.a,{path:"/search",component:k})))}}]),t}(n.Component),G=a(210),B=a(211),J=a(212),W=a(207),V=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(G.a,{collapseOnSelect:!0,expand:"lg"},l.a.createElement(B.a,{defaultActiveKey:"/home",className:"flex-column"},l.a.createElement(y.a,{variant:"outline-primary",href:"/charts"},"INC DashBoard"),l.a.createElement(y.a,{variant:"outline-primary",href:"/create"},"Create INC"),l.a.createElement(J.a,{as:W.a},l.a.createElement(y.a,{variant:"outline-success"},"Already Raised an INC ?"),l.a.createElement(J.a.Toggle,{split:!0,variant:"outline-success",id:"dropdown-split-basic"}),l.a.createElement(J.a.Menu,null,l.a.createElement(J.a.Item,{href:"/view"},"View INC"),l.a.createElement(J.a.Item,{href:"/create"},"Edit INC "),l.a.createElement(J.a.Item,{href:"/search"},"Search Something ?"))),l.a.createElement(y.a,{variant:"outline-primary"},"Related Documents"),l.a.createElement(y.a,{variant:"outline-primary"},"How can i Help you ?")))}}]),t}(n.Component),Y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("footer",{className:"sticky-footer",style:{height:"20px"}},l.a.createElement("div",{className:"container my-auto"},l.a.createElement("div",{className:"copyright text-center my-auto"},l.a.createElement("span",null,"Copyright \xa9 Ninja Team 1")))))}}]),t}(n.Component),q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(A,null),l.a.createElement(d.a,null,l.a.createElement(h.a,{xs:2},l.a.createElement(V,null)),l.a.createElement(h.a,{xs:10},l.a.createElement(F,null))),l.a.createElement(Y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.bef150f4.chunk.js.map