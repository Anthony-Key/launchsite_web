import React from "react";
import QRCode from "qrcode.react";

const DonationQRCode = () => {
  const generateXUMMDeepLink = () => {
    const xummAppUrl = "https://app.xumm.community";
    const destinationXRPAddress = "rKBgZMPdvhEmXYbetGJaoKHPwyWArvQETY";

    const xummDeepLink = `${xummAppUrl}/send/${destinationXRPAddress}`;

    return xummDeepLink;
  };

  const xummDeepLink = generateXUMMDeepLink();

  return <QRCode value={xummDeepLink} />;
};

export default DonationQRCode;
