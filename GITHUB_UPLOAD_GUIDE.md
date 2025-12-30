# Step-by-Step Guide: Upload to GitHub

## What to Upload to GitHub

Upload ONLY these files and folders from your `frontend` folder:

### ✅ FILES TO UPLOAD:

#### 1. **`package.json`** (file)
   - Location: `/frontend/package.json`
   - This file is REQUIRED - it tells Netlify what to install

#### 2. **`package-lock.json`** (file)
   - Location: `/frontend/package-lock.json`
   - This file is REQUIRED - locks dependency versions

#### 3. **`README.md`** (file - optional but recommended)
   - Location: `/frontend/README.md`

---

### ✅ FOLDERS TO UPLOAD:

#### 4. **`public/` folder** (entire folder)
   - Location: `/frontend/public/`
   - Upload the ENTIRE folder including:
     - `index.html`
     - `favicon.ico` (your new icon!)
     - `manifest.json`
     - `robots.txt`
     - `logo192.png`
     - `logo512.png`
     - `brand/` subfolder
     - `gallery/` subfolder (if it has files)
     - Any other files in this folder

#### 5. **`src/` folder** (entire folder)
   - Location: `/frontend/src/`
   - Upload the ENTIRE folder including:
     - `App.js`
     - `index.js`
     - `index.css`
     - `theme.js`
     - `assets/` subfolder (with all images including your new favicon.ico)
     - `components/` subfolder (all .jsx files)
     - `pages/` subfolder (all .jsx files)
     - `data/` subfolder (if it has files)
     - `seo/` subfolder (if it has files)
     - `styles/` subfolder (if it has files)

---

### ❌ DO NOT UPLOAD:

- `node_modules/` folder (too large, Netlify will install it)
- `build/` folder (Netlify will create this)
- `.DS_Store` files (macOS system files)
- `.git/` folder (if it exists)
- Any hidden files starting with `.` except `.gitignore` (if you want it)

---

## Step-by-Step Upload Instructions

### Method 1: GitHub Web Interface (Easiest)

1. **Go to GitHub.com** and sign in

2. **Create a new repository:**
   - Click the "+" icon (top right)
   - Click "New repository"
   - Name: `nochoice-beauty-salon` (or your preferred name)
   - Choose Public or Private
   - **DO NOT** check "Initialize with README"
   - Click "Create repository"

3. **Upload files:**
   - On the new repository page, click **"uploading an existing file"**
   - You'll see a drag-and-drop area

4. **Upload in this order:**

   **First, upload the files:**
   - Drag `package.json` into the upload area
   - Drag `package-lock.json` into the upload area
   - Drag `README.md` (if you want it)

   **Then, upload the folders:**
   - Drag the entire `public/` folder into the upload area
   - Drag the entire `src/` folder into the upload area

5. **Commit:**
   - Scroll down
   - Commit message: `Initial commit - no choice beauty salon website`
   - Click **"Commit changes"**

6. **Verify:**
   - You should see all your files in the repository
   - Check that `package.json` is there
   - Check that `public/index.html` is there
   - Check that `src/` folder with all subfolders is there

---

## Netlify Setup (After GitHub Upload)

1. **Go to netlify.com** and sign in

2. **Add new site:**
   - Click "Add new site" → "Import an existing project"
   - Click "GitHub" and authorize if needed
   - Select your repository: `nochoice-beauty-salon`

3. **Configure build settings:**
   - **Base directory:** Leave BLANK (or type `frontend` if your repo root is the frontend folder)
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
   - Click "Deploy site"

4. **Wait for deployment:**
   - Netlify will install dependencies and build
   - This takes 2-5 minutes
   - You'll see a success message when done

5. **Your site will be live!**
   - Netlify gives you a URL like: `your-site-name.netlify.app`
   - You can add a custom domain later

---

## Troubleshooting

### If Netlify build fails:

1. **Check the build logs:**
   - Go to your site on Netlify
   - Click "Deploys" tab
   - Click on the failed deploy
   - Read the error message

2. **Common issues:**
   - **Missing package.json:** Make sure you uploaded it
   - **Build command wrong:** Should be `npm run build`
   - **Publish directory wrong:** Should be `build`
   - **Missing dependencies:** Check that all files in `src/` are uploaded

3. **Verify your upload:**
   - Go to your GitHub repository
   - Make sure `package.json` exists
   - Make sure `src/` folder has all your components
   - Make sure `public/` folder has `index.html`

---

## Quick Checklist

Before uploading, verify:
- [ ] `package.json` exists in frontend folder
- [ ] `package-lock.json` exists in frontend folder
- [ ] `public/` folder has `index.html` and `favicon.ico`
- [ ] `src/` folder has all your components and pages
- [ ] You did NOT include `node_modules/` folder
- [ ] You did NOT include `build/` folder

After uploading to GitHub:
- [ ] All files visible in GitHub repository
- [ ] `package.json` is there
- [ ] `src/` folder is there with all subfolders
- [ ] `public/` folder is there

After Netlify setup:
- [ ] Build settings: `npm run build` and `build`
- [ ] Deployment succeeds
- [ ] Site is live and working

