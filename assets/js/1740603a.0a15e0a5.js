(self.webpackChunkdev_cornelldti_org=self.webpackChunkdev_cornelldti_org||[]).push([[552],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),h=a,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},1395:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),a=r(944),o=r(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,s=39;var c=function(e){var t=e.lazy,r=e.block,c=e.defaultValue,p=e.values,d=e.groupId,h=e.className,m=(0,a.Z)(),f=m.tabGroupChoices,k=m.setTabGroupChoices,g=(0,n.useState)(c),y=g[0],b=g[1],v=n.Children.toArray(e.children),w=[];if(null!=d){var N=f[d];null!=N&&N!==y&&p.some((function(e){return e.value===N}))&&b(N)}var C=function(e){var t=e.currentTarget,r=w.indexOf(t),n=p[r].value;b(n),null!=d&&(k(d,n),setTimeout((function(){var e,r,n,a,o,i,u,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,i=window,u=i.innerHeight,s=i.innerWidth,r>=0&&o<=s&&a<=u&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},S=function(e){var t,r;switch(e.keyCode){case s:var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case u:var a=w.indexOf(e.target)-1;r=w[a]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},h)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:S,onFocus:C,onClick:C},r)}))),t?(0,n.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},944:function(e,t,r){"use strict";var n=r(7294),a=r(9443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6145:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=r(1395),l=r(8215),u={id:"onboarding-dev-workflow",title:"Development Workflow"},s={unversionedId:"onboarding-dev-workflow",id:"onboarding-dev-workflow",isDocsHomePage:!1,title:"Development Workflow",description:"Introduction",source:"@site/docs/onboarding-dev-workflow.md",sourceDirName:".",slug:"/onboarding-dev-workflow",permalink:"/docs/onboarding-dev-workflow",version:"current",frontMatter:{id:"onboarding-dev-workflow",title:"Development Workflow"},sidebar:"someSidebar",previous:{title:"Join our GitHub Organization",permalink:"/docs/onboarding-join-github-organization"},next:{title:"Text Editor",permalink:"/docs/onboarding-editor"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Concrete Steps",id:"concrete-steps",children:[{value:"Step 0: setup a local project",id:"step-0-setup-a-local-project",children:[]},{value:"Step 1: plan",id:"step-1-plan",children:[]},{value:"Step 2: sync with <code>master</code> branch",id:"step-2-sync-with-master-branch",children:[]},{value:"Step 3: create a local branch",id:"step-3-create-a-local-branch",children:[]},{value:"Step 4: make your changes",id:"step-4-make-your-changes",children:[]},{value:"Step 5: test your changes",id:"step-5-test-your-changes",children:[]},{value:"Step 6: checking your code quality",id:"step-6-checking-your-code-quality",children:[]},{value:"Step 7: push your changes to remote",id:"step-7-push-your-changes-to-remote",children:[]},{value:"Step 8: create a pull request",id:"step-8-create-a-pull-request",children:[]},{value:"Step 9: waiting for review",id:"step-9-waiting-for-review",children:[]},{value:"Step 10: merge into <code>master</code>",id:"step-10-merge-into-master",children:[]}]}],p={toc:c};function d(e){var t=e.components,u=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"If you have worked with Git in other CS classes, you might be familiar with pushing to ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),"\ndirectly. At Cornell DTI, pushing to ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," is prohibited and the policy is strictly enforced by\nGitHub branch protection with no exception."),(0,o.kt)("p",null,"If you are not familiar with the pull request workflow, you should read the following steps and\nfollow them for each of your task."),(0,o.kt)("h2",{id:"concrete-steps"},"Concrete Steps"),(0,o.kt)("h3",{id:"step-0-setup-a-local-project"},"Step 0: setup a local project"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"./onboarding-git#setup-your-project"},"Setup your project")," in the Git tutorial."),(0,o.kt)("p",null,"Skip if you alreday have your repository setup."),(0,o.kt)("h3",{id:"step-1-plan"},"Step 1: plan"),(0,o.kt)("p",null,'For every pull request, your "significant lines" usually should not exceed 1000.'),(0,o.kt)("p",null,"Significant lines are defined by all your changes minus"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lock files like ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn.lock"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Podspec.lock"),", etc."),(0,o.kt)("li",{parentName:"ul"},"moved lines")),(0,o.kt)("p",null,"To ensure you do not exceed the limit, you need to plan before you write any code."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Think about what's the smallest non-negative change that leads one step closer to your final task.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Non-negative means that your change can be merged into master without breaking anything."),(0,o.kt)("li",{parentName:"ul"},"Smallest means removing unnecessary changes: e.g. do not fix two unrelated bugs in one pull\nrequest. Create two instead. Don't be too ambitious to do everything at once."))),(0,o.kt)("li",{parentName:"ul"},"You might find yourself in this situation.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"I need to do feature A."),(0,o.kt)("li",{parentName:"ul"},"After some coding, I found that feature A depends on refactor B."),(0,o.kt)("li",{parentName:"ul"},"After some refactoring, I found that refactor B depends on bug fix C."),(0,o.kt)("li",{parentName:"ul"},"..."),(0,o.kt)("li",{parentName:"ul"},"After all steps are done, diff is already 4000+ line long."),(0,o.kt)("li",{parentName:"ul"},"Plan ahead so that you create a PR for bug fix C first, then refactor B, and finally feature A."))),(0,o.kt)("li",{parentName:"ul"},"Ask for reviews early and ask for reviews often."),(0,o.kt)("li",{parentName:"ul"},"Avoid unnecessary changes",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Avoid rewriting other's code to match your style.\nIf it is really problematic, create an issue and do that in a separate PR."))),(0,o.kt)("li",{parentName:"ul"},"Gate any WIP features",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sometimes it's hard not to break master while features are being incrementally developed."),(0,o.kt)("li",{parentName:"ul"},"e.g. Samwise's repeating task requires refactoring a lot of code. Each PR only refactors one\npart of the code"),(0,o.kt)("li",{parentName:"ul"},"Gate the incomplete feature behind a flag. For example, this new UI will not be shown unless\ncertain environment variable/localStorage value is set to TRUE.")))),(0,o.kt)("h3",{id:"step-2-sync-with-master-branch"},"Step 2: sync with ",(0,o.kt)("inlineCode",{parentName:"h3"},"master")," branch"),(0,o.kt)("p",null,"You should keep your local repository to be up-to-date with latest ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),"."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"./onboarding-git#pull-latest-changes-from-remote"},"Pull latest changes from remote")," in the Git\ntutorial."),(0,o.kt)("h3",{id:"step-3-create-a-local-branch"},"Step 3: create a local branch"),(0,o.kt)("p",null,"Always start a new branch when you need to work on something new."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"./onboarding-git#create-a-new-branch"},"Create a new branch")," in the Git tutorial."),(0,o.kt)("h3",{id:"step-4-make-your-changes"},"Step 4: make your changes"),(0,o.kt)("p",null,"This is the coding part. You should write good code. Bad code will not pass code review."),(0,o.kt)("h3",{id:"step-5-test-your-changes"},"Step 5: test your changes"),(0,o.kt)("p",null,"You should find ways to prove that your changes work.\nYou will need to document this in your pull request comment later."),(0,o.kt)("h3",{id:"step-6-checking-your-code-quality"},"Step 6: checking your code quality"),(0,o.kt)("p",null,"Your repository should have linter or/and formatter already setup."),(0,o.kt)("p",null,"If your repository has formatter setup, run the formatter first to ensure your code matches the\nteam's style."),(0,o.kt)("p",null,"Then you should run the linter to check for some stupid mistakes."),(0,o.kt)("p",null,"Finally, if you project uses a statically-typed language, run the compiler to find if there is any\ntype errors. You should try to fix these errors instead of suppress them."),(0,o.kt)("h3",{id:"step-7-push-your-changes-to-remote"},"Step 7: push your changes to remote"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"./onboarding-git#push-to-remote"},"Push to remote")," in the Git tutorial."),(0,o.kt)("h3",{id:"step-8-create-a-pull-request"},"Step 8: create a pull request"),(0,o.kt)(i.Z,{defaultValue:"desktop",values:[{label:"GitHub Desktop",value:"desktop"},{label:"GitHub Web",value:"web"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"desktop",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Command/Ctrl R")," in GitHub Desktop or click ",(0,o.kt)("inlineCode",{parentName:"p"},"Branch -> Create Pull Request"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitHub Desktop Create PR",src:r(8085).Z}))),(0,o.kt)(l.Z,{value:"web",mdxType:"TabItem"},(0,o.kt)("p",null,"Go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Pull requests")," tab. Click the green ",(0,o.kt)("inlineCode",{parentName:"p"},"Compare & pull request")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitHub Web Create PR",src:r(8966).Z})))),(0,o.kt)("p",null,"You should follow the pull request template in your repository. They will be automatically\npre-filled when you are creating a pull request. You should fill in the required part."),(0,o.kt)("p",null,"You should at least write a summary of what you did in this pull request and the test plan."),(0,o.kt)("h3",{id:"step-9-waiting-for-review"},"Step 9: waiting for review"),(0,o.kt)("p",null,"Ask your peers to review your code. They might request changes. You should make changes to address\nyour concern, or defend your implementation approach and ask for their review again."),(0,o.kt)("p",null,"Some bots may also participate in the review process. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"dti-github-bot")," will check if\nyour pull request is too big. You will also see some CI status in the bottom of the pull request\npage. Your pull request ",(0,o.kt)("strong",{parentName:"p"},"must")," pass all required CI checks."),(0,o.kt)("p",null,"The progress can be illustrated by the graph below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Required Checks",src:r(4702).Z})),(0,o.kt)("p",null,"Here are some example of bots participating in review:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error Annotation",src:r(8756).Z}),"\n",(0,o.kt)("img",{alt:"PR Too Big",src:r(4148).Z})),(0,o.kt)("h3",{id:"step-10-merge-into-master"},"Step 10: merge into ",(0,o.kt)("inlineCode",{parentName:"h3"},"master")),(0,o.kt)("p",null,"\ud83c\udf89 Your changes are merged. The continuous deployment scripts will automatically deploy your\nchanges to staging."),(0,o.kt)("p",null,"You should ",(0,o.kt)("a",{parentName:"p",href:"./onboarding-git#delete-a-branch"},"delete your local branch")," immediately, and start\nyour new work on a new branch."))}d.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})},4148:function(e,t,r){"use strict";t.Z=r.p+"assets/images/dti-github-bot-pr-too-big-271e3bedc9c7fa3230563d6a181807df.png"},8085:function(e,t,r){"use strict";t.Z=r.p+"assets/images/github-desktop-create-pr-3988bce05ba8fd841ec6e96feb0c3541.png"},8966:function(e,t,r){"use strict";t.Z=r.p+"assets/images/github-web-create-pr-631eaa85049254ef42bc49af4866b2c9.png"},8756:function(e,t,r){"use strict";t.Z=r.p+"assets/images/linter-error-annotation-28c93eb23a3dcb243ec95bff483f2cae.png"},4702:function(e,t,r){"use strict";t.Z=r.p+"assets/images/required-checks-8fc8e940b14cde5c7a8865a0e0e886d7.png"}}]);