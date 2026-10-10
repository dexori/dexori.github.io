# Dexuan Zheng — personal website

An English-language personal homepage for [dexori](https://github.com/dexori), covering robotics projects, embodied-AI experiments, education, and research interests.

Plain HTML, CSS, and JavaScript. No dependencies or build step.

## Preview

Open `index.html` in a browser. Alternatively, run this from the website directory:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8080`.

## Publish or update

Upload the **contents** of this directory to the root of the `dexori/dexori.github.io` repository. Do not upload the containing `dexori.github.io/` folder.

The repository root should look like this:

```text
index.html
style.css
script.js
README.md
.nojekyll
assets/
```

If the old version is already at the repository root, replace `index.html`, `style.css`, `script.js`, and `README.md`. Keep the existing robot photographs. If an earlier version uploaded `assets/portrait.jpg`, delete that file from the GitHub repository too; replacing the HTML does not remove previously uploaded assets.

In **Settings → Pages**, select **Deploy from a branch**, the branch containing these files (normally `main`), and **/(root)**. The published URL will be `https://dexori.github.io/`. Check the Pages workflow in Actions if publication fails.

`.nojekyll` is a hidden file. Use Ctrl+H in the Linux file manager to show it. When uploading the assets folder, preserve its name and directory structure.

Official instructions: [creating a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [configuring the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Edit

- `index.html`: biography, project descriptions, background, and interests.
- `style.css`: layout, typography, and mobile styles.
- `script.js`: navigation highlighting and footer year. Reading and navigation also work without JavaScript.
- `assets/`: robot photographs and selected project reports, results, and demo media. No portrait is included.
- `.nojekyll`: disables Jekyll processing.

The favicon is embedded in the HTML head. All page resources are local; there are no external fonts, analytics, forms, or tracking scripts.

## Content notes

The page is based on the supplied resume and personal statement. It does not publish the original PDFs, phone number, private email, or messaging accounts. RoboMaster awards are team results. Tianjin University is listed as a prospective position planned for September 2027, not a current affiliation.

The VLA, LIBERO, and CaP results are explicitly limited to their reported evaluation settings. Projects without a public repository have no invented code links. The CaP comparison distinguishes local architecture adapters from official upstream systems. The MPC project distinguishes the original robot work from the extracted open-source modules and retains the observer/model caveats. A publication without confirmed bibliographic details is not listed as a published paper.

## Local checks

The current version was checked in headless Chrome at 1440px and 390px viewport widths. The page, stylesheet, script, project image, reports, and demo video all returned successfully from the local server, and no horizontal overflow was observed in the checked layouts.

Local browser checks do not establish that GitHub Pages has deployed the same files. Repeat the relevant checks after editing.
