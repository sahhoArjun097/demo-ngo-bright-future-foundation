import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Expand, ImageIcon } from "lucide-react";
import { ABOUT_CONTENT } from "../../../constant/constants";
import type { GalleryItem } from "../../../constant/constants-types";

const Gallery = () => {
  const { gallery } = ABOUT_CONTENT;
  const [searchParams, setSearchParams] = useSearchParams();
  const validCategories = gallery.categories;

  const active = validCategories.includes(
    searchParams.get("category") as (typeof validCategories)[number],
  )
    ? searchParams.get("category")!
    : "All";

  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? gallery.images
        : gallery.images.filter((img) => img.category === active),
    [active, gallery.images],
  );

  const handleFilter = (category: string) => {
    setSelectedIdx(null);
    setSearchParams(category === "All" ? {} : { category });
  };

  const close = useCallback(() => setSelectedIdx(null), []);

  const prev = useCallback(() => {
    setSelectedIdx((idx) =>
      idx === null ? idx : (idx - 1 + filtered.length) % filtered.length,
    );
  }, [filtered.length]);

  const next = useCallback(() => {
    setSelectedIdx((idx) => (idx === null ? idx : (idx + 1) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (selectedIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedIdx, filtered.length, close, prev, next]);

  const selected: GalleryItem | undefined =
    selectedIdx !== null ? filtered[selectedIdx] : undefined;

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
          <span className="w-8 h-px bg-primary" />
          {gallery.label}
          <span className="w-8 h-px bg-primary" />
        </span>
        <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
          {gallery.title}
          <span className="text-transparent bg-clip-text bg-primary">
            {gallery.highlight}
          </span>
        </h2>
        <p className="mt-6 text-lg text-slate-500 max-w-3xl mx-auto">
          {gallery.description}
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {gallery.categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-5 py-2.5  cursor-pointer rounded-full text-sm font-semibold transition-all duration-300 border ${
              active === category
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((img, i) => {
          const isFeatured = i % 7 === 0;
          return (
            <button
              key={`${img.src}-${i}`}
              onClick={() => setSelectedIdx(i)}
              className={`group relative rounded-2xl overflow-hidden bg-slate-100 text-left shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 ${
                isFeatured ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  isFeatured ? "min-h-[280px]" : "aspect-[4/3]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 mb-3 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
                  {img.category}
                </span>
                <h3 className="text-lg font-bold text-white">{img.title}</h3>
                {img.description && (
                  <p className="text-sm text-white/80 line-clamp-2 mt-1">
                    {img.description}
                  </p>
                )}
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                <Expand className="w-5 h-5 text-primary" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 sm:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full max-h-[68vh] object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="inline-block px-3 py-1 mb-2 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
                {selected.category}
              </span>
              <h3 className="text-xl font-bold text-white">{selected.title}</h3>
              {selected.description && (
                <p className="text-sm text-white/70 mt-1">
                  {selected.description}
                </p>
              )}
            </div>
            <div className="hidden sm:flex absolute bottom-6 right-4 items-center gap-2 text-xs text-white/60">
              <ImageIcon className="w-4 h-4" />
              {(selectedIdx ?? 0) + 1} / {filtered.length}
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
