# dexori.github.io

郑德轩的个人主页。原生 HTML / CSS / JavaScript，不需要 Node、依赖安装或构建，直接用于 GitHub Pages。

## 先看页面

用浏览器打开 `index.html` 即可。也可以在这个文件夹里执行：

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

然后访问 `http://127.0.0.1:8080`。这是本地预览，不是发布到互联网。

## 发布到 dexori.github.io

1. 登录 **dexori** 的 GitHub 账号，新建公开仓库，名称必须是 **dexori.github.io**。如果同名仓库已经存在，先确认其中内容，再合并，别直接覆盖。
2. 将本文件夹中的文件上传到仓库根目录。`index.html` 必须直接位于根目录，不能再套一层 `dexori.github.io/`；`assets/` 目录保持原样。`.nojekyll` 是隐藏文件，使用 Git 提交时也应包含。
3. 在仓库的 **Settings → Pages** 中，将 Source 设为 **Deploy from a branch**，选择 **main** 分支和 **/(root)**，保存。若你的分支名称不同，选择实际上传文件的分支。
4. 等 GitHub Pages 部署完成，再访问 **https://dexori.github.io/**。首次发布可能需要几分钟；失败时看仓库 Actions 中的 Pages 部署日志。

官方说明：[创建 GitHub Pages 网站](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)、[配置发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

注意：`dexori/dexori` 是 GitHub 个人资料 README 仓库；`dexori/dexori.github.io` 是网站仓库，两者不同。网站中的项目代码链接指向现有的 `dexori/TinyMPC_WheelLeg`。

## 文件与修改入口

- `index.html`：个人介绍、项目、学校与战队经历、后续兴趣。直接修改里面的文字和链接。
- `style.css`：颜色、排版和手机布局。主色在文件开头的 `--blue`，背景在 `--paper`。
- `script.js`：手机导航、当前章节提示、年份更新。没有后端、统计或表单。
- `assets/`：从个人陈述中提取的三张实车照片。
- `.nojekyll`：告诉 GitHub Pages 直接发布静态文件。

所有页面资源都是相对路径，没有外部字体、CDN 或构建工具。

浏览器标签页的 `dx` 图标直接写在 `index.html` 的 `<head>` 里，不需要额外下载。

## 内容范围

页面根据提供的简历和个人陈述整理，不附带原始 PDF，不公开手机号、私人邮箱、微信、成绩排名或求职意向。照片仅使用原文中的实车照片。

RoboMaster 成绩写为团队成绩；天津大学经历保留“2027.09 拟入学”；没有将缺少作者、收录状态和 DOI 的论文条目写成已发表成果。VLA 数字明确标注小规模实验条件，未发布的项目不放虚构仓库入口。

MPC 与碰撞检测项目区分原工程实践和开源提取版，并保留使用边界说明。网站不是新的算法验证报告。

公开前建议你再确认：拟入学信息是否要展示、VLA 实验结果是否可以公开、实车照片是否适合公开。若不希望展示，直接删除对应 HTML 段落即可。

## 本次检查

已用 Chromium 检查 1440、1024、768、390、320px 宽度下的布局、图片加载、页内锚点、手机导航、Escape 关闭导航、项目详情展开和章节高亮，未发现横向溢出或 JavaScript 运行错误；另外检查了 200% 页面缩放。该检查是本地页面检查，不代表 GitHub Pages 已经发布，也未验证其他浏览器的全部表现。
