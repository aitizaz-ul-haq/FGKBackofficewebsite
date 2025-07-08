const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs");

const links = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/careers", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/industries", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "monthly", priority: 0.9 },
  { url: "/services/accountingandreporting", changefreq: "monthly" },
  { url: "/services/datamanagement", changefreq: "monthly" },
  { url: "/services/humanresources", changefreq: "monthly" },
  { url: "/services/operationssupport", changefreq: "monthly" },
  { url: "/services/projectmanagement", changefreq: "monthly" },
  { url: "/services/webdevelopment", changefreq: "monthly" },
  { url: "/team", changefreq: "monthly", priority: 0.8 },
  { url: "/privacypolicy", changefreq: "yearly", priority: 0.6 },
];

const sitemap = new SitemapStream({ hostname: "https://www.fgkbackoffice.com" });

streamToPromise(Readable.from(links).pipe(sitemap)).then((data) => {
  fs.writeFileSync("public/sitemap.xml", data.toString());
  console.log("✅ Sitemap generated at public/sitemap.xml");
});
