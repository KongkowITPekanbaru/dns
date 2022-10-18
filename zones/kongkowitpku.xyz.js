D(
  "kongkowitpku.xyz",
  REG_NONE,
  DnsProvider(DSP_CLOUDFLARE),

  // Record ignore
  IGNORE_NAME("_dnslink"),

  // Root
  A("@", "76.76.21.21"),
  CNAME("www", "cname.vercel-dns.com."),

  // Subdomain
  A("media", "54.251.57.162"),
  CNAME("assets", "kongkowitpekanbaru.github.io.", CF_PROXY_ON),
  CNAME("contribute", "cname.vercel-dns.com."),
  CNAME("status", "statuspage.betteruptime.com."),
  CNAME("umami", "cname.vercel-dns.com."),
  CNAME("wip", "cname.vercel-dns.com."),

  // Email routing
  MX("@", 50, "route3.mx.cloudflare.net."),
  MX("@", 66, "route2.mx.cloudflare.net."),
  MX("@", 63, "route1.mx.cloudflare.net."),
  TXT("@", "v=spf1 include:_spf.mx.cloudflare.net ~all"),

  // Other
  TXT("_github-challenge-KongkowITPekanbaru-org", "765bce67f8")
);
