import n,{useEffect as t}from"react";const e=({apiKey:e,langue:o,mode:c,btnTitle:r,amount:s,currency:i,orderId:a,description:d,businessName:u,loadInvoice:l,successUrl:p})=>(t((()=>{const n=document.createElement("script"),t=document.createElement("script");return n.id="SBScript",n.type="text/javascript",n.setAttribute("data-lang",o),n.setAttribute("data-apikey",e),n.async=!0,n.src="https://soleaspay.com/webPay/v2/sopayButton.min.js",document.body.appendChild(n),n.onload=()=>{t.type="text/javascript",t.async=!1,t.innerHTML=`\n      const options = {\n        btnTitle: '${r}',\n        amount: ${s},\n        currency: "${i}",\n        orderId: "${a}",\n        description: "${d}",\n        businessName: '${u}',\n        loadInvoice: ${l},\n        successUrl: '${p}'\n      };\n\n      function initButton() {\n        return SopayButton.${c}(options)\n          .then((res) => console.log(res))\n          .catch((err) => console.log(err))\n          .finally(initButton);\n      }\n\n      initButton();\n    `,document.body.appendChild(t)},()=>{document.body.removeChild(t),document.body.removeChild(n)}}),[e,o,c,r,s,i,a,d,u,l,p]),n.createElement("div",{className:"sopayButton"}));export{e as SopayButton};