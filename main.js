const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const wa = `https://wa.me/${KONTAK.wa}?text=${encodeURIComponent(KONTAK.pesan)}`;
const MENU = [["index.html","Beranda"],["tentang.html","Tentang"],["tugas.html","Tugas"],["karya.html","Karya"],["prestasi.html","Prestasi"]];
const page = document.body.dataset.page;

/* Navbar & footer dibuat di sini -> otomatis sama di semua halaman */
$("#nav").innerHTML = `<div class="wrap bar-nav"><a class="logo" href="index.html">Eron<span>.</span></a>
<button id="burger" aria-label="Menu">☰</button><nav id="menu">${MENU.map(m => `<a href="${m[0]}" class="${m[0].startsWith(page) ? "on" : ""}">${m[1]}</a>`).join("")}</nav></div>`;
$("#foot").innerHTML = `<div class="wrap"><h2>Yuk, ngobrol soal proyekmu</h2>
<p>© 2026 Earon Hasib Ahmad Aktafie · SMKN 3 Jepara</p><p>
<a class="btn" href="${wa}" target="_blank" rel="noopener">WhatsApp</a>
<a class="btn o" href="${KONTAK.ig}" target="_blank" rel="noopener">Instagram</a>
<a class="btn o" href="${KONTAK.tiktok}" target="_blank" rel="noopener">TikTok</a></p></div>`;
$$("a[data-wa]").forEach(a => { a.href = wa; a.target = "_blank"; });
$("#burger").onclick = () => $("#menu").classList.toggle("open");

/* Animasi muncul saat scroll */
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("on")), { threshold: .12 });
const reveal = () => $$(".rv:not(.on)").forEach(e => io.observe(e));

/* Transisi antar halaman */
document.addEventListener("click", e => {
  const a = e.target.closest("a[href$='.html']");
  if (a && !a.target) { e.preventDefault(); document.body.classList.add("out"); setTimeout(() => location.href = a.href, 250); }
  const lb = e.target.closest("[data-lb]");
  if (lb) { $("#lb").innerHTML = `<img src="${lb.dataset.lb}" alt="">`; $("#lb").classList.add("on"); }
  else if (e.target.closest("#lb")) $("#lb").classList.remove("on");
});
addEventListener("pageshow", () => document.body.classList.remove("out"));
document.body.insertAdjacentHTML("beforeend", `<div id="lb"></div>`);

/* Kartu karya (video embed / foto lightbox) */
const media = k => k.tipe == "youtube" ? `<iframe loading="lazy" src="https://www.youtube.com/embed/${k.src}" allowfullscreen></iframe>`
  : k.tipe == "drive" ? `<iframe loading="lazy" src="https://drive.google.com/file/d/${k.src}/preview" allowfullscreen></iframe>`
  : `<img loading="lazy" src="${k.src}" alt="${k.judul}" onerror="this.remove()">`;
const karyaCard = k => `<article class="card rv" ${k.tipe == "foto" ? `data-lb="${k.src}"` : ""}><div class="thumb">${media(k)}</div>
<div class="info"><span class="tag">${k.kategori}</span><h3>${k.judul}</h3><p class="muted">${k.desk}</p></div></article>`;
const imgCard = (t, s, img) => `<article class="card rv"><div class="thumb" data-lb="${img}"><img loading="lazy" src="${img}" alt="${t}" onerror="this.remove()"></div><div class="info"><h3>${t}</h3><p class="muted">${s || ""}</p></div></article>`;

const PAGES = {
  index() {
    $("#unggulan").innerHTML = KARYA.filter(k => k.unggulan).slice(0, 3).map(karyaCard).join("");
  },
  tentang() {
    $("#skills").innerHTML = SKILLS.map(s => `<div class="rv"><b>${s.n}</b> <small>${s.v}%</small><div class="bar"><i style="width:${s.v}%"></i></div></div>`).join("");
    $("#tools").innerHTML = TOOLS.map(t => `<span class="tag">${t}</span>`).join(" ");
    $("#pkl").innerHTML = PKL.map(p => `<div class="rv"><b>${p.tempat}</b> <small>${p.waktu}</small><p>${p.desk}</p></div>`).join("");
    $("#sertif").innerHTML = SERTIFIKAT.map(s => imgCard(s.judul, "", s.img)).join("");
  },
  tugas() {
    const box = $("#tugas"), q = $("#cari");
    const draw = () => {
      const s = q.value.toLowerCase();
      box.innerHTML = ["Umum", "Kejuruan", "Lainnya"].map(g => {
        const items = MAPEL.filter(m => m.grup == g).map(m => {
          const ts = TUGAS.filter(t => t.mapel == m.id);
          if (s && !m.nama.toLowerCase().includes(s) && !ts.some(t => t.judul.toLowerCase().includes(s))) return "";
          return `<details class="card mapel rv ${g == "Kejuruan" ? "kej" : ""}" ${s ? "open" : ""}><summary>${m.nama}<small>${ts.length} tugas</small></summary>
          ${ts.map(t => `<div class="tugas"><span>${t.judul}</span><b class="tag">${t.jenis}</b><a class="btn sm" href="${t.link}" target="_blank" rel="noopener">Lihat</a></div>`).join("") || `<p class="muted pad">Belum ada tugas.</p>`}</details>`;
        }).join("");
        return items ? `<h2>${g}</h2><div class="grid">${items}</div>` : "";
      }).join("") || "<p>Tidak ditemukan.</p>";
      reveal();
    };
    q.oninput = draw; draw();
  },
  karya() {
    const cats = ["Semua", "Video", "Foto", "Desain Grafis"];
    $("#filter").innerHTML = cats.map((c, i) => `<button class="btn o sm ${i ? "" : "act"}">${c}</button>`).join(" ");
    const draw = c => { $("#galeri").innerHTML = KARYA.filter(k => c == "Semua" || k.kategori == c).map(karyaCard).join(""); reveal(); };
    $$("#filter button").forEach(b => b.onclick = () => { $$("#filter button").forEach(x => x.classList.remove("act")); b.classList.add("act"); draw(b.textContent); });
    draw("Semua");
  },
  prestasi() {
    $("#prestasi").innerHTML = PRESTASI.map(p => imgCard(p.nama, `${p.tahun} · ${p.penyelenggara}`, p.img)).join("");
  }
};
PAGES[page] && PAGES[page]();
reveal();
