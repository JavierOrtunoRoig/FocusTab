import fs from 'fs-extra';

const srcDir = './dist';
const destDir = './extension';

(async () => {
  try {
    // Copia el contenido de la carpeta dist a extension sin borrar el contenido existente
    await fs.copy(srcDir, destDir, { overwrite: true });
    console.log(`Archivos movidos de ${srcDir} a ${destDir}`);
  } catch (err) {
    console.error('Error al mover archivos:', err);
  }
})();
