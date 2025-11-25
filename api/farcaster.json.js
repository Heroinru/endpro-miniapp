export default function handler(req, res) {
  const manifest = {
    accountAssociation: {
      header: "eyJmaWQiOjIzNTAsInR5cGUiOiJhdXRoIiwia2V5IjoiMHg1RjEyMjRjMGFiN2E1NTBEN2U1NDBDODQ1ZmVhRDMwMjMxNTFCRTkxIn0",
      payload: "eyJkb21haW4iOiJlbmRwcm8tbWluaWFwcC1yZWY5dzczdXItZ3JpZ29yaXlzLXByb2plY3RzLTNlN2U5N2I5LnZlcmNlbC5hcHAifQ",
      signature: "1GrNT/kLueYH+89arQ30vsQMuNpAhVD6Zv535laV1tt/ymmLbEewSUn7j0l67/y5UZvycMTi11RMM7OJqjrBgxw="
    },
    frame: {
      version: "next",
      imageUrl: "https://endpro-miniapp-ref9w73ur-grigoriys-projects-3e7e97b9.vercel.app/og-image.png",
      button: {
        title: "Mint ENDPRO NFT",
        action: {
          type: "launch_frame",
          name: "ENDPRO Dynamic NFT",
          url: "https://endpro-miniapp-ref9w73ur-grigoriys-projects-3e7e97b9.vercel.app",
          splashImageUrl: "https://endpro-miniapp-ref9w73ur-grigoriys-projects-3e7e97b9.vercel.app/splash.png",
          splashBackgroundColor: "#0052FF"
        }
      }
    }
  };

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.status(200).json(manifest);
}

