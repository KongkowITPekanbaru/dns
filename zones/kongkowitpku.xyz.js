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
    A("on", "192.0.2.1", CF_PROXY_ON),
    CNAME("github-invite", "kongkow-invite.up.railway.app."),
    CNAME("umami", "cname.vercel-dns.com."),

    // Redirects
    CF_REDIRECT("on.kongkowitpku.xyz/*", "https://kongkowitpku.xyz/$1"),

    // Other
    TXT("_github-challenge-kongkowitpku-org", "b953fee805")
);
