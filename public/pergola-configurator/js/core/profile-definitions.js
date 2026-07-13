const millimetres = (value, fallback) => Math.round(Number.isFinite(Number(value)) ? Number(value) * 1000 : fallback);

export function resolveProfileDefinitions(definition) {
  if (Array.isArray(definition?.profiles) && definition.profiles.length) {
    return definition.profiles.map((profile) => ({ ...profile }));
  }

  const visual = definition?.visual || {};
  if (definition?.productType === "veranda") {
    const post = millimetres(visual.postSize, 130);
    const beam = millimetres(visual.beamHeight, 170);
    return [
      { id: "structural-post", label: "Słup frontowy", usage: "Podparcie pionowe frontu", aMm: post, bMm: post, shape: "rectangular", demoOnly: true },
      { id: "frame-beam", label: "Belka konstrukcyjna", usage: "Belka przyścienna i frontowa", aMm: post, bMm: beam, shape: "rectangular", demoOnly: true },
      { id: "roof-rafter", label: "Krokiew dachowa", usage: "Podparcie pola dachowego", aMm: millimetres(visual.rafterWidth, 80), bMm: millimetres(visual.rafterHeight, 122), shape: "rectangular", demoOnly: true },
      { id: "screen-support", label: "Profil pod kasetę ZIP", usage: "Opcjonalne podparcie kasety na boku", aMm: 50, bMm: 80, shape: "rectangular", demoOnly: true },
    ];
  }

  const post = millimetres(visual.postSize, 140);
  return [
    { id: "structural-post", label: "Słup konstrukcyjny", usage: "Podparcie pionowe konstrukcji", aMm: post, bMm: post, shape: "rectangular", demoOnly: true },
    { id: "frame-beam", label: "Belka ramy", usage: "Obwodowa rama dachu", aMm: post, bMm: millimetres(visual.beamHeight, 180), shape: "rectangular", demoOnly: true },
    { id: "roof-louvre", label: "Lamela dachowa", usage: "Ruchome wypełnienie dachu", aMm: millimetres(visual.louvrePitch, 210), bMm: millimetres(visual.louvreThickness, 15), shape: "louvre", demoOnly: true },
  ];
}

export function profileMetres(profiles, id, axis, fallback) {
  const profile = profiles?.find((item) => item.id === id);
  const millimetreValue = axis === "b" ? profile?.bMm : profile?.aMm;
  return Number.isFinite(Number(millimetreValue)) ? Number(millimetreValue) / 1000 : fallback;
}
