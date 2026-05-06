export function wixMedia(token: string, width = 1400, height = 900) {
  return `https://static.wixstatic.com/media/${token}/v1/fill/w_${width},h_${height},al_c,q_85,enc_avif,quality_auto/${token}`;
}
