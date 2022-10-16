D(
  "kongkow.space",
  REG_NONE,
  DnsProvider(DSP_CLOUDFLARE),

  // Record ignore
  IGNORE_NAME("_dnslink"),

  // Root
  A("@", "76.76.21.21"),
  CNAME("www", "cname.vercel-dns.com."),

  // Subdomain
  CNAME("laporpakde", "cname.vercel-dns.com."),
  CNAME("wcumum", "cname.vercel-dns.com."),
  CNAME("wip", "cname.vercel-dns.com.")
);
