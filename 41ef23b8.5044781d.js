(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{100:function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"b",(function(){return b}));var r=o(0),n=o.n(r);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=n.a.createContext({}),d=function(e){var t=n.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=d(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(o),h=r,b=c["".concat(a,".").concat(h)]||c[h]||p[h]||i;return o?n.a.createElement(b,l(l({ref:t},u),{},{components:o})):n.a.createElement(b,l({ref:t},u))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},77:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return d}));var r=o(3),n=o(7),i=(o(0),o(100)),a={id:"grading-dev-tpm-portfolios",title:"TPM & Development Portfolio"},l={unversionedId:"grading-dev-tpm-portfolios",id:"grading-dev-tpm-portfolios",isDocsHomePage:!1,title:"TPM & Development Portfolio",description:"Given there have been many questions about what is allowed for a developer portfolio, here is a description of the different types of assignments allowed for a portfolio. Note that these descriptions assume people are 3 credits, and 1 credit should see the 1 credit rubric.",source:"@site/docs/grading-dev-tpm-portfolios.md",slug:"/grading-dev-tpm-portfolios",permalink:"/docs/grading-dev-tpm-portfolios",version:"current",sidebar:"someSidebar",previous:{title:"Dev & TPM Grading Rubric",permalink:"/docs/grading-dev-tpm-rubric"},next:{title:"Common Requirements",permalink:"/docs/assignments-common-requirements"}},s=[{value:"Developer",id:"developer",children:[{value:"Pull Request",id:"pull-request",children:[]},{value:"Link to Personal Repository",id:"link-to-personal-repository",children:[]},{value:"Design Document",id:"design-document",children:[]},{value:"Commit",id:"commit",children:[]},{value:"Other Role Portfolio",id:"other-role-portfolio",children:[]}]},{value:"TPM",id:"tpm",children:[]}],u={toc:s};function d(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Given there have been many questions about what is allowed for a developer portfolio, here is a description of the different types of assignments allowed for a portfolio. Note that these descriptions assume people are ",Object(i.b)("strong",{parentName:"p"},"3 credits"),", and 1 credit should see the 1 credit rubric."),Object(i.b)("h2",{id:"developer"},"Developer"),Object(i.b)("p",null,"Every portfolio must include some indication of what work you have done (see below). ",Object(i.b)("strong",{parentName:"p"},"In general, if you submit multiple PRs in one portfolio, only one will count towards the 4 minimum.")," However, submitting multiple PR links in one portfolio will increase your chances of getting a higher grade in the quality and contribution sections of your grade. Moreover, your PRs should be made throughout the semester. While it doesn't necessarily have to be in exact 2 week increments, if the four you submit were all made in around the same time (like all were made in the month of September), that will not all count.\nAdditionally, two of the four portfolios must include a link to a pull request you reviewed. The review made ",Object(i.b)("strong",{parentName:"p"},"must"),' be more than a "LGTM". If it truly is all good (which is unlikely, if nothing else there are almost always nits to catch), then mention things you were impressed that they did! ',Object(i.b)("strong",{parentName:"p"},"Unless granted an exception by the developer leads, you must include a reviewed PR in two separate portfolios, and adding 2 reviews in one portfolio will not count towards the bare minimum.")),Object(i.b)("p",null,"For the work submitted in every portfolio, in general, the main submission here should be a ",Object(i.b)("strong",{parentName:"p"},"link to a published (in review, approved, or merged) pull request.")," However, there are a few other options in cases where a pull request does not work, so all options and a description will be found below."),Object(i.b)("h3",{id:"pull-request"},"Pull Request"),Object(i.b)("p",null,"This is the default option, and in general, this is what you should submit. You need to link a ",Object(i.b)("strong",{parentName:"p"},"non-trivial, published")," pull request. Unless you + the TPM have given us a valid reason, you should be author to at least some, if not all of the commits on the pull request. In general, these should be merged, approved, or far into the review process, but we will not require that to prevent people from automatically approving PRs in order to ensure that person has an approved PR for the portfolio. All you need to include is the link, your PR description on GitHub should tell us what we need to know!"),Object(i.b)("h3",{id:"link-to-personal-repository"},"Link to Personal Repository"),Object(i.b)("p",null,"A link to a personal repository should be used for three reasons:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You are new to the team or have recently switched subteams and you spent the sprint learning the tech stack"),Object(i.b)("li",{parentName:"ul"},"Your subteam just pivoted tech stacks (or even projects) and you have been picking up the new technical stack"),Object(i.b)("li",{parentName:"ul"},"You created a demo to test a model you have been developing, and you ",Object(i.b)("strong",{parentName:"li"},"and your TPM")," did not want this to appear on the team's repository.")),Object(i.b)("p",null,"With the link, in the README, you should describe"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'What this repository is (vue tutorial? Firebase tutorial?) and specifically what it does.\na. So a bad readme would just say "this is a vue tutorial" while a good readme would say "this is a vue tutorial. In the tutorial, I create a website that lists recipes and sorts them by ingredients needed."\nb. Additionally, screenshots of your work is greatly appreciated if possible'),Object(i.b)("li",{parentName:"ol"},"Why you are doing this tutorial (2-3 sentences will suffice)")),Object(i.b)("p",null,"To do this, the dev leads need to be contacted before the portfolio deadline. Note that if you reach out too late, we may not be able to respond before the deadline, so make sure you reach out early! We will then reach out to your TPM to ensure the personal repository aligns with the work you have been doing this sprint."),Object(i.b)("h3",{id:"design-document"},"Design Document"),Object(i.b)("p",null,"This should only be used for the cases where you have a large-scale task that needs to be completed and you need to research it before completion. Some potential use case examples are:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"You are on Flux and you want to create an improved algorithm to estimate wait time. Before you start coding, you do some research on a better model"),Object(i.b)("li",{parentName:"ol"},"You are on CoursePlan and you are redesigning the requirements algorithm."),Object(i.b)("li",{parentName:"ol"},"You are refactoring the backend to work better with a new, major specification about your product while also not breaking the current codebase. You are thinking about ways to do this before implementing it.")),Object(i.b)("p",null,"This is ",Object(i.b)("strong",{parentName:"p"},"not")," the same as the developer assignment! The portfolio should be focused on the research conducted while the developer assignment is more focused on how you will implement it."),Object(i.b)("p",null,"To do this, you must include a link to a Google Document (it must be a sharable link or be shared with the developer leads) with the following information:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"What are you researching?"),Object(i.b)("li",{parentName:"ol"},"Why is it relevant to your subteam work?"),Object(i.b)("li",{parentName:"ol"},"Write out your research! Bullets or paragraphs are acceptable"),Object(i.b)("li",{parentName:"ol"},"Include ",Object(i.b)("strong",{parentName:"li"},"either")," a link to GitHub issue(s) about the tasks you need to implement based on what you researched or a screenshot of a Monday.com/trello/Asana/Jira board with the task(s) that will be doing based on your research")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note that we will expect your future portfolios to resolve the GitHub issue(s) or task(s) you listed in the Google Document. If you do this in the second half of the semester, then we will look for this in the following semester.")),Object(i.b)("h3",{id:"commit"},"Commit"),Object(i.b)("p",null,"This case should ",Object(i.b)("strong",{parentName:"p"},"rarely, if ever")," come into play. A GitHub commit is allowed if a task you were given is ",Object(i.b)("strong",{parentName:"p"},"too difficult to be done in a two week sprint AND does not split into multiple PRs well.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This would mainly be cases where you tried to implement it doing x, that didn't work for reason y, so you had to try again.")),Object(i.b)("p",null,"Both you and your TPM should communicate with us if such a situation arises. In the text box with the link, you also need to write an explanation as to why you are submitting a commit link instead of a PR. Moreover, the commit itself needs to still be nontrivial, and a future portfolio needs to include the PR that contains this commit"),Object(i.b)("h3",{id:"other-role-portfolio"},"Other Role Portfolio"),Object(i.b)("p",null,"Like the commit, this case should ",Object(i.b)("strong",{parentName:"p"},"rarely, if ever")," come into play. If your team needs you to temporarily take on a different role's work (design, business, PM, TPM) for ",Object(i.b)("strong",{parentName:"p"},"up to one sprint"),", you can also submit a different role's portfolio as your dev portfolio. However, there are some limitations"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"As soon as you realize you will be doing other role work for a majority of the sprint"),", you and your TPM needs to let the developer leads & the respective role's leads know, as that other role may try to move someone else to fill your team's need instead. Ideally the TPM should have let us know before you even find out about this, but do message us in case we missed something or there was miscommunication between the TPM and Dev Leads."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"This can only be done for one sprint.")," If you need to continue in that other role, then we will interview you for a half dev half X or potentially even a full transition to the new role.")),Object(i.b)("h2",{id:"tpm"},"TPM"),Object(i.b)("p",null,"For technical project manager, you need to include 1-2 paragraphs with the following information:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"What did you personally do these past two weeks?"),Object(i.b)("li",{parentName:"ol"},"What did the team do the past two weeks?")),Object(i.b)("p",null,"In addition, if you have ",Object(i.b)("strong",{parentName:"p"},"created and/or reviewed pull requests"),", please include those links (split it by PRs you made & PRs you reviewed). There is no required minimum or maximum but please do include them when you do them."))}d.isMDXComponent=!0}}]);