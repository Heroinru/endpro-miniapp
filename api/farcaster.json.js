export default function handler(req, res) {
  const manifest = {
    accountAssociation: {
      header: "TEMPORARY_PLACEHOLDER",
      payload: "TEMPORARY_PLACEHOLDER",
      signature: "TEMPORARY_PLACEHOLDER"
    },
    frame: {
      version: "next",
      name: "ENDPRO Dynamic NFT",
      iconUrl: "https://gateway.pinata.cloud/ipfs/bafybeiaewipv4zf7votgkjfizmgmat6k6jjz4ofun5ia2nyncfr2vvmibe/active.png",
      splashImageUrl: "https://gateway.pinata.cloud/ipfs/bafybeiaewipv4zf7votgkjfizmgmat6k6jjz4ofun5ia2nyncfr2vvmibe/active.png",
      splashBackgroundColor: "#667eea",
      homeUrl: "https://endpro-miniapp.vercel.app",
      webhookUrl: "https://endpro-miniapp.vercel.app/api/webhook"
    }
  };

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.status(200).json(manifest);
}



