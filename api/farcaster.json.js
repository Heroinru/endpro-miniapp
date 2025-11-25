export default function handler(req, res) {
  const manifest = {
    accountAssociation: {
      header: "БУДЕТ_ОБНОВЛЕНО",
      payload: "БУДЕТ_ОБНОВЛЕНО", 
      signature: "БУДЕТ_ОБНОВЛЕНО"
    },
    frame: {
      version: "next",
      imageUrl: "https://endpro-miniapp.vercel.app/og-image.png",
      button: {
        title: "Mint ENDPRO NFT",
        action: {
          type: "launch_frame",
          name: "ENDPRO Dynamic NFT",
          url: "https://endpro-miniapp.vercel.app",
          splashImageUrl: "https://endpro-miniapp.vercel.app/splash.png",
          splashBackgroundColor: "#0052FF"
        }
      }
    }
  };

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.status(200).json(manifest);
}


