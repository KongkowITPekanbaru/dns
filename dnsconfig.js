/*
   dnsconfig.js: dnscontrol configuration file for Novonine.
*/

// Providers
var REG_NONE = NewRegistrar("none"); // No registrar.
var DSP_CLOUDFLARE = NewDnsProvider("cloudflare", {
  manage_redirects: true,
  manage_workers: true,
});

// Meta settings for individual records.
var CF_PROXY_OFF = { cloudflare_proxy: "off" }; // Proxy disabled.
var CF_PROXY_ON = { cloudflare_proxy: "on" }; // Proxy enabled.

// Proxy default off for entire domain (the default):
var CF_PROXY_DEFAULT_OFF = { cloudflare_proxy_default: "off" };
// Proxy default on for entire domain:
var CF_PROXY_DEFAULT_ON = { cloudflare_proxy_default: "on" };

DEFAULTS(
  CF_PROXY_DEFAULT_OFF // turn proxy off when not specified otherwise
);

// Zones
require_glob("./zones/");
