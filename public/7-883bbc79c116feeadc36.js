(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{270:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var s,r=i(a(7)),o=i(a(52)),l=i(a(178)),d=i(a(179)),n=i(a(0)),u=i(a(4)),c=function(e){var t=(0,d.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var g=function(e,t){(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),s).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",s=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",n=e.opacity?e.opacity:"1";return"<picture>"+i+s+"<img "+l+d+t+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+n+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=n.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,s=e.onError,r=(0,l.default)(e,["style","onLoad","onError"]);return n.default.createElement("img",(0,d.default)({},r,{onLoad:i,onError:s,ref:t,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,s=!1,r=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,s=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,s=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:s,fadeIn:r,hasNoScript:d,seenBefore:l},a.imageRef=n.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,s=e.style,r=void 0===s?{}:s,o=e.imgStyle,l=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,S=e.Tag,w="boolean"==typeof y?"lightgray":y,v=(0,d.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),E=(0,d.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),L={title:t,alt:this.state.isVisible?"":a,style:v,className:p};if(h){var I=h;return n.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},n.default.createElement(S,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&n.default.createElement(b,(0,d.default)({src:I.base64},L)),I.tracedSVG&&n.default.createElement(b,(0,d.default)({src:I.tracedSVG},L)),w&&n.default.createElement(S,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&n.default.createElement("picture",null,I.srcSetWebp&&n.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),n.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),n.default.createElement(b,{alt:a,title:t,src:I.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,d.default)({alt:a,title:t},I))}}))}if(g){var R=g,z=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},r);return"inherit"===r.display&&delete z.display,n.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&n.default.createElement(b,(0,d.default)({src:R.base64},L)),R.tracedSVG&&n.default.createElement(b,(0,d.default)({src:R.tracedSVG},L)),w&&n.default.createElement(S,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&n.default.createElement("picture",null,R.srcSetWebp&&n.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),n.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),n.default.createElement(b,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,d.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(n.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var S=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),w=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});y.propTypes={resolutions:S,sizes:w,fixed:S,fluid:w,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string};var v=y;t.default=v},271:function(e,t,a){}}]);
//# sourceMappingURL=7-883bbc79c116feeadc36.js.map