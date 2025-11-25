export default function handler(req, res) {
  const manifest = {
    accountAssociation: {
      header: "eyJmaWQiOjIzNTAsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHhCRDc4NEM2MWZjMzQ0MUJkNTE1MEE0QjFDNkM0OTBmOTRlNDgxNjFkIn0",
      payload: "eyJkb21haW4iOiJlbmRwcm8tbWluaWFwcC52ZXJjZWwuYXBwIn0",
      signature: "4/X3Ycwdrb7PeecqFvWJRBqwQkt00Zz/Z/abQUREkiAp1sLimQ0erRdOPvWWaLZGoie3PhjO/HdC85QbsXxgdhs="
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




