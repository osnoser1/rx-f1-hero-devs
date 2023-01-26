"use strict";(self.webpackChunkrx_f1_hero_devs=self.webpackChunkrx_f1_hero_devs||[]).push([[933],{3933:(N,c,n)=>{n.r(c),n.d(c,{default:()=>A});var e=n(4650),h=n(6895),u=n(9299),S=n(4004),g=n(3151),C=n(3900),v=n(190),f=n(6448),D=n(7616),p=n(4549);class r{constructor(){this.http=(0,e.f3M)(f.OE),this.path="driverStandings.json"}getAll(t){const{season:a,round:d,...l}=t??{},z=(0,D.V)(l),Q=(0,v.Z)(a)?`${a}/`:"",L=(0,v.Z)(d)?`${d}/`:"";return this.http.get(`${Q}${L}${this.path}`,{params:z}).pipe((0,p.Oi)("Standings","StandingsLists[0].DriverStandings"))}}r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac});var $=n(2546),m=n(8645);function Z(s){const t=(0,m.J2)(s);return t.season=t.season?Number(t.season):2018,t.round=t.round?Number(t.round):"last",t}function M(s){const t=(0,$.Z)(s);return 2018===t.season&&delete t.season,"last"===t.round&&delete t.round,(0,m.mj)(t)}class i{constructor(){this.driverStandingsService=(0,e.f3M)(r),this.loading=(0,e.f3M)(f.bz),this.route=(0,e.f3M)(u.gz),this.queryParams$=this.route.queryParams.pipe((0,S.U)(Z),(0,g.d)(1)),this.data$=this.queryParams$.pipe((0,C.w)(t=>this.driverStandingsService.getAll(t).pipe((0,p.sU)(this.loading))),(0,g.d)(1)),this.loading$=this.loading.isLoading$}}i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac});var y=n(4055),P=n(7858);class o{constructor(){this.facade=(0,e.f3M)(i),this.route=(0,e.f3M)(u.gz),this.router=(0,e.f3M)(u.F0),this.onQueryChange=(0,e.f3M)(P.D)(M),this.columns=[{title:"Pos",value:t=>t.position},{title:"Driver",value:({Driver:t})=>`${t.givenName} ${t.familyName}`},{title:"Constructor",value:({Constructors:t})=>t[0]?.name},{title:"Points",value:t=>t.points},{title:"Wins",value:t=>t.wins}],this.filters=[{name:"season",title:"Season",type:"select",options:[2018,2019,2020,2021,2022]},{name:"round",title:"Round",type:"select",options:[{value:"last",text:"Last"},1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]}]}}o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-driver-standings"]],standalone:!0,features:[e._Bn([i]),e.jDz],decls:8,vars:14,consts:[[3,"filters","query","queryChange"],[3,"columns","data","loading","query","queryChange"]],template:function(t,a){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Driver Standings after a race"),e.qZA(),e.TgZ(2,"app-list-filter",0),e.NdJ("queryChange",function(l){return a.onQueryChange(l)}),e.ALo(3,"async"),e.qZA(),e.TgZ(4,"app-table-preview",1),e.NdJ("queryChange",function(l){return a.onQueryChange(l)}),e.ALo(5,"async"),e.ALo(6,"async"),e.ALo(7,"async"),e.qZA()),2&t&&(e.xp6(2),e.Q6J("filters",a.filters)("query",e.lcZ(3,6,a.facade.queryParams$)),e.xp6(2),e.Q6J("columns",a.columns)("data",e.lcZ(5,8,a.facade.data$))("loading",e.lcZ(6,10,a.facade.loading$))("query",e.lcZ(7,12,a.facade.queryParams$)))},dependencies:[h.ez,h.Ov,y.mM,y.Hx],styles:["[_nghost-%COMP%]{display:grid;grid-template-rows:auto auto 1fr;height:100%;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch}"],changeDetection:0});const A=[{path:"",component:o,providers:[r]}]}}]);