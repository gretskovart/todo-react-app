(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=n(7),i=n(10),u=n(6),s=n(1),m=n(2),f=n(4),d=n(3),b=n(5),p=function(){return o.a.createElement("h1",null,"\u041c\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b")},h=(n(18),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={term:""},n.onSearchChange=function(e){var t=e.target.value;n.setState({term:t}),n.props.onSearchChange(t)},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"search-panel active-purple-4"},o.a.createElement("input",{className:"form-control",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",onChange:this.onSearchChange,value:this.state.term}))}}]),t}(a.Component)),g=n(11),v=(n(19),function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=e.important,l="todo-list-item";return e.done&&(l+=" todo-list-item--done"),c&&(l+=" todo-list-item--important"),o.a.createElement("span",{className:l},o.a.createElement("span",{onClick:r},t),o.a.createElement("span",{className:"todo-list-item__icons"},o.a.createElement("button",{type:"button",className:"btn btn-default btn-sm",onClick:n},o.a.createElement("i",{className:"far fa-trash-alt"})),o.a.createElement("button",{type:"button",className:"btn btn-default btn-sm",onClick:a},o.a.createElement("i",{className:"fas fa-exclamation"}))))}}]),t}(a.Component)),O=(n(20),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=t.map(function(e){var t=e.id,c=Object(g.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(v,Object.assign({},c,{onDeleted:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleDone:function(){return r(t)}})))});return o.a.createElement("ul",{className:"list-group todo-list"},c)}),j=(n(21),function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.toDo,n=e.done;return o.a.createElement("div",{className:"item-status mb-2"},o.a.createElement("span",null,t," \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0441\u0434\u0435\u043b\u0430\u0442\u044c, ",n," \u0441\u0434\u0435\u043b\u0430\u043d\u043e"))}}]),t}(a.Component)),y=(n(22),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).buttons=[{name:"all",label:"\u0412\u0441\u0435"},{name:"active",label:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435"},{name:"done",label:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"}],n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onBtnClick,a=this.buttons.map(function(e){var a=e.name,r=e.label,c=t===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(c),key:a,onClick:function(){return n(a)}},r)});return o.a.createElement("div",{className:"btn-group item-status-filter mb-3",role:"group","aria-label":"Basic example"},a)}}]),t}(a.Component)),E=(n(23),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={label:""},n.onLabelChange=function(e){var t=e.target.value;n.setState({label:t})},n.onSubmit=function(e){e.preventDefault(),n.props.onAdded(n.state.label),n.setState({label:""})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add mt-3 d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u0427\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c?",onChange:this.onLabelChange,value:this.state.label}),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),t}(a.Component)),C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).maxId=100,n.state={todoData:[n.createTodoItem("Drink coffee"),n.createTodoItem("Create React App"),n.createTodoItem("Create Vue App"),n.createTodoItem("Go to bed")],term:"",filter:"all"},n.deleteItem=function(e){n.setState(function(t){var n=t.todoData,a=n.findIndex(function(t){return t.id===e});return{todoData:[].concat(Object(u.a)(n.slice(0,a)),Object(u.a)(n.slice(a+1)))}})},n.addItem=function(e){var t=n.createTodoItem(e);n.setState(function(e){var n=e.todoData;return{todoData:[].concat(Object(u.a)(n),[t])}})},n.searchItems=function(e,t){var n=t.toLowerCase();return 0===t.length?e:e.filter(function(e){return e.label.toLowerCase().indexOf(n)>-1})},n.onSearchChange=function(e){n.setState({term:e})},n.onBtnClick=function(e){n.setState({filter:e})},n.onToggleImportant=function(e){n.setState(function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"important")}})},n.onToggleDone=function(e){n.setState(function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"done")}})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.maxId++}}},{key:"toggleProperty",value:function(e,t,n){var a=e.findIndex(function(e){return e.id===t}),o=e[a],r=Object(i.a)({},o,Object(l.a)({},n,!o[n]));return[].concat(Object(u.a)(e.slice(0,a)),[r],Object(u.a)(e.slice(a+1)))}},{key:"filterItems",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter(function(e){return!e.done});case"done":return e.filter(function(e){return e.done});default:return e}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.term,a=e.filter,r=t.filter(function(e){return!e.done}).length,c=t.length-r,l=this.filterItems(this.searchItems(t,n),a);return o.a.createElement("div",{className:"container mt-4"},o.a.createElement(p,null),o.a.createElement(j,{toDo:r,done:c}),o.a.createElement(h,{onSearchChange:this.onSearchChange}),o.a.createElement(y,{filter:a,onBtnClick:this.onBtnClick}),o.a.createElement(O,{todos:l,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(E,{onAdded:this.addItem}))}}]),t}(a.Component);c.a.render(o.a.createElement(C,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.f32c26d1.chunk.js.map