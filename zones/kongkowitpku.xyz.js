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
    CNAME("github", "kongkow-invite.up.railway.app."),
    CNAME("status", "statuspage.betteruptime.com."),
    CNAME("umami", "cname.vercel-dns.com."),

    // Redirects
    CF_REDIRECT("on.kongkowitpku.xyz/*", "https://kongkowitpku.xyz/$1"),

    // Email routing
    MX('@', 50, 'route3.mx.cloudflare.net.'),
	MX('@', 66, 'route2.mx.cloudflare.net.'),
	MX('@', 63, 'route1.mx.cloudflare.net.'),
    TXT('@', 'v=spf1 include:_spf.mx.cloudflare.net ~all')

    // Other
    TXT("_github-challenge-kongkowitpku-org", "b953fee805")
);
