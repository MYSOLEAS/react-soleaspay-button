import React, { useEffect } from "react";

export const useSopayButton = ({
  apiKey,
  langue,
  mode,
  btnTitle,
  amount,
  currency,
  orderId,
  description,
  businessName,
  loadInvoice,
  successUrl,
}) => {
  useEffect(() => {

    const scriptExist1 = document.getElementById('SBScript');
    const scriptExist2 = document.getElementById('SBScript2');

    if (scriptExist1 && scriptExist2) {
      scriptExist1.setAttribute("data-lang", langue);
      scriptExist1.setAttribute("data-apikey", apiKey);
      scriptExist2.innerHTML = `
      const options = {
        btnTitle: '${btnTitle}',
        amount: ${amount},
        currency: "${currency}",
        orderId: "${orderId}",
        description: "${description}",
        businessName: '${businessName}',
        loadInvoice: ${loadInvoice},
        successUrl: '${successUrl}'
      };

      function initButton() {
        return SopayButton.${mode}(options)
        .then((res) => {
            localStorage.setItem('sopayresult', JSON.stringify(res));
        })
        .catch((err) => {
            localStorage.setItem('sopayresult', JSON.stringify(err));
        })
        .finally(initButton);
      }

      initButton();
    `;

    } else {
      const script1 = document.createElement("script");
      const script2 = document.createElement("script");
      script1.id = "SBScript";
      script1.type = "text/javascript";
      script1.setAttribute("data-lang", langue);
      script1.setAttribute("data-apikey", apiKey);
      script1.async = true;
      script1.src = "https://soleaspay.com/webPay/v2/sopayButton.min.js";
      document.body.appendChild(script1);
      script1.onload = () => {
        script2.id = "SBScript2";
        script2.type = "text/javascript";
        script2.async = false;
        script2.innerHTML = `
      const options = {
        btnTitle: '${btnTitle}',
        amount: ${amount},
        currency: "${currency}",
        orderId: "${orderId}",
        description: "${description}",
        businessName: '${businessName}',
        loadInvoice: ${loadInvoice},
        successUrl: '${successUrl}'
      };

      function initButton() {
        return SopayButton.${mode}(options)
        .then((res) => {
            localStorage.setItem('sopayresult', JSON.stringify(res));
        })
        .catch((err) => {
            localStorage.setItem('sopayresult', JSON.stringify(err));
        })
        .finally(initButton);
      }

      initButton();
    `;
        document.body.appendChild(script2);
      };
    }
  }, [
    apiKey,
    langue,
    mode,
    btnTitle,
    amount,
    currency,
    orderId,
    description,
    businessName,
    loadInvoice,
    successUrl,
  ]);

  return new Promise((resolve, reject) => {
    let i = setInterval(() => {
      const result = JSON.parse(localStorage.getItem('sopayresult'));
      if (result !== null) {
        localStorage.removeItem('sopayresult')
        clearInterval(i)
        resolve(result);
      }
    }, 1000);
  });

};

export const SopayButton = () => {
  return <div className="sopayButton"></div>;
};