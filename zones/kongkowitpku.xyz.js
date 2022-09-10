D(
    "kongkowitpku.xyz",
    REG_NONE,
    DnsProvider(DSP_CLOUDFLARE),

    // Root
    ALIAS("@", "kongkow-soon.pages.dev.", CF_PROXY_ON),
    A("www", "192.0.2.1", CF_PROXY_ON)
);
