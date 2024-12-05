"use strict";(self.webpackChunksimple_movie=self.webpackChunksimple_movie||[]).push([[506],{345:(e,s,t)=>{t.d(s,{a:()=>d,A:()=>o});t(43);var r=t(906),l=t(624),a=t(488),i=t(632),n=t(579);const c=e=>(0,n.jsx)("div",{className:`skeleton ${e.className}`,style:{height:e.height,width:e.width||"100%",borderRadius:e.radius}});const o=(0,i.Xc)((e=>{let{item:s}=e;const{title:t,release_date:i,poster_path:c,vote_average:o,id:d}=s,h=(0,r.Zp)();return(0,n.jsxs)("div",{className:"movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full",children:[(0,n.jsx)("img",{src:a.qK.image500(c),alt:"",className:"w-full h-[250px] object-cover rounded-lg mb-4"}),(0,n.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,n.jsx)("h3",{className:" font-bold text-xl mb-3",children:t}),(0,n.jsxs)("div",{className:"flex items-center justify-between opacity-50 text-sm mb-8",children:[(0,n.jsx)("span",{children:new Date(i).getFullYear()}),(0,n.jsx)("span",{children:o})]})]}),(0,n.jsx)(l.A,{bgColor:"secondary",onClick:()=>h(`/movie/${d}`),children:"Watch Now"})]})}),{FallbackComponent:function(){return(0,n.jsx)("p",{className:"text-red-400 bg-red-50",children:"Some thing went wrong with your components"})}}),d=()=>(0,n.jsxs)("div",{className:"movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full",children:[(0,n.jsx)(c,{width:"100%",height:"250px",radios:"8px",className:"mb-5"}),(0,n.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,n.jsx)("h3",{className:" font-bold text-xl mb-3",children:(0,n.jsx)(c,{width:"100%",height:"20px"})}),(0,n.jsxs)("div",{className:"flex items-center justify-between opacity-50 text-sm mb-8",children:[(0,n.jsx)("span",{children:(0,n.jsx)(c,{width:"50px",height:"20px"})}),(0,n.jsx)("span",{children:(0,n.jsx)(c,{width:"30px",height:"20px"})})]}),(0,n.jsx)(c,{width:"100%",height:"45px",radius:"6px"})]})]})},506:(e,s,t)=>{t.r(s),t.d(s,{default:()=>d});t(43);var r=t(906),l=t(404),a=t(488),i=t(328),n=t(345),c=t(579);function o(e){let{type:s="videos"}=e;const{movieId:t}=(0,r.g)(),{data:o}=(0,l.Ay)(a.qK.getMovieMeta(t,s),a.GO);if(!o)return null;if("credits"===s){const{cast:e}=o;return!e||e.length<=0?null:(0,c.jsxs)("div",{className:"py-10",children:[(0,c.jsx)("h2",{className:"text-center text-3xl mb-10",children:"Casts"}),(0,c.jsx)("div",{className:"grid grid-cols-4 gap-5",children:e.slice(0,4).map((e=>(0,c.jsxs)("div",{className:"cast-item",children:[(0,c.jsx)("img",{src:a.qK.imageOriginal(e.profile_path),className:"w-full h-[350px] object-cover rounded-lg mb-3",alt:""}),(0,c.jsx)("h3",{className:"text-xl font-medium",children:e.name})]},e.id)))})]})}{const{results:e}=o;if(!e||e.length<=0)return null;if("videos"===s)return(0,c.jsx)("div",{className:"py-10",children:(0,c.jsx)("div",{className:"flex flex-col gap-10",children:e.slice(0,2).map((e=>(0,c.jsxs)("div",{className:"",children:[(0,c.jsx)("h3",{className:"mb-5 text-xl font-medium p-3 bg-secondary inline-block",children:e.name}),(0,c.jsx)("div",{className:"w-full aspect-video",children:(0,c.jsx)("iframe",{width:"864",height:"486",src:`https://www.youtube.com/embed/${e.key}`,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"w-full h-full object-fill"})},e.id)]},e.id)))})});if("similar"===s)return(0,c.jsxs)("div",{className:"py-10",children:[(0,c.jsx)("h2",{className:"text-3xl font-medium mb-10",children:"Similar movies"}),(0,c.jsx)("div",{className:"movie-list",children:(0,c.jsx)(i.RC,{grabCursor:"true",spaceBetween:40,slidesPerView:"auto",children:e.length>0&&e.map((e=>(0,c.jsx)(i.qr,{children:(0,c.jsx)(n.A,{item:e})},e.id)))})})]})}return null}const d=()=>{const{movieId:e}=(0,r.g)(),{data:s}=(0,l.Ay)(a.qK.getMovieDetails(e),a.GO);if(!s)return null;const{backdrop_path:t,poster_path:i,title:n,genres:d,overview:h}=s;return(0,c.jsxs)("div",{className:"py-10",children:[(0,c.jsxs)("div",{className:"w-full h-[600px] relative ",children:[(0,c.jsx)("div",{className:"overlay inset-0 bg-black opacity-65 absolute"}),(0,c.jsx)("div",{className:"w-full h-full bg-cover bg-no-repeat",style:{backgroundImage:`url(${a.qK.imageOriginal(t)})`}})]}),(0,c.jsx)("div",{className:"w-full h-[400px] max-w-[800px] mx-auto",children:(0,c.jsx)("img",{src:a.qK.imageOriginal(i),alt:"",className:"w-full h-full object-cover rounded-xl -mt-[200px] relative z-10 pb-10 "})}),(0,c.jsx)("h1",{className:"text-white text-center font-bold text-4xl mb-10",children:n}),(0,c.jsx)("div",{className:"flex justify-center items-center gap-x-5 mb-10",children:d.length>0&&d.map((e=>(0,c.jsx)("span",{className:"text-primary border border-primary px-4 py-2",children:e.name},e.id)))}),(0,c.jsx)("div",{className:"max-w-[700px] leading-relaxed text-center mx-auto mb-10",children:(0,c.jsx)("p",{className:"text-lg",children:h})}),(0,c.jsx)(o,{type:"credits"}),(0,c.jsx)(o,{type:"videos"}),(0,c.jsx)(o,{type:"similar"})]})}},632:(e,s,t)=>{t.d(s,{Xc:()=>n});var r=t(43);const l=(0,r.createContext)(null),a={didCatch:!1,error:null};class i extends r.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=a}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(null!==e){for(var s,t,r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];null===(s=(t=this.props).onReset)||void 0===s||s.call(t,{args:l,reason:"imperative-api"}),this.setState(a)}}componentDidCatch(e,s){var t,r;null===(t=(r=this.props).onError)||void 0===t||t.call(r,e,s)}componentDidUpdate(e,s){const{didCatch:t}=this.state,{resetKeys:r}=this.props;var l,i;t&&null!==s.error&&function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length!==s.length||e.some(((e,t)=>!Object.is(e,s[t])))}(e.resetKeys,r)&&(null===(l=(i=this.props).onReset)||void 0===l||l.call(i,{next:r,prev:e.resetKeys,reason:"keys"}),this.setState(a))}render(){const{children:e,fallbackRender:s,FallbackComponent:t,fallback:a}=this.props,{didCatch:i,error:n}=this.state;let c=e;if(i){const e={error:n,resetErrorBoundary:this.resetErrorBoundary};if("function"===typeof s)c=s(e);else if(t)c=(0,r.createElement)(t,e);else{if(void 0===a)throw n;c=a}}return(0,r.createElement)(l.Provider,{value:{didCatch:i,error:n,resetErrorBoundary:this.resetErrorBoundary}},c)}}function n(e,s){const t=(0,r.forwardRef)(((t,l)=>(0,r.createElement)(i,s,(0,r.createElement)(e,{...t,ref:l})))),l=e.displayName||e.name||"Unknown";return t.displayName="withErrorBoundary(".concat(l,")"),t}}}]);
//# sourceMappingURL=506.72dbb565.chunk.js.map