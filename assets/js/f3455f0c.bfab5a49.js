(self.webpackChunkdev_cornelldti_org=self.webpackChunkdev_cornelldti_org||[]).push([[659],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,d=m["".concat(l,".").concat(p)]||m[p]||h[p]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1782:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={id:"assignments-examples-cp-requirements-algo",title:"CoursePlan Requirement Checking Design Document"},s={unversionedId:"assignments-examples-cp-requirements-algo",id:"assignments-examples-cp-requirements-algo",isDocsHomePage:!1,title:"CoursePlan Requirement Checking Design Document",description:"by Sam Zhou",source:"@site/docs/assignments-examples-cp-requirements-algo.md",sourceDirName:".",slug:"/assignments-examples-cp-requirements-algo",permalink:"/docs/assignments-examples-cp-requirements-algo",version:"current",frontMatter:{id:"assignments-examples-cp-requirements-algo",title:"CoursePlan Requirement Checking Design Document"},sidebar:"someSidebar",previous:{title:"Technical Critique / Security Vulnerability",permalink:"/docs/assignments-tech-critique-security-doc"}},l=[{value:"Background",id:"background",children:[]},{value:"Why Graph Is the Best Abstraction",id:"why-graph-is-the-best-abstraction",children:[]},{value:"Main Requirement Checking Steps",id:"main-requirement-checking-steps",children:[]},{value:"Implementation Guides for Various Features",id:"implementation-guides-for-various-features",children:[{value:"AP/IB/Transfer Credits",id:"apibtransfer-credits",children:[]},{value:"Double Counting Detection",id:"double-counting-detection",children:[]}]},{value:"Potential Concerns",id:"potential-concerns",children:[]}],u={toc:l};function c(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"by ",(0,o.kt)("a",{parentName:"p",href:"https://developersam.com/"},"Sam Zhou")),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"Before we use graphs to compute and represent the status of requirement fulfillment, we\ncompute them in a quite naive way. We have a big json that contains the mapping from\nrequirement to course list. i.e. given a requirement, you can use the information from the big\njson to tell which classes can be used to satisfy it or its sub-requirements.\nSuch setup can work in most of the cases. However, it makes certain problems more painful. The\nmost important example is double counting detection/elimination. The real-life example is the\nMATH 4710 class. It can be used to satisfy multiple things at once: engineering probability,\nengineering substitution for a CHEM class, or as one of your external spec. However, the\nengineering double counting rules says that you can double count it for probability, but not both\nfor CHEM replacement or external spec. The current mapping setup makes it both harder and\ncomputationally more expensive (O(n^2) instead of O(n)) to detect these bad double counting.\nAt the same time, it\u2019s also not a good idea to only map from courses to requirements, because\nthat will make computing requirement fulfillment statistics harder."),(0,o.kt)("h2",{id:"why-graph-is-the-best-abstraction"},"Why Graph Is the Best Abstraction"),(0,o.kt)("p",null,"From the above section, we can find that we need some abstraction that allows us to look at the\nrequirement fulfillment picture in both ways. For example, we should be able to easily find all\ncourses that satisfy one requirement, or all requirements that a course can potentially be used to\nsatisfy."),(0,o.kt)("p",null,"Graph is the only elementary data structure that can provide O(1) access for these operations.\nMore specifically, the graph is a bipartite graph, with requirements on one side and courses on\nthe other side. We can achieve optimal space efficiency by using two HashTables to encode the\ngraph: one is a map from requirements to course lists, and the other is a map from course to\nrequirement list. We can create a class that is composed of the two maps and ensures that they\nare in sync with each other."),(0,o.kt)("p",null,"It\u2019s worth noting that this bipartite graph should be the most powerful abstraction we need for\nrepresenting requirement fulfillment. No matter how crazy Cornell is when deciding graduation\nrequirement, we will always have a list of requirements and a list of courses to deal with, and the\nbipartite graph has the expressive power to encode all 2^(m","*","n) possible relations between two\nlists."),(0,o.kt)("h2",{id:"main-requirement-checking-steps"},"Main Requirement Checking Steps"),(0,o.kt)("p",null,"The core of the requirement checking steps are follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Building a rough graph. In this step, we connect requirement ",(0,o.kt)("em",{parentName:"li"},"r")," and course ",(0,o.kt)("em",{parentName:"li"},"c")," whenever we\nfind that ",(0,o.kt)("em",{parentName:"li"},"c")," is in the course list of ",(0,o.kt)("em",{parentName:"li"},"r")," in the big requirement json."),(0,o.kt)("li",{parentName:"ol"},"Some requirements might have multiple fulfillment options and the user may choose one\nof them. Remove all the edges from requirements to courses that are not part of the\nuser\u2019s choice."),(0,o.kt)("li",{parentName:"ol"},"The user might make some choices on tie-breaking for double-counted courses. Remove\nall the edges from courses to requirements that are not the picked requirement in the\nchoice.")),(0,o.kt)("p",null,"The following screenshots show an example walkthrough of the steps:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Courseplan Graph",src:n(9941).Z})),(0,o.kt)("h2",{id:"implementation-guides-for-various-features"},"Implementation Guides for Various Features"),(0,o.kt)("p",null,"The main algorithm provides only a simplified picture on how we can check requirement\nfulfillment. There are still some implementation details that need to be figured out to account\nfor all real world usage instead of pure math. Also, we need to account for all other required\nfeatures (e.g. AP/IB credits) that seems not to be part of the graph."),(0,o.kt)("p",null,"In Java, every object has equals() and hashCode() method which makes hash table\nimplementation easy. However, the JS Map object can only reliably work if you use string or\nnumber as its key. Therefore, in order for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Map<Requirement, Course[]>")," to work, we\nmust turn each requirement into a string that can uniquely identify itself. Same is true for\ncourses."),(0,o.kt)("p",null,"Since we directly maintain the requirement data by ourselves, we can give each requirement a\nunique identifier. We can use the semester ID and the course ID from the course roster to\nuniquely identify a course. Then for the hash table, we can give it an additional function\n",(0,o.kt)("inlineCode",{parentName:"p"},"getUniqueHash")," that takes a requirement/course and turns it into a string to be used for key.\nWith this setup, the map for the final example graph would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "requirementToCourses": {\n    // 1, 2, 3 are IDs of requirements\n    "1": [{ "id": 42, "roster": "FA20", "name": "CS 3410" }],\n    "2": [{ "id": 17, "roster": "SP20", "name": "MATH 4710" }],\n    "3": [{ "id": 65536, "roster": "FA19", "name": "CS 3420" }]\n  },\n  "coursesToRequirements": {\n    "FA20 42": [{ "id": 1, "name": "CS 3410/CS 3420" }],\n    "SP20 17": [{ "id": 2, "name": "Probability" }],\n    "FA19 65536": [{ "id": 3, "name": "Elective" }]\n  }\n}\n')),(0,o.kt)("h3",{id:"apibtransfer-credits"},"AP/IB/Transfer Credits"),(0,o.kt)("p",null,"We can use the equality notation setup in the last section to easily achieve accounting for the\ncredits. Every AP/IB test or transfer course is designed to be a replacement for some class.\nTherefore, we can give it the same ID as the course it will replace. For example, we can give AP\nCS the same ID as the CS 1110, so that AP CS will be a fake course that looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "roster": "FA20", "id": 1234, "name": "AP CS" }\n')),(0,o.kt)("p",null,"while the CS 1110 object might look like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "roster": "FA20", "id": 1234, "name": "CS 1110" }\n')),(0,o.kt)("h3",{id:"double-counting-detection"},"Double Counting Detection"),(0,o.kt)("p",null,"To detect illegally double-counted courses, we can linearly scan through every course. For every\ncourse, we find all requirements that are connected to it. For those connected requirements, we\nfilter away all requirements that allow double counting (e.g. engineering probability). Then if the\nleftover list has length >= 2, we know that the course is illegally double-counted."),(0,o.kt)("h2",{id:"potential-concerns"},"Potential Concerns"),(0,o.kt)("p",null,"The current code is not written in a way that expects to get a graph for requirement fulfillment.\nTherefore, we have to write additional adapter code to transform the graph structure into the\nflattened list to make it work with the old code in the short term. However, given the powerful\nabstraction and ease of feature implementation the graph can provide, this is a painful but the\ncorrect migration to do."),(0,o.kt)("p",null,"We also currently have an outstanding PR on toggleable requirements that was created before I\nintroduced this new setup, so we also have to rework on that PR so make it integrated to the rest\nof the system."))}c.isMDXComponent=!0},9941:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cp-requirements-algo-graph-a90d62b0a86c334912f58371ca1078da.png"}}]);