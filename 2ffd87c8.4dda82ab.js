(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(e,t,a){"use strict";function n(e){var t,a,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(c&&(c+=" "),c+=a);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,a=0,c="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(c&&(c+=" "),c+=t);return c}},102:function(e,t,a){"use strict";var n=a(0),c=a(103);t.a=function(){var e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},103:function(e,t,a){"use strict";var n=a(0),c=Object(n.createContext)(void 0);t.a=c},109:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(102),l=a(100),i=a(55),b=a.n(i),o=37,s=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=Object(r.a)(),h=d.tabGroupChoices,O=d.setTabGroupChoices,g=Object(n.useState)(i),j=g[0],f=g[1],y=n.Children.toArray(e.children);if(null!=p){var v=h[p];null!=v&&v!==j&&u.some((function(e){return e.value===v}))&&f(v)}var N=function(e){f(e),null!=p&&O(p,e)},w=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(l.a)("tabs__item",b.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},110:function(e,t,a){"use strict";var n=a(3),c=a(0),r=a.n(c);t.a=function(e){var t=e.children,a=e.hidden,c=e.className;return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:c}),t)}},144:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/partial-commit-72451c91b08e1bf8b30bd3dca6db1e75.png"},319:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/clone-with-desktop-f32c70b369575a74acc5c441d6432d15.png"},320:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/pull-origin-f8c04b46a97854f5d2e096fb5fce94f3.png"},321:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/pulling-origin-9977129b943a1421ecc5974062cfa043.png"},322:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/new-branch-daec918d60c05815e558939cceb2e5b0.png"},323:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/delete-branch-074f26f177c79a8ce27fd6fa3d5ccb18.png"},324:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/commit-77f7b083050669a20b6d95b5fa752c07.png"},325:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/publish-branch-87dc1d4319cae25360f51006153525b2.png"},326:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/push-60b2e69dcdcb7fb0e9d3324979a1de08.png"},327:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/push-progress-08385f33237faf759006bc972a7db031.png"},328:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/merge-history-tab-d9bfbccdd745cbe5c06bbb93b7519073.png"},329:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/merge-select-master-d5a5dd57bfb0f8a0ffd50c0c27d6381b.png"},330:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/merge-final-click-99cd820c72e2bec39db94d8785665311.png"},331:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rebase-menu-40bde0be027a622b7c39b046f5a88481.png"},332:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rebase-select-master-4cf8906ddf77ccad8eca614caef7df82.png"},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),c=a(7),r=(a(0),a(99)),l=a(109),i=a(110),b={id:"onboarding-git",title:"Using Git"},o={unversionedId:"onboarding-git",id:"onboarding-git",isDocsHomePage:!1,title:"Using Git",description:"If you are not familiar with Git command line, do not pretend you know it.",source:"@site/docs/onboarding-git.md",slug:"/onboarding-git",permalink:"/docs/onboarding-git",version:"current",sidebar:"someSidebar",previous:{title:"Text Editor",permalink:"/docs/onboarding-editor"},next:{title:"Code Quality",permalink:"/docs/guide-code-quality"}},s=[{value:"Setup your project",id:"setup-your-project",children:[]},{value:"Pull latest changes from remote",id:"pull-latest-changes-from-remote",children:[]},{value:"Create a new branch",id:"create-a-new-branch",children:[]},{value:"Delete a branch",id:"delete-a-branch",children:[]},{value:"Review your changes locally",id:"review-your-changes-locally",children:[]},{value:"Select changes to commit",id:"select-changes-to-commit",children:[]},{value:"Push to remote",id:"push-to-remote",children:[]},{value:"Merge in <code>master</code> branch changes",id:"merge-in-master-branch-changes",children:[]},{value:"Amend and force-push",id:"amend-and-force-push",children:[]},{value:"Rebase and force-push",id:"rebase-and-force-push",children:[]}],u={toc:s};function p(e){var t=e.components,b=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,b,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you are not familiar with Git command line, do not pretend you know it."),Object(r.b)("p",{parentName:"div"},"Instead, install ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://desktop.github.com"}),"GitHub Desktop"),". It will make your life easier."))),Object(r.b)("h2",{id:"setup-your-project"},"Setup your project"),Object(r.b)(l.a,{groupId:"git-client",defaultValue:"desktop",values:[{label:"GitHub Desktop",value:"desktop"},{label:"Git CLI",value:"cli"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"desktop",mdxType:"TabItem"},Object(r.b)("p",null,"Install ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://desktop.github.com"}),"GitHub Desktop"),"."),Object(r.b)("p",null,"Click ",Object(r.b)("inlineCode",{parentName:"p"},"Clone or download")," in the repository page and choose ",Object(r.b)("inlineCode",{parentName:"p"},"Open in Desktop"),"."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Clone from desktop",src:a(319).default})),Object(r.b)("p",null,"GitHub Desktop will auto open and guide you to clone the repository.")),Object(r.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("p",null,"Install ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://git-scm.com"}),"Git"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/cornell-dti/[name of the repository]\n")))),Object(r.b)("h2",{id:"pull-latest-changes-from-remote"},"Pull latest changes from remote"),Object(r.b)("p",null,"Try keep your branch up-to-date with remote. Pull often."),Object(r.b)(l.a,{groupId:"git-client",defaultValue:"desktop",values:[{label:"GitHub Desktop",value:"desktop"},{label:"Git CLI",value:"cli"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"desktop",mdxType:"TabItem"},Object(r.b)("p",null,"Click ",Object(r.b)("inlineCode",{parentName:"p"},"Pull origin")," in the header."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Pull origin",src:a(320).default}),"\n",Object(r.b)("img",{alt:"Pulling origin",src:a(321).default}))),Object(r.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("p",null,"Inside your working branch, run"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git pull\n")))),Object(r.b)("h2",{id:"create-a-new-branch"},"Create a new branch"),Object(r.b)(l.a,{groupId:"git-client",defaultValue:"desktop",values:[{label:"GitHub Desktop",value:"desktop"},{label:"Git CLI",value:"cli"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"desktop",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Command/Ctrl + Shift + N")," or click ",Object(r.b)("inlineCode",{parentName:"p"},"Branch -> New Branch")," in Menu."),Object(r.b)("p",null,Object(r.b)("img",{alt:"New Branch",src:a(322).default})),Object(r.b)("p",null,"Input the name of the new branch and GitHub Desktop will automatically go to the new branch.")),Object(r.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git checkout -b [the name of your branch]\n")))),Object(r.b)("h2",{id:"delete-a-branch"},"Delete a branch"),Object(r.b)(l.a,{groupId:"git-client",defaultValue:"desktop",values:[{label:"GitHub Desktop",value:"desktop"},{label:"Git CLI",value:"cli"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"desktop",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Command/Ctrl + Shift + D")," or click ",Object(r.b)("inlineCode",{parentName:"p"},"Branch -> Delete")," in Menu."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Delete Branch",src:a(323).default})),Object(r.b)("p",null,"Click the ",Object(r.b)("inlineCode",{parentName:"p"},"Delete")," button.")),Object(r.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git checkout master\ngit checkout -D [the name of your branch]\n")))),Object(r.b)("h2",{id:"review-your-changes-locally"},"Review your changes locally"),Object(r.b)(l.a,{groupId:"git-client",defaultValue:"desktop",values:[{label:"GitHub Desktop",value:"desktop"},{label:"Git CLI",value:"cli"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"desktop",mdxType:"TabItem"},Object(r.b)("p",null,"Just see what's changed directly within GitHub Desktop."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Partial Commit",src:a(144).default}))),Object(r.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git diff\n")))),Object(r.b)("h2",{id:"select-changes-to-commit"},"Select changes to commit"),Object(r.b)(l.a,{groupId:"git-client",defaultValue:"desktop",values:[{label:"GitHub Desktop",value:"desktop"},{label:"Git CLI",value:"cli"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"desktop",mdxType:"TabItem"},Object(r.b)("p",null,"You can unselect the files you don't want to commit. Inside a file, you can deselect lines that\nyou don't want to commit. (Only lines highlighted with blue on the left will be committed.)"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Partial Commit",src:a(144).default})),Object(r.b)("p",null,"The fill in the commit message, and click ",Object(r.b)("inlineCode",{parentName:"p"},"Commit to [your branch name]"),"."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Commit",src:a(324).default}))),Object(r.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("p",null,"If you only want to commit changes in ",Object(r.b)("inlineCode",{parentName:"p"},"a.js"),", run"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'git add a.js\ngit commit -m "Your commit message"\n')),Object(r.b)("p",null,"If you only want to commit changes in folder ",Object(r.b)("inlineCode",{parentName:"p"},"src"),", run"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'git add src\ngit commit -m "Your commit message"\n')),Object(r.b)("p",null,"If you want to commit all changes, run"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'git add .\ngit commit -m "Your commit message"\n')))),Object(r.b)("h2",{id:"push-to-remote"},"Push to remote"),Object(r.b)(l.a,{groupId:"git-client",defaultValue:"desktop",values:[{label:"GitHub Desktop",value:"desktop"},{label:"Git CLI",value:"cli"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"desktop",mdxType:"TabItem"},Object(r.b)("p",null,"After you commit, you should push your changes to remote, so that"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you computer dies, changes will persist;"),Object(r.b)("li",{parentName:"ul"},"Other team members will see your progress.")),Object(r.b)("p",null,"Depending on whether you have published your branch before, you will either see"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Publish Branch",src:a(325).default})),Object(r.b)("p",null,"or"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Push",src:a(326).default})),Object(r.b)("p",null,"After you clicked the button, you can see the progress."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Push Progress",src:a(327).default}))),Object(r.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git push\n")),Object(r.b)("p",null,"If the branch does not exist on remote yet, Git will reject the push but give you some instructions\nlike:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"fatal: The current branch [your-branch-name] has no upstream branch.\nTo push the current branch and set the remote as upstream, use\n\n    git push --set-upstream origin [your-branch-name]\n")),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"git push --set-upstream origin [your-branch-name]")," as instructed."))),Object(r.b)("h2",{id:"merge-in-master-branch-changes"},"Merge in ",Object(r.b)("inlineCode",{parentName:"h2"},"master")," branch changes"),Object(r.b)(l.a,{groupId:"git-client",defaultValue:"desktop",values:[{label:"GitHub Desktop",value:"desktop"},{label:"Git CLI",value:"cli"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"desktop",mdxType:"TabItem"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Select History Tab\n",Object(r.b)("img",{alt:"Merge: Select History Tab",src:a(328).default})),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("inlineCode",{parentName:"li"},"master")," branch\n",Object(r.b)("img",{alt:"Publish Branch",src:a(329).default})),Object(r.b)("li",{parentName:"ol"},"Click the ",Object(r.b)("inlineCode",{parentName:"li"},"merge")," button\n",Object(r.b)("img",{alt:"Publish Branch",src:a(330).default})),Object(r.b)("li",{parentName:"ol"},"If there are merge conflicts, GitHub Desktop will prompt you to fix them."))),Object(r.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("p",null,"Inside your working branch, run"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git merge master\n")),Object(r.b)("p",null,", and fix any merge conflicts that arises."))),Object(r.b)("h2",{id:"amend-and-force-push"},"Amend and force-push"),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Only do this if you are sure that you are the only one who will work on this branch."))),Object(r.b)("p",null,"Sometimes you want to maintain a clean commit history. For example, you don't want to have a series\nof commits like"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"-o- Implement feature foo\n-o- Fix syntax error\n-o- Fix linter error\n-o- Fix linter error again\n-o- Fix syntax error again\n-o- Fix linter error again again\n")),Object(r.b)("p",null,"You can avoid commits like ",Object(r.b)("inlineCode",{parentName:"p"},"Fix linter error again again")," by amend your previous commit."),Object(r.b)("p",null,"Run"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git add .\ngit commit --amend --no-edit\n")),Object(r.b)("p",null,"to add all your unstaged changes to your commit."),Object(r.b)("p",null,"If the commit is already pushed to remote, you need to force push."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git push -f\n")),Object(r.b)("h2",{id:"rebase-and-force-push"},"Rebase and force-push"),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Only do this if you are sure that you are the only one who will work on this branch."))),Object(r.b)("p",null,'Merge commits sometimes turn a nice linear commit history into a messy tree. If you want a nice\nlinear history, you will need to rebase when you want to "merge" in the latest ',Object(r.b)("inlineCode",{parentName:"p"},"master")," change."),Object(r.b)(l.a,{groupId:"git-client",defaultValue:"desktop",values:[{label:"GitHub Desktop",value:"desktop"},{label:"Git CLI",value:"cli"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"desktop",mdxType:"TabItem"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"Command/Ctrl + Shift + E")," or click ",Object(r.b)("inlineCode",{parentName:"li"},"Branch -> Rebase Current Branch")," in menu\n",Object(r.b)("img",{alt:"Merge: Select History Tab",src:a(331).default})),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("inlineCode",{parentName:"li"},"master")," branch and click ",Object(r.b)("inlineCode",{parentName:"li"},"rebase"),Object(r.b)("img",{alt:"Publish Branch",src:a(332).default})),Object(r.b)("li",{parentName:"ol"},"If there are merge conflicts, GitHub Desktop will prompt you to fix them."))),Object(r.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("p",null,"Inside your working branch, run"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git rebase master\n")),Object(r.b)("p",null,", and fix any merge conflicts that arises."),Object(r.b)("p",null,"If the commit is already pushed to remote, you need to force push."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git push -f\n")))))}p.isMDXComponent=!0},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=c.a.createContext({}),s=function(e){var t=c.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return a?c.a.createElement(d,i(i({ref:t},o),{},{components:a})):c.a.createElement(d,i({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<r;o++)l[o]=a[o];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);