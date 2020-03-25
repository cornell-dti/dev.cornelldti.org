(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),i=(n(0),n(153)),a={id:"getting-started-contributing",title:"Contributing"},c={id:"getting-started-contributing",title:"Contributing",description:"## Introduction",source:"@site/docs/getting-started-contributing.md",permalink:"/docs/getting-started-contributing",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/getting-started-introduction"},next:{title:"Development Workflow",permalink:"/docs/onboarding-dev-workflow"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Local Development",id:"local-development",children:[]},{value:"Review",id:"review",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"This page introduces you the process of contributing to this repository."),Object(i.b)("p",null,"If you don't want to contribute to this repository, feel free to skip this page."),Object(i.b)("h2",{id:"local-development"},"Local Development"),Object(i.b)("p",null,"You need to use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://classic.yarnpkg.com/"}),"Yarn")," to install all dependencies."),Object(i.b)("p",null,"To create a local build, first clone the repository, then run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn")," in the repository root."),Object(i.b)("p",null,"Once all the dependencies are installed, run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn start")," to start a dev server.\nYou can make changes to the docs in the ",Object(i.b)("inlineCode",{parentName:"p"},"docs")," folder or customize the landing page in\n",Object(i.b)("inlineCode",{parentName:"p"},"src/pages/index.tsx"),". The dev server will automatically reload the page once you saved your\nchanges."),Object(i.b)("p",null,"It might be helpful to read ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/markdown-features"}),"Docusaurus's Guide"),"\nif you are unfamiliar with all the supported markdown features."),Object(i.b)("h2",{id:"review"},"Review"),Object(i.b)("p",null,"Create a pull request in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/cornell-dti/dev.cornelldti.org"}),"this repository"),", ask\nrepository maintainer (usually developer leads) to review."),Object(i.b)("p",null,"Once your pull request is approved and merged, continuous deployment system will automatically build\nthe website and deploy it to GitHub pages."))}p.isMDXComponent=!0},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,f=s["".concat(a,".").concat(b)]||s[b]||d[b]||i;return n?o.a.createElement(f,c({ref:t},u,{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);