# Hope Without Borders Foundation — website update

Updated October 17, 2026 (October 16 in Chicago). Downloadable, multi-page static website for the planned GitHub Pages workflow. No build step, package installation, or server-side code is required.

## Open the website

Unzip the archive into a new folder. Double-click `index.html` and keep `assets/` beside the HTML files. Do not replace only the HTML in an older copy; the new stylesheet and photos are required. No public site or DNS settings were changed.

## This update

- More direct copy throughout: what HWB does, why it exists, the current project, and how it contributes.
- A clearer hierarchy inspired by the supplied FAJR reference: Our work → Projects → Individual project, with breadcrumbs and a project facts panel.
- Photo-led pages using all four supplied photographs, with layouts for desktop and mobile.
- New sans-serif headings, a white background, forest-green branding, and restrained light-green accents.
- The approved first transparent logo remains in place.
- Jarabulus remains clearly labeled as preparing to open. HWB helps fund its opening through the operating partner.
- The center's nearly ten years of experience in Turkey is attributed to the center, not to HWB.
- Healthcare is identified as a mission focus; no unconfirmed healthcare projects are presented as active.
- Countries remain intended geographic focus. No team names, identities, or biographies were added.
- Donations and public contact remain pending.

## Pages

| File | Purpose |
| --- | --- |
| index.html | Home: mission summary and first project |
| our-work.html | Education and healthcare focus areas |
| projects.html | Project directory |
| jarabulus.html | Project overview, programs, HWB role, status, photographs |
| about.html | Mission, founding story, intended geography, nonprofit status |
| donate.html | Pending online giving and nonprofit details |
| contact.html | Get involved and pending contact details |
| privacy.html | Policy placeholder |
| 404.html | Page-not-found page |

## Edit the files

Edit page copy in its HTML file. Navigation and footer are included on every page, so shared changes should be made consistently. Use `assets/styles.css` for layout and colors. `assets/config.js` holds the public donation URL, email, logo path, and preview-banner setting. Keep URLs relative for compatibility with GitHub project paths and a custom domain.

Add a valid HTTPS hosted checkout link to `donationUrl` to activate the giving link. Set `contactEmail` to show clickable email links. No passwords, API keys, or private data belong in these public files.

## Photographs

The four originals are copied into `assets/photos/` without changing their visual content. CSS controls how they fit different page layouts. Captions describe visible activities only; dates, locations, program attribution, and a relationship to the new Jarabulus location have not been assumed. The project page explicitly states that these images do not document the opening in Jarabulus. No team identities are stated.

| Original | Website file | Main use |
| --- | --- | --- |
| IMG_8185.jpg | classroom-learning.jpg | Homepage and project cards |
| IMG_8184.jpg | classroom-activity.jpg | Project gallery and giving page |
| IMG_8244.jpg | classroom-wide.jpg | Project overview |
| IMG_8346.jpg | group-session.jpg | About, involvement, project gallery |

`PHOTO_NOTES.md` records the most useful next photo additions.

## Launch readiness

Donations, public contact and final privacy language are still pending. Confirm image captions and permission to publish. Review the pages on desktop and mobile, test the real hosted checkout, and then remove the preview banner (`draftMode: false`) and each page's `noindex, nofollow` metadata. Noindex is not private access control.

## Publish on GitHub Pages

These instructions follow GitHub’s current documentation as reviewed October 10, 2026. We can do the domain-specific steps together once your registrar and domain are known.

1. Sign in to GitHub. Create a public repository named `hope-without-borders` (or another name you choose). GitHub Pages works with public repositories on GitHub Free.
2. In that repository, choose **Add file → Upload files**. Upload the contents of this unzipped folder. `index.html` must be at the repository root, alongside the other HTML files and the `assets` folder. Do not upload just the ZIP or nest the whole project in an extra folder.
3. Include the supplied `.nojekyll` file. If it is hidden on your computer, create it directly with GitHub’s Add file option, using `.nojekyll` as the filename and leaving the content empty.
4. Commit the uploaded files to the `main` branch.
5. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
6. Wait for deployment and use **Visit site**. The usual project address is `https://YOUR-GITHUB-USERNAME.github.io/hope-without-borders/` (with your actual repository name).
7. Verify all pages and the mobile menu on the published address before connecting your domain. Online donations should remain unavailable until the checkout link is configured and tested.

### Connect your existing domain

1. Verify ownership of the domain in GitHub’s settings following its official guide.
2. Add your exact domain under the repository’s **Settings → Pages → Custom domain**, then save. Add the domain in GitHub before changing DNS records.
3. At your registrar, configure the appropriate DNS records. For `www`, the CNAME target is `YOUR-GITHUB-USERNAME.github.io` (no repository suffix). For the bare domain, use the A/ALIAS/ANAME records specified in GitHub’s official documentation linked below. We will choose the records after you provide the domain and registrar; do not alter email-related DNS records.
4. Wait for GitHub’s DNS check and certificate provisioning, then enable **Enforce HTTPS** when available.
5. Verify the bare-domain and `www` behavior and test the pages again.

The domain registration renewal and donation processing are separate from website hosting. No payment-provider pricing has been assumed in this starter.

### Official references

- Creating a Pages site: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Publishing source: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Custom domain: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- Verify ownership: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

## References and validation

Structure and design inspiration: https://www.fajr.org/programs/medical-missions, https://swbrelief.org, and https://aldar.ihrelief.org. No text, claims, photographs, or logos from those organizations were copied.

Page structure, local links/assets, JavaScript syntax, the default inactive giving state, and source-file consistency were checked. Browser rendering and mobile interaction could not be tested in this environment. The site remains unpublished.
