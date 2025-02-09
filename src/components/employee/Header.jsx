const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-biru-denim text-putih-tulang">
      <div>
        <h1 className="text-lg font-semibold">Halo, Herlina!</h1>
        <p className="text-sm">Ajukan permohonan barang yang Anda butuhkan</p>
      </div>
      <img src="foto_employee" alt="Profil" className="w-12 h-12 rounded-full object-cover" />
    </div>
  );
};

export default Header;
