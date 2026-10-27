#!/usr/bin/env bash
# Procesa el video del hero para la web de DINASTEL.
# Uso:  bash scripts/procesar-video-hero.sh "ruta/al/video-original.mp4" [segundo_inicio] [duracion]
# Requiere ffmpeg. Genera en public/assets/video/:
#   hero-1080.mp4   escritorio 1920x1080 (16:9), sin audio, H.264, faststart
#   hero-720.mp4    móvil 720x1280 (vertical 9:16), sin audio, H.264, faststart
#   hero-poster.webp  primer cuadro, se ve mientras carga el video
# Elaborado por Manuel Mina y propiedad de Dinastel SAS
set -euo pipefail
IN="${1:?Indique el video de entrada}"
SS="${2:-0}"      # segundo desde el que arranca el recorte
DUR="${3:-15}"    # duración del loop (12-20 s es lo ideal)
OUT="public/assets/video"
mkdir -p "$OUT"

ffmpeg -y -ss "$SS" -t "$DUR" -i "$IN" -an \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=30" \
  -c:v libx264 -preset veryfast -crf 27 -profile:v high -pix_fmt yuv420p -movflags +faststart \
  "$OUT/hero-1080.mp4"

ffmpeg -y -ss "$SS" -t "$DUR" -i "$IN" -an \
  -vf "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,fps=30" \
  -c:v libx264 -preset veryfast -crf 29 -profile:v main -pix_fmt yuv420p -movflags +faststart \
  "$OUT/hero-720.mp4"

ffmpeg -y -ss "$SS" -i "$IN" -frames:v 1 \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080" \
  -c:v libwebp -quality 75 "$OUT/hero-poster.webp"

ls -lh "$OUT"
echo "Listo. Si hero-1080.mp4 pesa más de 8 MB, suba el CRF (27 -> 29) o acorte la duración."
echo "Luego cambie heroVideo.enabled a true en src/data/site.ts"
