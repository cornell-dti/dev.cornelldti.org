(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(100)),i={id:"guide-devops",title:"DevOps"},c={unversionedId:"guide-devops",id:"guide-devops",isDocsHomePage:!1,title:"DevOps",description:"CI (Continuous Integration)",source:"@site/docs/guide-devops.md",slug:"/guide-devops",permalink:"/docs/guide-devops",version:"current",sidebar:"someSidebar",previous:{title:"Code Quality",permalink:"/docs/guide-code-quality"},next:{title:"Code Review",permalink:"/docs/guide-code-review"}},l=[{value:"CI (Continuous Integration)",id:"ci-continuous-integration",children:[]},{value:"CD (Continuous Deployment)",id:"cd-continuous-deployment",children:[]},{value:"Repository Policies and Tools",id:"repository-policies-and-tools",children:[]},{value:"Relevent Documentation",id:"relevent-documentation",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"ci-continuous-integration"},"CI (Continuous Integration)"),Object(o.b)("p",null,"Continuous integration (CI) is the practice of building and testing each commit in\nthe repository. It is done automatically by machines and can be integrated with GitHub\nto display the status of each commit."),Object(o.b)("p",null,"Cornell DTI uses ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/features/actions"}),"GitHub Actions")," as our CI service."),Object(o.b)("p",null,"Each active project must contain a CI configuration that checks the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Code Style"),Object(o.b)("li",{parentName:"ul"},"Linter Errors"),Object(o.b)("li",{parentName:"ul"},"Your project can build/compile")),Object(o.b)("p",null,"All CI checks must pass before your branch can be merged into ",Object(o.b)("inlineCode",{parentName:"p"},"master"),"."),Object(o.b)("p",null,"Here is an example CI workflow:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"name: CI\non: push\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@master\n      - name: Set up Node\n        uses: actions/setup-node@v1\n      # Use cache to speed up yarn install\n      - name: Use Yarn Cache\n        uses: actions/cache@v1\n        with:\n          path: ~/.cache/yarn\n          key: yarn-${{ hashFiles(format('{0}{1}', github.workspace, '/yarn.lock')) }}\n          restore-keys: yarn-\n      - name: Yarn Install\n        run: yarn install\n      # Check potential code problems\n      - name: Run Linter\n        run: yarn lint\n      - name: Run TypeScript Compiler\n        run: yarn tsc\n      - name: Build Website\n        run: yarn build\n")),Object(o.b)("h2",{id:"cd-continuous-deployment"},"CD (Continuous Deployment)"),Object(o.b)("p",null,"Continuous deployment (CD) is a practice that deploys each good commit (after passing)\nCI to staging servers."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For heroku projects, we configure heroku to autodeploy master branch to staging."),Object(o.b)("li",{parentName:"ul"},"For Firebase projects, we use ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/features/actions"}),"GitHub Actions")," to auto\ndeploy the app to Firebase Hosting.")),Object(o.b)("h2",{id:"repository-policies-and-tools"},"Repository Policies and Tools"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Bad code cannot be merged into master",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"All code must be committed to a separate branch before merging."),Object(o.b)("li",{parentName:"ul"},"All code must pass CI checks before merging."),Object(o.b)("li",{parentName:"ul"},"All code must pass code review before merging."))),Object(o.b)("li",{parentName:"ul"},"Giant pull requests are prohibited.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/cornell-dti/big-diff-warning"}),"big-diff-warning")," will automatically invite\ndeveloper lead to review giant pull requests."),Object(o.b)("li",{parentName:"ul"},"Unless there is a convincing reason for big pull requests, there will be rejected."))),Object(o.b)("li",{parentName:"ul"},"Timely feedback of pull requests",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"We use\n",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests"}),"GitHub scheduled reminders"),"\nto periodically list open pull requests without review in our slack channels."))),Object(o.b)("li",{parentName:"ul"},"Website/App Status Checks",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/cornell-dti/dti-repo-tools"}),"dti-repo-tools")," performs health check for every\nproject with public website every ten minutes.")))),Object(o.b)("h2",{id:"relevent-documentation"},"Relevent Documentation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://help.github.com/en/actions/configuring-and-managing-workflows"}),"GitHub Actions Docs"))))}s.isMDXComponent=!0}}]);