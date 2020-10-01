(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{71:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(6),i=(r(0),r(80)),a={id:"guide-code-review",title:"Code Review"},l={unversionedId:"guide-code-review",id:"guide-code-review",isDocsHomePage:!1,title:"Code Review",description:"Introduction",source:"@site/docs/guide-code-review.md",slug:"/guide-code-review",permalink:"/docs/guide-code-review",version:"current",sidebar:"someSidebar",previous:{title:"DevOps",permalink:"/docs/guide-devops"},next:{title:"Commonly Used Docs Pointer",permalink:"/docs/resource-common-docs-pointer"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Reviewer&#39;s Responsibility",id:"reviewers-responsibility",children:[]},{value:"Dos and Don&#39;ts",id:"dos-and-donts",children:[]},{value:"Relevant Docs",id:"relevant-docs",children:[]}],u={rightToc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Code review is necessary to ensure our code quality, because linter and type checker cannot catch\nall problems."),Object(i.b)("p",null,"At Cornell DTI, you will need 1 approving review to merge your changes to master, and at least 3\napproving review to deploy master to production. Every developer on your team can review your code."),Object(i.b)("h2",{id:"reviewers-responsibility"},"Reviewer's Responsibility"),Object(i.b)("p",null,"As a reviewer, you should ask yourself these questions?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Does the author implement the feature in an efficient way?"),Object(i.b)("li",{parentName:"ul"},"Has the author considered all edge cases?"),Object(i.b)("li",{parentName:"ul"},"Does the pull request introduce a security vulnerability?"),Object(i.b)("li",{parentName:"ul"},"Are there any ugly hacks?"),Object(i.b)("li",{parentName:"ul"},"etc")),Object(i.b)("p",null,"If there is anything unclear, you should ask for the author's clarification. Ideally, these\nclafications should also be put in the code comments."),Object(i.b)("h2",{id:"dos-and-donts"},"Dos and Don'ts"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Do review pull requests often."),Object(i.b)("li",{parentName:"ul"},"Do reject bad code."),Object(i.b)("li",{parentName:"ul"},"Do reject pull requests with no summary and test plan."),Object(i.b)("li",{parentName:"ul"},"Do reject giant pull requests."),Object(i.b)("li",{parentName:"ul"},"Do address reviewer's concern if they are valid."),Object(i.b)("li",{parentName:"ul"},"Do defend your approach, if you think your approach is better."),Object(i.b)("li",{parentName:"ul"},"Do let the ",Object(i.b)("strong",{parentName:"li"},"author")," merge the pull request."),Object(i.b)("li",{parentName:"ul"},"Don't take pull request rejections personally."),Object(i.b)("li",{parentName:"ul"},"Don't ignore your peer's pull requests."),Object(i.b)("li",{parentName:"ul"},"Don't accept pull requests that you don't understand.")),Object(i.b)("h2",{id:"relevant-docs"},"Relevant Docs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests"}),"GitHub Pull Requests Review"))))}s.isMDXComponent=!0},80:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return r?o.a.createElement(m,l({ref:t},u,{components:r})):o.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);