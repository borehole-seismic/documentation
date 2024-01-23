"use strict";(self.webpackChunkportaldoc=self.webpackChunkportaldoc||[]).push([[298],{2784:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(5893),t=n(1151);const r={sidebar_position:3,id:"setup_ssh",title:"Setting up SSH"},o="Setting Up SSH for GitHub",l={id:"github/setup_ssh",title:"Setting up SSH",description:"What is SSH?",source:"@site/docs/github/setup_ssh.md",sourceDirName:"github",slug:"/github/setup_ssh",permalink:"/documentation/docs/github/setup_ssh",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"setup_ssh",title:"Setting up SSH"},sidebar:"gitHubSidebar",previous:{title:"Setting up IDE",permalink:"/documentation/docs/github/setup_ide"},next:{title:"Using Git",permalink:"/documentation/docs/github/process/"}},h={},d=[{value:"What is SSH?",id:"what-is-ssh",level:2},{value:"Advantages of Using SSH",id:"advantages-of-using-ssh",level:2},{value:"How to Set Up SSH for GitHub",id:"how-to-set-up-ssh-for-github",level:2},{value:"Checking for Existing SSH Keys",id:"checking-for-existing-ssh-keys",level:3},{value:"Generating a New SSH Key in Windows",id:"generating-a-new-ssh-key-in-windows",level:3},{value:"Add the SSH Key to GitHub",id:"add-the-ssh-key-to-github",level:3}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"setting-up-ssh-for-github",children:"Setting Up SSH for GitHub"}),"\n",(0,i.jsx)(s.h2,{id:"what-is-ssh",children:"What is SSH?"}),"\n",(0,i.jsx)(s.p,{children:"SSH, or Secure Shell, is a cryptographic network protocol used to secure network services over an unsecured network. For GitHub, SSH keys are a way to identify trusted computers without requiring usernames and passwords for each visit."}),"\n",(0,i.jsx)(s.h2,{id:"advantages-of-using-ssh",children:"Advantages of Using SSH"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Security:"})," SSH is more secure than using a username and password or a personal access token."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Convenience:"})," Once set up, you don't need to enter credentials every time you push or pull."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-set-up-ssh-for-github",children:"How to Set Up SSH for GitHub"}),"\n",(0,i.jsx)(s.h3,{id:"checking-for-existing-ssh-keys",children:"Checking for Existing SSH Keys"}),"\n",(0,i.jsx)(s.p,{children:"Before creating a new SSH key, check for existing keys on your Windows machine."}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Open Git Bash. If you do not have it installed, download ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://gitforwindows.org/",children:"Git for Windows"})}),"."]}),"\n",(0,i.jsx)(s.li,{children:"Enter the following command:"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ls -al ~/.ssh\n"})}),"\n",(0,i.jsx)(s.p,{children:"This command lists all the files in your SSH directory. Look for files named id_rsa.pub, id_ecdsa.pub, id_ed25519.pub, or similar. These are the public keys. If such files are present, you already have existing SSH keys."}),"\n",(0,i.jsx)(s.h3,{id:"generating-a-new-ssh-key-in-windows",children:"Generating a New SSH Key in Windows"}),"\n",(0,i.jsx)(s.p,{children:"If you do not have an SSH key or wish to generate a new one, follow these steps:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Open Git Bash"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Generate the SSH Key"}),"."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Paste the following command in Git Bash, replacing ",(0,i.jsx)(s.code,{children:'"your_email@example.com"'})," with your GitHub email address:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'ssh-keygen -t ed25519 -C "your_email@example.com"\n'})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"If your system does not support the Ed25519 algorithm, use RSA instead:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'ssh-keygen -t rsa -b 4096 -C "your_email@example.com"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Save the SSH Key"}),"."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'When prompted to "Enter a file in which to save the key," press Enter to save the key to the default file location.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Enter a Passphrase (Optional)"}),"."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"You will be prompted to enter a passphrase for added security."}),"\n",(0,i.jsx)(s.li,{children:"If you prefer not to use a passphrase, simply press Enter to continue without it."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Locating the SSH Key"}),"."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["After completing these steps, your new SSH key will be located in the ",(0,i.jsx)(s.code,{children:".ssh"})," directory within your user profile."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Locate the ",(0,i.jsx)(s.code,{children:"id_ed25519.pub"})," file and copy the key."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"SSH",src:n(7318).Z+"",width:"1231",height:"596"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"add-the-ssh-key-to-github",children:"Add the SSH Key to GitHub"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Navigate to your GitHub account settings."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:'Go to "SSH and GPG keys".'}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"SSH",src:n(5404).Z+"",width:"2006",height:"1485"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Add the new SSH key by pasting the contents of your public key file."}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},5404:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/ssh-369ba57e787d5b80a88623e31ad5e309.PNG"},7318:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/sshkey-bd950f718b3c3dad343ef03fc458b247.PNG"},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>o});var i=n(7294);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);