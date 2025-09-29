# sbpubdef-sol
This adds the webpart landing-redirect-webpart to the webparts in edit page. you can cancel redirection by hitting escape. it doesn't use roles yet.


# install
use nvm, since this uses very old node (v8)
1. ```nvm use 8```
2. ```npm install -g yo@2.0.6 gulp-cli@2.3.0 @microsoft/generator-sharepoint@1.5.1```
3. scaffold project: ```yo @microsoft/sharepoint``` or ```pnpm exec yo @microsoft/sharepoint```
4. you only need to run this once: ```gulp trust-dev-cert```

**Note:** you do not need to run step 3 (scaffold), since you will git clone this project instead of making it from scratch...
```git clone steventhestudent/sbpubdef-legacy.git```
```cd sbpubdef-legacy && npm install```

now you can: ```gulp serve --nobrowser``` to develop


## when ready to make a release, edit:

### config/write-manifests.json (NOTES)
cdn values:
- gulp: "cdnBasePath": "<!-- PATH TO CDN -->"
- dev (onprem): "cdnBasePath": "http://win-gfmcj0b11it/sites/AppCatalog/ClientSideAssets1/sbpubdef-sol/1.0.0"
- production: "cdnBasePath": "https://<tenant>.sharepoint.com/sites/AppCatalog/ClientSideAssets/sbpubdef-sol/1.0.0"

ClientSideAssets is a document library w/ folder sbpudef-sol w/ folder for each release (i.e.: folder 1.0.0 is all files in temp/deploy)

  
### make a release
```
gulp bundle --ship
gulp package-solution --ship
```
1. Now upload sharepoint/sbpubdef-sol.sppkg to /sites/AppCatalog
2. Upload temp/deploy to /sites/AppCatalog/ClientSideAssets/sbpubdef-sol/<version> (this is in lieu of using Microsoft 365 CDN / other CDN)
3. You need to add to Apps for SharePoint (/sites/appcatalog/AppCatalog/Forms/AllItems.aspx) and also add the app in Site Contents for your site/site collection.

Webparts part of the solution are now available in edit page!

&nbsp;

&nbsp;

**maybe unecessary note:**

you may have noticed ClientSideAssets1 in the dev cdn value... my dev server seemed to have a naming conflict I couldn't resolve by editing AppCatalog Site Contents. (note to self: i had to create AppCatalog sitecollection (in which i made document library: ClientSideAssets1)... but it's supposed to be a farm feature (so maybe that explains the conflict)?)

  



...
This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts

* dist/* - the bundled script, along with other resources

* deploy/* - all resources which should be uploaded to a CDN.
