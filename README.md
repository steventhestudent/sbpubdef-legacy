### config/write-manifests.json
cdn values:
- gulp dev:  "cdnBasePath": "<!-- PATH TO CDN -->"
- dev:   "cdnBasePath": "http://win-gfmcj0b11it/sites/AppCatalog/ClientSideAssets1/sbpubdef-sol/1.0.0"
- production:   "cdnBasePath": "https://<tenant>.sharepoint.com/sites/AppCatalog/ClientSideAssets/sbpubdef-sol/1.0.0"

ClientSideAssets is a document library w/ folder sbpudef-sol w/ folder for each release (i.e.: folder 1.0.0 is all files in temp/deploy)

## sbpubdef-sol

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
