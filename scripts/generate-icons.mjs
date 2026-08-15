import sharp from 'sharp';
import toIco from 'to-ico';
import fs from 'fs';
import path from 'path';

const INPUT_LOGO = 'src/assets/images/logo.png';
const OUTPUT_DIR = 'public';

async function generateIcons() {
  console.log('🔧 Generando íconos desde:', INPUT_LOGO);
  
  // Verificar que el archivo de entrada existe
  if (!fs.existsSync(INPUT_LOGO)) {
    console.error('❌ No se encontró el archivo de entrada:', INPUT_LOGO);
    process.exit(1);
  }

  // Crear directorios de salida si no existen
  const imagesDir = path.join(OUTPUT_DIR, 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  try {
    // Leer la imagen original
    const logoBuffer = fs.readFileSync(INPUT_LOGO);
    const logo = sharp(logoBuffer);
    const metadata = await logo.metadata();
    
    console.log(`📐 Imagen original: ${metadata.width}x${metadata.height}, ${metadata.format}, ${metadata.hasAlpha ? 'con alpha' : 'sin alpha'}`);

    // 1. icon-192.png (192x192) - mantener transparencia
    console.log('📦 Generando public/images/icon-192.png...');
    await logo
      .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(imagesDir, 'icon-192.png'));

    // 2. icon-512.png (512x512) - mantener transparencia
    console.log('📦 Generando public/images/icon-512.png...');
    await logo
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(imagesDir, 'icon-512.png'));

    // 3. favicon-16x16.png (16x16) - mantener transparencia
    console.log('📦 Generando public/favicon-16x16.png...');
    await logo
      .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(OUTPUT_DIR, 'favicon-16x16.png'));

    // 4. favicon-32x32.png (32x32) - mantener transparencia
    console.log('📦 Generando public/favicon-32x32.png...');
    const favicon32Buffer = await logo
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toBuffer();
    await fs.promises.writeFile(path.join(OUTPUT_DIR, 'favicon-32x32.png'), favicon32Buffer);

    // 5. apple-touch-icon.png (180x180) - con fondo blanco y padding
    console.log('📦 Generando public/apple-touch-icon.png...');
    const padding = Math.round(180 * 0.12); // 12% de padding
    const logoSize = 180 - padding * 2;
    
    // Crear fondo blanco
    const whiteBackground = sharp({
      create: {
        width: 180,
        height: 180,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    }).png();

    // Redimensionar logo con padding
    const resizedLogo = await logo
      .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();

    // Componer logo sobre fondo blanco centrado
    await whiteBackground
      .composite([{
        input: resizedLogo,
        top: padding,
        left: padding
      }])
      .png()
      .toFile(path.join(OUTPUT_DIR, 'apple-touch-icon.png'));

    // 6. favicon.ico (usando 32x32 como base)
    console.log('📦 Generando public/favicon.ico...');
    // Crear un PNG específico para ICO (sin transparencia, 32x32)
    const icoPngBuffer = await logo
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png({ compressionLevel: 9 })
      .toBuffer();
    
    // Convertir PNG a ICO usando to-ico
    const icoBuffer = await toIco([icoPngBuffer]);
    await fs.promises.writeFile(path.join(OUTPUT_DIR, 'favicon.ico'), icoBuffer);

    console.log('\n✅ ¡Todos los íconos generados correctamente!');
    console.log('📁 Archivos creados:');
    console.log('   - public/images/icon-192.png (192x192)');
    console.log('   - public/images/icon-512.png (512x512)');
    console.log('   - public/favicon-16x16.png (16x16)');
    console.log('   - public/favicon-32x32.png (32x32)');
    console.log('   - public/apple-touch-icon.png (180x180, fondo blanco)');
    console.log('   - public/favicon.ico (32x32)');

  } catch (error) {
    console.error('❌ Error generando íconos:', error);
    process.exit(1);
  }
}

generateIcons();