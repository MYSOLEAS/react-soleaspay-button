import React, { useEffect } from "react";

export const SopayButton = ({
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
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
          .finally(initButton);
      }

      initButton();
    `;
      document.body.appendChild(script2);
    };

    return () => {
      document.body.removeChild(script2);
      document.body.removeChild(script1);
    };
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

  return <div className="sopayButton"></div>;
};


