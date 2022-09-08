D(
    "kongkowitpku.xyz",
    REG_NONE,
    DnsProvider(DSP_CLOUDFLARE),

    // Root
    A("@", "192.0.2.1", CF_PROXY_ON),
    CNAME("www", "@", CF_PROXY_ON)
);
