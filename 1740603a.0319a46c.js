(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{284:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/github-desktop-create-pr-3988bce05ba8fd841ec6e96feb0c3541.png"},285:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/github-web-create-pr-631eaa85049254ef42bc49af4866b2c9.png"},286:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/required-checks-8fc8e940b14cde5c7a8865a0e0e886d7.png"},287:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/linter-error-annotation-28c93eb23a3dcb243ec95bff483f2cae.png"},288:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/dti-github-bot-pr-too-big-271e3bedc9c7fa3230563d6a181807df.png"},55:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(80)),i=n(89),l=n(90),c={id:"onboarding-dev-workflow",title:"Development Workflow"},u={unversionedId:"onboarding-dev-workflow",id:"onboarding-dev-workflow",isDocsHomePage:!1,title:"Development Workflow",description:"Introduction",source:"@site/docs/onboarding-dev-workflow.md",slug:"/onboarding-dev-workflow",permalink:"/docs/onboarding-dev-workflow",version:"current",sidebar:"someSidebar",previous:{title:"Join our GitHub Organization",permalink:"/docs/onboarding-join-github-organization"},next:{title:"Text Editor",permalink:"/docs/onboarding-editor"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Concrete Steps",id:"concrete-steps",children:[{value:"Step 0: setup a local project",id:"step-0-setup-a-local-project",children:[]},{value:"Step 1: plan",id:"step-1-plan",children:[]},{value:"Step 2: sync with <code>master</code> branch",id:"step-2-sync-with-master-branch",children:[]},{value:"Step 3: create a local branch",id:"step-3-create-a-local-branch",children:[]},{value:"Step 4: make your changes",id:"step-4-make-your-changes",children:[]},{value:"Step 5: test your changes",id:"step-5-test-your-changes",children:[]},{value:"Step 6: checking your code quality",id:"step-6-checking-your-code-quality",children:[]},{value:"Step 7: push your changes to remote",id:"step-7-push-your-changes-to-remote",children:[]},{value:"Step 8: create a pull request",id:"step-8-create-a-pull-request",children:[]},{value:"Step 9: waiting for review",id:"step-9-waiting-for-review",children:[]},{value:"Step 10: merge into <code>master</code>",id:"step-10-merge-into-master",children:[]}]}],b={rightToc:s};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"If you have worked with Git in other CS classes, you might be familiar with pushing to ",Object(o.b)("inlineCode",{parentName:"p"},"master"),"\ndirectly. At Cornell DTI, pushing to ",Object(o.b)("inlineCode",{parentName:"p"},"master")," is prohibited and the policy is strictly enforced by\nGitHub branch protection with no exception."),Object(o.b)("p",null,"If you are not familiar with the pull request workflow, you should read the following steps and\nfollow them for each of your task."),Object(o.b)("h2",{id:"concrete-steps"},"Concrete Steps"),Object(o.b)("h3",{id:"step-0-setup-a-local-project"},"Step 0: setup a local project"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./onboarding-git#setup-your-project"}),"Setup your project")," in the Git tutorial."),Object(o.b)("p",null,"Skip if you alreday have your repository setup."),Object(o.b)("h3",{id:"step-1-plan"},"Step 1: plan"),Object(o.b)("p",null,'For every pull request, your "significant lines" usually should not exceed 1000.'),Object(o.b)("p",null,"Significant lines are defined by all your changes minus"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Lock files like ",Object(o.b)("inlineCode",{parentName:"li"},"package-lock.json"),", ",Object(o.b)("inlineCode",{parentName:"li"},"yarn.lock"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Podspec.lock"),", etc."),Object(o.b)("li",{parentName:"ul"},"moved lines")),Object(o.b)("p",null,"To ensure you do not exceed the limit, you need to plan before you write any code."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Think about what's the smallest non-negative change that leads one step closer to your final task.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Non-negative means that your change can be merged into master without breaking anything."),Object(o.b)("li",{parentName:"ul"},"Smallest means removing unnecessary changes: e.g. do not fix two unrelated bugs in one pull\nrequest. Create two instead. Don't be too ambitious to do everything at once."))),Object(o.b)("li",{parentName:"ul"},"You might find yourself in this situation.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"I need to do feature A."),Object(o.b)("li",{parentName:"ul"},"After some coding, I found that feature A depends on refactor B."),Object(o.b)("li",{parentName:"ul"},"After some refactoring, I found that refactor B depends on bug fix C."),Object(o.b)("li",{parentName:"ul"},"..."),Object(o.b)("li",{parentName:"ul"},"After all steps are done, diff is already 4000+ line long."),Object(o.b)("li",{parentName:"ul"},"Plan ahead so that you create a PR for bug fix C first, then refactor B, and finally feature A."))),Object(o.b)("li",{parentName:"ul"},"Ask for reviews early and ask for reviews often."),Object(o.b)("li",{parentName:"ul"},"Avoid unnecessary changes",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Avoid rewriting other's code to match your style.\nIf it is really problematic, create an issue and do that in a separate PR."))),Object(o.b)("li",{parentName:"ul"},"Gate any WIP features",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Sometimes it's hard not to break master while features are being incrementally developed."),Object(o.b)("li",{parentName:"ul"},"e.g. Samwise's repeating task requires refactoring a lot of code. Each PR only refactors one\npart of the code"),Object(o.b)("li",{parentName:"ul"},"Gate the incomplete feature behind a flag. For example, this new UI will not be shown unless\ncertain environment variable/localStorage value is set to TRUE.")))),Object(o.b)("h3",{id:"step-2-sync-with-master-branch"},"Step 2: sync with ",Object(o.b)("inlineCode",{parentName:"h3"},"master")," branch"),Object(o.b)("p",null,"You should keep your local repository to be up-to-date with latest ",Object(o.b)("inlineCode",{parentName:"p"},"master"),"."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./onboarding-git#pull-latest-changes-from-remote"}),"Pull latest changes from remote")," in the Git\ntutorial."),Object(o.b)("h3",{id:"step-3-create-a-local-branch"},"Step 3: create a local branch"),Object(o.b)("p",null,"Always start a new branch when you need to work on something new."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./onboarding-git#create-a-new-branch"}),"Create a new branch")," in the Git tutorial."),Object(o.b)("h3",{id:"step-4-make-your-changes"},"Step 4: make your changes"),Object(o.b)("p",null,"This is the coding part. You should write good code. Bad code will not pass code review."),Object(o.b)("h3",{id:"step-5-test-your-changes"},"Step 5: test your changes"),Object(o.b)("p",null,"You should find ways to prove that your changes work.\nYou will need to document this in your pull request comment later."),Object(o.b)("h3",{id:"step-6-checking-your-code-quality"},"Step 6: checking your code quality"),Object(o.b)("p",null,"Your repository should have linter or/and formatter already setup."),Object(o.b)("p",null,"If your repository has formatter setup, run the formatter first to ensure your code matches the\nteam's style."),Object(o.b)("p",null,"Then you should run the linter to check for some stupid mistakes."),Object(o.b)("p",null,"Finally, if you project uses a statically-typed language, run the compiler to find if there is any\ntype errors. You should try to fix these errors instead of suppress them."),Object(o.b)("h3",{id:"step-7-push-your-changes-to-remote"},"Step 7: push your changes to remote"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./onboarding-git#push-to-remote"}),"Push to remote")," in the Git tutorial."),Object(o.b)("h3",{id:"step-8-create-a-pull-request"},"Step 8: create a pull request"),Object(o.b)(i.a,{defaultValue:"desktop",values:[{label:"GitHub Desktop",value:"desktop"},{label:"GitHub Web",value:"web"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"desktop",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Command/Ctrl R")," in GitHub Desktop or click ",Object(o.b)("inlineCode",{parentName:"p"},"Branch -> Create Pull Request"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"GitHub Desktop Create PR",src:n(284).default}))),Object(o.b)(l.a,{value:"web",mdxType:"TabItem"},Object(o.b)("p",null,"Go to the ",Object(o.b)("inlineCode",{parentName:"p"},"Pull requests")," tab. Click the green ",Object(o.b)("inlineCode",{parentName:"p"},"Compare & pull request")," button."),Object(o.b)("p",null,Object(o.b)("img",{alt:"GitHub Web Create PR",src:n(285).default})))),Object(o.b)("p",null,"You should follow the pull request template in your repository. They will be automatically\npre-filled when you are creating a pull request. You should fill in the required part."),Object(o.b)("p",null,"You should at least write a summary of what you did in this pull request and the test plan."),Object(o.b)("h3",{id:"step-9-waiting-for-review"},"Step 9: waiting for review"),Object(o.b)("p",null,"Ask your peers to review your code. They might request changes. You should make changes to address\nyour concern, or defend your implementation approach and ask for their review again."),Object(o.b)("p",null,"Some bots may also participate in the review process. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"dti-github-bot")," will check if\nyour pull request is too big. You will also see some CI status in the bottom of the pull request\npage. Your pull request ",Object(o.b)("strong",{parentName:"p"},"must")," pass all required CI checks."),Object(o.b)("p",null,"The progress can be illustrated by the graph below:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Required Checks",src:n(286).default})),Object(o.b)("p",null,"Here are some example of bots participating in review:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Error Annotation",src:n(287).default}),"\n",Object(o.b)("img",{alt:"PR Too Big",src:n(288).default})),Object(o.b)("h3",{id:"step-10-merge-into-master"},"Step 10: merge into ",Object(o.b)("inlineCode",{parentName:"h3"},"master")),Object(o.b)("p",null,"\ud83c\udf89 Your changes are merged. The continuous deployment scripts will automatically deploy your\nchanges to staging."),Object(o.b)("p",null,"You should ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./onboarding-git#delete-a-branch"}),"delete your local branch")," immediately, and start\nyour new work on a new branch."))}p.isMDXComponent=!0},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,h=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(h,l({ref:t},u,{components:n})):a.a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},83:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},84:function(e,t,n){"use strict";var r=n(0),a=n(83);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},89:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(84),i=n(82),l=n(48),c=n.n(l),u=37,s=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,b=e.values,p=e.groupId,d=Object(o.a)(),h=d.tabGroupChoices,f=d.setTabGroupChoices,m=Object(r.useState)(l),y=m[0],g=m[1],O=Object(r.useState)(!1),j=O[0],w=O[1];if(null!=p){var v=h[p];null!=v&&v!==y&&b.some((function(e){return e.value===v}))&&g(v)}var k=function(e){g(e),null!=p&&f(p,e)},N=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},S=function(){w(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",S)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),C(e)},onFocus:function(){return k(t)},onClick:function(){k(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},90:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);