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
    A("media", "54.251.57.162"),
    CNAME("assets", "kongkowitpku.github.io.", CF_PROXY_ON),
    CNAME("cms", "cname.vercel-dns.com."),
    CNAME("contribute", "cname.vercel-dns.com."),
    CNAME("github", "kongkow-invite.up.railway.app."),
    CNAME("link", "cname.dub.sh."),
    CNAME("status", "statuspage.betteruptime.com."),
    CNAME("umami", "c0a0d14a-0220-4841-bb42-86abf0d80389.cname.koyeb.app."),
    CNAME("wcumum", "cname.vercel-dns.com."),
    CNAME("wip", "cname.vercel-dns.com."),

    // Redirects
    CF_REDIRECT("on.kongkowitpku.xyz/*", "https://kongkowitpku.xyz/$1"),

    // Email routing
    MX("@", 50, "route3.mx.cloudflare.net."),
    MX("@", 66, "route2.mx.cloudflare.net."),
    MX("@", 63, "route1.mx.cloudflare.net."),
    TXT("@", "v=spf1 include:_spf.mx.cloudflare.net ~all"),

    // Other
    TXT("_github-challenge-kongkowitpku-org", "b953fee805"),
    TXT(
        "_vercel",
        "vc-domain-verify=link.kongkowitpku.xyz,9c3b9944e6a8ce77d5bc"
    )
);
