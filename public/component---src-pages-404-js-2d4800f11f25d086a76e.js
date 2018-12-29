(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(163),i=n(161);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(141),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(148),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},155:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(52),s=n(2),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},156:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){"use strict";var a=n(162),r=n(0),o=n.n(r),i=n(4),c=n.n(i),s=n(176),u=n.n(s),l=n(142);function d(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,c=e.title;return o.a.createElement(l.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},163:function(e,t,n){"use strict";var a=n(154),r=n(0),o=n.n(r),i=n(4),c=n.n(i),s=n(142),u=(n(32),n(7)),l=n.n(u),d=n(165),p=n.n(d),m=n(174),f=n.n(m),y=n(175),h=n.n(y),g=o.a.createContext(),E=function(e,t){switch(t.type){case"LOGOUT":case"LOGIN":return Object.assign({},e,{userProfile:t.payload});default:return e}},b=(r.Component,g.Consumer),v=(n(156),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleLogOut=function(){var e=t.props,n=e.context,a=e.history;n.dispatch({type:"LOGOUT",payload:null}),console.log("User logged out"),a.push("/")},t.componentDidUpdate=function(e){},t.render=function(){return o.a.createElement(b,null,function(e){return o.a.createElement(p.a,{default:!0,collapseOnSelect:!0},o.a.createElement(p.a.Header,null,o.a.createElement(p.a.Brand,null,o.a.createElement(s.Link,{to:"/"},"easy.message.bus")),o.a.createElement(p.a.Toggle,null)),o.a.createElement(p.a.Collapse,null,o.a.createElement(f.a,{pullRight:!0},o.a.createElement(h.a,{eventKey:1,componentClass:s.Link,href:"/",to:"/"},"HOME"),o.a.createElement(h.a,{eventKey:2,componentClass:s.Link,href:"/about",to:"/about"},"ABOUT"),o.a.createElement(h.a,{eventKey:3,componentClass:s.Link,href:"/news",to:"/news"},"NEWS"),o.a.createElement(h.a,{eventKey:4,componentClass:s.Link,href:"/blog",to:"/blog"},"BLOG"),o.a.createElement(h.a,{eventKey:5,componentClass:s.Link,href:"/dashboard",to:"/dashboard"},"DASHBOARD"),e&&e.userProfile?o.a.createElement(h.a,{eventKey:6,componentClass:s.Link,onClick:t.handleLogOut,to:""},"LOGOUT"):o.a.createElement(h.a,{eventKey:7,componentClass:s.Link,href:"/login",to:"/login"},"LOGIN"))))})},t}return l()(t,e),t}(r.Component)),w=function(e){return o.a.createElement(b,null,function(t){return o.a.createElement(v,Object.assign({},e,{context:t}))})},O=(n(160),function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"1511484095",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});O.propTypes={children:c.a.node.isRequired};t.a=O}}]);
//# sourceMappingURL=component---src-pages-404-js-2d4800f11f25d086a76e.js.map