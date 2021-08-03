penjumlahan = (angka1, angka2) => {
  return `Hasil penjumlahan ${angka1} dan ${angka2} adalah ${angka1 + angka2}`;
};

pengurangan = (angka1, angka2) => {
  return `Hasil pengurangan ${angka1} dan ${angka2} adalah ${angka1 - angka2}`;
};

module.exports = {
  penjumlahan,
  pengurangan,
};
