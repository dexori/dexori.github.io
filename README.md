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

The page is based on the supplied resume and personal statement. It does not publish the original resume or personal-statement PDFs, phone number, private email, or messaging accounts. Selected technical reports and the explicitly supplied CaP presentation are included as public project resources. RoboMaster awards are team results. Tianjin University is listed as a prospective position planned for September 2027, not a current affiliation.

The VLA, LIBERO, and CaP results are explicitly limited to their reported evaluation settings. Projects without a public repository have no invented code links. The CaP comparison distinguishes local architecture adapters from official upstream systems. The MPC project distinguishes the original robot work from the extracted open-source modules and retains the observer/model caveats.

The Publications section, between Projects and Background, lists the paper title and RA-L journal supplied by the owner. Author order, acceptance status, publication year, and DOI have not been provided and are therefore omitted rather than guessed.

The CaP presentation is the supplied 16-page PDF, *Advantages of CaP in Dynamic Embodied Tasks*. The website copy is `assets/cap-dynamic-embodied-tasks.pdf`, with a normal filename; it is not a `file:///` link. Upload this new asset together with the updated HTML and stylesheet. The original desktop PDF is unchanged. The former CaP report is no longer linked.

The RL locomotion project currently covers simulation training only. It does not claim physical-robot deployment, real-robot evaluation, a flat-ground fall rate, or an 8 cm step success rate. The owner's latest clarification supersedes any broader claims in the earlier resume.

Project repository links are visible in the introduction. MPC and LIBERO code, reports, and available demo links are directly below their project titles rather than inside expandable notes. The CaP GitHub link is `https://github.com/dexori/cap-x`; it is labeled as a CaP-X experiment repository separately from the local dynamic-sorting report.

## Local checks

The current version was checked in Chromium at 1440, 1024, 768, 390, and 320px viewport widths. The page, stylesheet, script, images, PDF reports, and MP4 resource URL returned successfully from the local server. Navigation, expandable notes, English-only page text, and the visible simulation-only RL statement were checked. Project resource links remain outside expandable notes. No horizontal overflow or JavaScript runtime errors were observed.

Text enlarged to 200% was checked at 1280, 390, and 320px. Reading, navigation, and expandable notes also work with JavaScript disabled. The three GitHub repository URLs returned HTTP 200 during this check. Successful file responses do not independently validate the experiment results or guarantee media playback in every browser.

Local browser checks do not establish that GitHub Pages has deployed the same files. Repeat the relevant checks after editing.
