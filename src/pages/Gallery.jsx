import { useState, useEffect } from "react";
import "./Gallery.css";

const GALLERY_ITEMS = [
  //{ id: 1, title: "Grand Ballroom Reception", category: "Venues", src: "/gallery/venue-1.jpg" },
  { id: 1, title: "Main logo", category: "All", src: "./public/hetk.img.png" },
];

const CATEGORIES = ["All", "Venues", "Photography", "Catering", "Florists", "Music"];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Filter items based on category and search text
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Lightbox Navigation
  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  // Keyboard controls for lightbox (Escape, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  return (
    <div className="gallery-page">
      {/* Hero / Header */}
      <section className="gallery-hero">
        <div className="wrap">
          <span className="eyebrow">● Vendor Portfolio</span>
          <h1 className="gallery-title">Explore work across every category</h1>
          <p className="gallery-sub">
            Browse through real moments, venues, and setups created by top providers on Hetk.
          </p>
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="gallery-toolbar-section">
        <div className="wrap gallery-toolbar">
          <div className="category-pills">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`pill-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-search">
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Image Grid */}
      <section className="gallery-grid-section">
        <div className="wrap">
          {filteredItems.length === 0 ? (
            <div className="no-results">No images found matching your search.</div>
          ) : (
            <div className="gallery-grid">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="gallery-card"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      // Fallback placeholder if image fails to load
                      e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found";
                    }}
                  />
                  <div className="card-overlay">
                    <span className="card-cat">{item.category}</span>
                    <h3 className="card-title">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div className="lightbox-overlay" onClick={() => setSelectedImageIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImageIndex(null)}>
              ✕
            </button>
            <button className="lightbox-nav prev" onClick={handlePrev}>
              ‹
            </button>
            <div className="lightbox-stage">
              <img
                src={filteredItems[selectedImageIndex].src}
                alt={filteredItems[selectedImageIndex].title}
              />
              <div className="lightbox-caption">
                <h3>{filteredItems[selectedImageIndex].title}</h3>
                <span>{filteredItems[selectedImageIndex].category}</span>
              </div>
            </div>
            <button className="lightbox-nav next" onClick={handleNext}>
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;