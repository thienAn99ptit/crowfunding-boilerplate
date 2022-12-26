"use strict";(self.webpackChunkcrowfunding_boilerplate=self.webpackChunkcrowfunding_boilerplate||[]).push([[935],{5362:function(e,t,r){var n=r(1413),a=r(5987),o=r(5581),s=r(6041),l=r(184),d=["name","control","className","checked","onClick"];t.Z=function(e){var t=e.name,r=e.control,c=e.className,i=e.checked,m=(e.onClick,(0,a.Z)(e,d),(0,o.bc)({name:t,defaultValue:"",control:r}).field);return(0,l.jsxs)("label",{className:"flex items-center justify-center text-white w-5 h-5 border-2 border-strock cursor-pointer ".concat(i&&" bg-primary"," rounded ").concat(c),children:[i&&(0,l.jsx)(s.nQ,{}),(0,l.jsx)("input",(0,n.Z)({type:"checkbox",className:"hidden",name:t},m))]})}},6356:function(e,t,r){var n=r(184);t.Z=function(e){var t=e.children,r=e.className;return(0,n.jsx)("div",{className:"flex flex-col gap-y-3 pt-3 mb-3 ".concat(r),children:t})}},3545:function(e,t,r){var n=r(184);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:"flex flex-row items-start gap-x-5 pt-3 mb-5",children:t})}},9248:function(e,t,r){var n=r(1413),a=r(5987),o=r(5581),s=r(184),l=["name","className","placeholder","control","error","type"];t.Z=function(e){var t=e.name,r=void 0===t?"":t,d=e.className,c=e.placeholder,i=e.control,m=e.error,x=void 0===m?"":m,u=e.type,h=void 0===u?"text":u,p=(0,a.Z)(e,l),b=(0,o.bc)({control:i,name:r,defaultValue:""}).field;return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",(0,n.Z)((0,n.Z)({className:"py-4 px-6 text-text4 bg-white dark:bg-darkStroke dark:text-white text-sm w-full max-w-full border outline-none ".concat(x.lenght>0?"border-error":"border-strock dark:border-darkStroke","  rounded-lg ").concat(d),id:r,type:h,placeholder:c},b),p)),x.length>0?(0,s.jsx)("span",{className:"absolute top-1/2 left-6 -translate-y-1/2 pointer-events-none text-error text-sm font-normal error-input",children:x}):null]})}},3221:function(e,t,r){r.d(t,{Z:function(){return x}});var n=r(1413),a=r(5987),o=r(5581),s=r(9439),l=r(2791),d=function(){var e=(0,l.useState)(!1),t=(0,s.Z)(e,2),r=t[0],n=t[1];return{value:r,toggle:function(){n((function(e){return!e}))}}},c=r(6041),i=r(184),m=["name","className","placeholder","control","error","type"];var x=function(e){var t=e.name,r=void 0===t?"":t,s=e.className,l=e.placeholder,x=e.control,u=e.error,h=void 0===u?"":u,p=(e.type,(0,a.Z)(e,m)),b=d(),f=b.value,k=b.toggle,g=(0,o.bc)({control:x,name:r,defaultValue:""}).field;return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("input",(0,n.Z)((0,n.Z)({className:"py-4 px-6 text-text-text4 bg-white dark:bg-darkStroke dark:text-white text-sm w-full max-w-full border-[1px] outline-none ".concat(h.lenght>0?"border-error":"border-strock dark:border-darkStroke"," rounded-lg ").concat(s),id:r,type:f?"text":"password",placeholder:l},g),p)),h.length>0?(0,i.jsx)("span",{className:"absolute top-1/2 left-6 -translate-y-1/2 pointer-events-none text-error text-sm font-normal error-input",children:h}):null,(0,i.jsx)("span",{className:"absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer",onClick:k,children:f?(0,i.jsx)(c.tE,{}):(0,i.jsx)(c.JP,{})})]})}},3453:function(e,t,r){var n=r(184);t.Z=function(e){var t=e.children,r=e.htmlFor,a=void 0===r?"":r,o=e.className;return(0,n.jsx)("label",{htmlFor:a,className:"text-text2 dark:text-text3 text-sm font-medium cursor-pointer ".concat(o),children:t})}},7476:function(e,t,r){var n=r(1087),a=r(184);t.Z=function(e){var t=e.title,r=e.description,o=e.link,s=e.to;return(0,a.jsxs)("div",{className:" text-center mb-6 lg:mb-5",children:[(0,a.jsx)("h1",{className:"font-semibold text-lg lg:text-xl mb-1 lg:mb-3 dark:text-white text-text1",children:t}),(0,a.jsxs)("h3",{className:"text-sm font-normal text-text3",children:[r," ",(0,a.jsx)(n.OL,{to:s,className:"text-primary font-semibold",children:o})]})]})}},8935:function(e,t,r){r.r(t);var n=r(5581),a=r(1087),o=r(4695),s=r(2797),l=(r(6356),r(6041),r(9248),r(3453),r(7848),r(3545),r(3221),r(460)),d=(r(5362),r(7476),r(184)),c=s.Ry({email:s.Z_().email("This email already registered ").required("This field is registered"),password:s.Z_().min(8,{message:"Password must be 8 character "}).required("This field is registered")}).required();t.default=function(){var e=(0,n.cI)({mode:"onSubmit",resolver:(0,o.X)(c),defaultValues:{email:"",password:""}}),t=e.handleSubmit,r=e.watch;return e.control,e.setValue,e.formState.errors,r("term"),(0,d.jsxs)("div",{className:"",children:[(0,d.jsx)("h1",{className:"text-2xl font-bold mb-5 dark:text-white",children:"Forgot Password"}),(0,d.jsxs)("div",{className:"mb-5",children:[(0,d.jsx)("p",{className:"text-sm font-normal dark:text-text3",children:"Please Enter the OTP you receive to"}),(0,d.jsx)("p",{className:"text-sm font-normal dark:text-white",children:"hellouihut@gmail.com"})]}),(0,d.jsxs)("form",{onSubmit:t((function(e){console.log({values:e})})),children:[(0,d.jsxs)("div",{className:"flex gap-x-5 mb-5",children:[(0,d.jsx)("input",{type:"number",maxLength:"1",className:"w-[50px] outline-none h-[72px] text-center font-semibold text-lg dark:text-white border dark: border-strock dark:bg-darkSecondary rounded-md "}),(0,d.jsx)("input",{type:"number",maxLength:"1",className:"w-[50px] outline-none h-[72px] text-center font-semibold text-lg dark:text-white border border-strock dark:bg-darkSecondary rounded-md "}),(0,d.jsx)("input",{type:"number",maxLength:"1",className:"w-[50px] outline-none h-[72px] text-center font-semibold text-lg dark:text-white border border-strock dark:bg-darkSecondary rounded-md "}),(0,d.jsx)("input",{type:"number",maxLength:"1",className:"w-[50px] outline-none h-[72px] text-center font-semibold text-lg dark:text-white border border-strock dark:bg-darkSecondary rounded-md "})]}),(0,d.jsx)("div",{className:"mb-7",children:(0,d.jsx)("span",{className:"font-semibold text-sm text-secondary ",children:"Resend OTP"})}),(0,d.jsx)("div",{children:(0,d.jsx)(l.Z,{type:"submit",className:"min-h-[56px] rounded-lg text-white text-base font-semibold py-3 mb-7",kindOf:"primary",isLoading:!1,children:"Confirm"})}),(0,d.jsx)("div",{children:(0,d.jsx)(a.OL,{to:"/sign-in",className:"font-semibold text-sm text-secondary ",children:"Back to Login"})})]})]})}}}]);
//# sourceMappingURL=935.226a60df.chunk.js.map