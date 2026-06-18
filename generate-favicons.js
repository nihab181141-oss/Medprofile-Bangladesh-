import sharp from "sharp";
import fs from "fs";
import path from "path";

const squareSvgPath = "./src/assets/images/medprofile_logo_square.svg";
const horizontalSvgPath = "./src/assets/images/medprofile_logo_horizontal.svg";
const publicDir = "./public";

async function generateAssets() {
  try {
    console.log("🚀 Starting brand asset compilation with sharp...");

    // Make sure public directory exists
    if (!fs.existsSync(publicDir)){
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // 1. Generate favicon-16x16.png
    console.log("Generating 16x16 favicon...");
    await sharp(squareSvgPath)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, "favicon-16x16.png"));

    // 2. Generate favicon-32x32.png
    console.log("Generating 32x32 favicon...");
    await sharp(squareSvgPath)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, "favicon-32x32.png"));

    // 3. Generate apple-touch-icon.png
    console.log("Generating 180x180 apple-touch-icon...");
    await sharp(squareSvgPath)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, "apple-touch-icon.png"));

    // 4. Generate standard favicon.ico (32x32 PNG saved with .ico name for universal browser support)
    console.log("Generating favicon.ico...");
    await sharp(squareSvgPath)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, "favicon.ico"));

    // 5. Generate public/logo.png
    console.log("Generating standard logo.png (512x512)...");
    await sharp(squareSvgPath)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, "logo.png"));

    // 6. Generate premium Open Graph / Social image (1200x630 pixel canvas)
    // We create a gorgeous dark-navy base with teal gradients and place the horizontal/square logo in a safe zone
    console.log("Generating high-fidelity social og-image.png...");
    
    // Create an SVG-based template for the OG design
    const ogSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Background gradient -->
      <rect width="1200" height="630" fill="#011b3a" />
      
      <!-- Gradient ambient blobs -->
      <circle cx="950" cy="150" r="300" fill="#0c9c76" opacity="0.25" filter="blur(80px)" />
      <circle cx="150" cy="500" r="320" fill="#012b5c" opacity="0.6" filter="blur(100px)" />
      <circle cx="600" cy="315" r="250" fill="#2dd4bf" opacity="0.1" filter="blur(120px)" />

      <!-- Minimal clean network / grid accents in background -->
      <path d="M0 100 H1200 M0 200 H1200 M0 300 H1200 M0 400 H1200 M0 500 H1200" stroke="#ffffff" stroke-opacity="0.02" stroke-width="1" />
      <path d="M150 0 V630 M350 0 V630 M550 0 V630 M750 0 V630 M950 0 V630" stroke="#ffffff" stroke-opacity="0.02" stroke-width="1" />

      <!-- Centered content lockup -->
      <g transform="translate(350, 100) scale(1.1)">
        <!-- Beautiful square vector logo container -->
        <rect x="0" y="0" width="450" height="420" rx="24" fill="#ffffff" fill-opacity="0.95" />
        
        <!-- Embed SVG brand elements directly in the social template -->
        <g transform="translate(100, 25) scale(2.5)">
          <!-- Custom sharp 'M' -->
          <path d="M 5,85 L 5,22 L 21,33 L 28,62 L 35,22 L 51,33 L 51,85 L 38,85 L 28,48 L 18,85 Z" fill="#012b5c" />
          <!-- Custom elegant 'P' -->
          <path d="M 66,85 L 66,61 L 76,61 C 86.5,61 95,52.5 95,41.5 C 95,30.5 86.5,22 76,22 L 54,22 L 54,70 Q 54,85 66,85 Z" fill="#0c9c76" />
          <!-- White Medical Cross cutout -->
          <path d="M 75,29.5 H 81 V 38.5 H 90 V 44.5 H 81 V 53.5 H 75 V 44.5 H 66 V 38.5 H 75 Z" fill="white" />
        </g>

        <!-- MEDPROFILE typography -->
        <text x="225" y="295" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="40" letter-spacing="1">
          <tspan fill="#012b5c">MED</tspan><tspan fill="#0c9c76">PROFILE</tspan>
        </text>

        <!-- Underlines -->
        <line x1="60" y1="340" x2="120" y2="340" stroke="#0c9c76" stroke-width="2.5" />
        <text x="225" y="348" text-anchor="middle" fill="#012b5c" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="18" letter-spacing="8">BANGLADESH</text>
        <line x1="330" y1="340" x2="390" y2="340" stroke="#0c9c76" stroke-width="2.5" />

        <!-- Supporting agency tag line -->
        <text x="225" y="390" text-anchor="middle" fill="#64748b" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="12" letter-spacing="1.5 uppercase">BUILDING trusted DIGITAL IDENTITY for DOCTORS</text>
      </g>
    </svg>`;

    await sharp(Buffer.from(ogSvg))
      .png()
      .toFile(path.join(publicDir, "og-image.png"));

    console.log("✅ All branding assets compiled successfully inside /public !");
  } catch (error) {
    console.error("❌ Asset compilation error details:", error);
  }
}

generateAssets();
