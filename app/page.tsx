'use client';

import React, { useState } from 'react';

export default function Page() {
  const [activeTab, setActiveTab] = useState('about');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const mapSections = [
    { id: 'col', label: 'Columbarium', description: 'A respectful indoor space for urns.', icon: '🏛️', top: '40px', left: '100px' },
    { id: 'mau', label: 'Mausoleum Row', description: 'Private family estates and grand monuments.', icon: '🛖', top: '40px', right: '100px' },
    { id: 'apt', label: 'Apartment Style', description: 'Tiered burial units for efficient space.', icon: '🏢', bottom: '200px', left: '60px' },
    { id: 'grd', label: 'Ground Burial', description: 'Traditional lawn burials in a serene setting.', icon: '🌱', bottom: '250px', right: '120px' },
  ];

  const services = [
    { title: 'Burial Planning', icon: '⚰️', desc: 'Pre-need and at-need arrangement services.' },
    { title: 'Cremation', icon: '🔥', desc: 'Professional cremation and urn selection.' },
    { title: 'Maintenance', icon: '🧹', desc: 'Weekly lot cleaning and landscape care.' },
    { title: 'Flower Delivery', icon: '💐', desc: 'Fresh floral arrangements for your loved ones.' },
  ];

  return (
    <div style={{ 
      fontFamily: 'system-ui, sans-serif', 
      backgroundColor: '#f4f1ea', 
      minHeight: '100vh', 
      padding: '20px',
      color: '#333'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        backgroundColor: 'white', 
        borderRadius: '24px', 
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}>
        
        {/* Header Section */}
        <header style={{ display: 'flex', alignItems: 'center', padding: '20px 40px', gap: '20px' }}>
          <div style={{ flexShrink: 0 }}>
            <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Magallanes</h1>
            <p style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>Civil Cemetery</p>
          </div>
          <div style={{ flexGrow: 1, position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Search for Deceased Loved One (e.g., Name, Lot #)" 
              style={{ width: '100%', padding: '12px 20px 12px 45px', borderRadius: '30px', border: '1px solid #ddd', backgroundColor: '#f9f9f9', fontSize: '14px' }} 
            />
            <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }}>🔍</span>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{ width: '40px', height: '40px', background: '#e0e0e0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👤</div>
            <div style={{ fontSize: '20px' }}>🔔</div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav style={{ display: 'flex', backgroundColor: 'white', borderBottom: '4px solid #cc9933' }}>
          <div 
            onClick={() => setActiveTab('about')}
            style={{ ...navItemStyle, backgroundColor: activeTab === 'about' ? '#cc9933' : 'transparent', color: activeTab === 'about' ? 'white' : '#333' }}
          >
            ABOUT MAGALLANES ℹ️
          </div>
          <div 
            onClick={() => setActiveTab('services')}
            style={{ ...navItemStyle, backgroundColor: activeTab === 'services' ? '#cc9933' : 'transparent', color: activeTab === 'services' ? 'white' : '#333' }}
          >
            CEMETERY SERVICES
          </div>
          <div style={navItemStyle}>RECORDS</div>
          <div style={navItemStyle}>VISITOR INFO</div>
        </nav>

        <div style={{ display: 'flex', minHeight: '540px' }}>
          {/* Left Side: About Panel (Now Conditional) */}
          <aside style={{ width: '320px', padding: '25px', borderRight: '1px solid #eee' }}>
            {activeTab === 'about' && (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '15px', fontSize: '14px' }}>
                  <span>ℹ️ ABOUT MAGALLANES</span>
                </div>
                <div style={{ 
                  width: '100%', height: '180px', borderRadius: '12px',
                  backgroundImage: 'url("/background1.png")', backgroundSize: 'cover', backgroundPosition: 'center'
                }}></div>
                <div style={{ marginTop: '20px', fontSize: '14px', lineHeight: '1.6', color: '#555' }}>
                  <p>Magallanes Civil Cemetery is dedicated to providing a serene and respectful final resting place.</p>
                  <p style={{ marginTop: '10px' }}>Map data updated weekly.</p>
                  <p>Records are digital and searchable.</p>
                </div>
                <div style={{ textAlign: 'right', marginTop: '20px' }}>🍃</div>
              </>
            )}
            
            {activeTab === 'services' && (
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                <span>🛠️ OUR SERVICES</span>
                <p style={{ fontWeight: 'normal', color: '#666', marginTop: '10px' }}>Explore the professional care options we offer for your loved ones.</p>
              </div>
            )}
          </aside>

          {/* Right Side: Map or Services */}
          <main style={{ flexGrow: 1, position: 'relative', backgroundColor: '#f9f9f9' }}>
            
            {activeTab === 'about' ? (
              <div style={{ 
                width: '100%', height: '100%', 
                backgroundImage: 'url("/background2.png")', backgroundSize: 'cover', backgroundPosition: 'center' 
              }}>
                {mapSections.map((section) => (
                  <div 
                    key={section.id}
                    onMouseEnter={() => setHoveredSection(section.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                    style={{ ...pillStyle, top: section.top, left: section.left, right: section.right, bottom: section.bottom, zIndex: hoveredSection === section.id ? 10 : 1 }}
                  >
                    {section.label}
                    {hoveredSection === section.id && (
                      <div style={popoverStyle}>
                        <div style={{ fontSize: '24px', marginBottom: '5px' }}>{section.icon}</div>
                        <div style={{ fontWeight: 'bold' }}>{section.label}</div>
                        <div style={{ fontSize: '11px', color: '#666' }}>{section.description}</div>
                        <div style={arrowStyle}></div>
                      </div>
                    )}
                  </div>
                ))}

                <div style={{ 
                  position: 'absolute', bottom: '100px', right: '30px', backgroundColor: 'rgba(255,255,255,0.95)', 
                  padding: '15px', borderRadius: '12px', fontSize: '12px', maxWidth: '220px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #cc9933'
                }}>
                  <strong style={{ color: '#cc9933', display: 'block', marginBottom: '5px' }}>SECTION 3A:</strong>
                  <p style={{ margin: '0', lineHeight: '1.4' }}>Click here for a detailed burial list (0 records available).</p>
                  <div style={{ textAlign: 'right', marginTop: '5px' }}>🍃</div>
                </div>

                <div style={{ 
                  position: 'absolute', bottom: '20px', left: '20px', backgroundColor: 'white', 
                  border: '2px solid #333', borderRadius: '8px', padding: '10px 15px', display: 'flex', 
                  alignItems: 'center', gap: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' 
                }}>
                  <div style={{ fontSize: '24px' }}>⛩️</div>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Entrance & Map</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>Info Civil Cemetery</div>
                  </div>
                  <div style={{ border: '1px solid #eee', padding: '4px', fontSize: '10px', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
                    <div style={{ fontSize: '16px', lineHeight: '1' }}>🔳</div>
                    QR CODE
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ padding: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {services.map((s, i) => (
                  <div key={i} style={serviceCardStyle}>
                    <div style={{ fontSize: '32px', marginBottom: '10px' }}>{s.icon}</div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{s.title}</h3>
                    <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>{s.desc}</p>
                    <button style={serviceButtonStyle}>Inquire Now</button>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

// STYLES
const navItemStyle: React.CSSProperties = {
  flex: 1, padding: '15px', textAlign: 'center', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer', transition: '0.3s'
};

const pillStyle: React.CSSProperties = {
  position: 'absolute', backgroundColor: 'white', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer'
};

const popoverStyle: React.CSSProperties = {
  position: 'absolute', bottom: '140%', left: '50%', transform: 'translateX(-50%)', width: '160px', backgroundColor: 'white', padding: '12px', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', textAlign: 'center'
};

const arrowStyle: React.CSSProperties = {
  position: 'absolute', bottom: '-6px', left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: '12px', height: '12px', backgroundColor: 'white'
};

const serviceCardStyle: React.CSSProperties = {
  backgroundColor: 'white', padding: '25px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #eee', display: 'flex', flexDirection: 'column'
};

const serviceButtonStyle: React.CSSProperties = {
  marginTop: '15px', padding: '8px 15px', borderRadius: '20px', border: '1px solid #cc9933', backgroundColor: 'transparent', color: '#cc9933', fontWeight: 'bold', cursor: 'pointer', alignSelf: 'flex-start', fontSize: '12px'
};