webpackJsonp([3],{O5l8:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.author))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Pageviews",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.pageviews)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{"class-name":"status-col",label:"Status",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(e.row.status))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"Display_time",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),t._v(" "),a("span",[t._v(t._s(e.row.display_time))])]}}])})],1)],1)},l=[],s={render:n,staticRenderFns:l};e.a=s},OVQD:function(t,e,a){"use strict";function n(t){return a.i(l.a)({url:"/table/list",method:"get",params:t})}e.a=n;var l=a("Vo7i")},YBQJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("h5sP"),l=a("O5l8"),s=a("VU/8"),i=s(n.a,l.a,null,null,null);e.default=i.exports},h5sP:function(t,e,a){"use strict";var n=a("OVQD");e.a={data:function(){return{list:null,listLoading:!0}},filters:{statusFilter:function(t){return{published:"success",draft:"gray",deleted:"danger"}[t]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,a.i(n.a)(this.listQuery).then(function(e){t.list=e.data.items,t.listLoading=!1})}}}}});
//# sourceMappingURL=3.875af051635e100a06e4.js.map