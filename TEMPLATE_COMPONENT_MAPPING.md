# TEMPLATE-TO-PAVANITY COMPONENT MAPPING
## Using index-v4 Template Components for Pavanity Global

**Date:** December 14, 2025
**Approach:** Use existing template components, change content only (minimal code changes)

---

## 🎯 STRATEGY OVERVIEW

Instead of creating custom components, we will:
1. ✅ Use **index-v4** as the base template
2. ✅ Use **NavbarFour** for header (modify menu items)
3. ✅ Use **FooterFour** for footer (simplify structure)
4. ✅ Reuse existing section layouts from index-v4
5. ✅ Only change: content, data, remove e-commerce elements

**Estimated Time:** 4-6 hours (vs 13-19 hours for custom build)

---

## 📋 SECTION-BY-SECTION MAPPING

### BASE TEMPLATE: index-v4

**File Location:** `/src/pages/index/index-four.tsx`

**Current Sections:**
1. NavbarFour ✅
2. Hero Section (lines 53-67) ✅
3. Services Section (lines 69-91) ✅
4. New Arrival Section (lines 93-153) ✅
5. Why Choose Us Section (lines 155-175) ✅
6. Best Seller Section (lines 177-181) ⚠️
7. Trending Section (lines 183-245) ⚠️
8. Partner Section (lines 247-263) ✅
9. Blog Section (lines 265-274) ❌ Remove
10. Newsletter Section (NewsTwo) 🔄 Modify
11. FooterFour ✅
12. ScrollToTop ✅

---

## 🗺️ PAVANITY SECTION MAPPING

### **SECTION 1: HERO SECTION**

**Template Source:** index-v4.tsx (lines 53-67)

**Current Code:**
```tsx
<div className="pt-40 sm:pt-52 lg:pt-[280px] pb-52 lg:pb-[350px] 2xl:pb-[450px]
     bg-overlay dark:before:bg-title dark:before:bg-opacity-70"
     style={{backgroundImage:`url(${bg})`}}>
    <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-[751px] mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug...">
                A Collection of World Top Class <span className="font-secondary text-primary">Furniture</span>
            </h2>
            <div>
                <Link to="/shop-v1" className="...">
                    <span>Go to Shop</span>
                    ...
                </Link>
            </div>
        </div>
    </div>
</div>
```

**Changes Needed:**
1. ✅ Replace background image with Pavanity hero image
2. ✅ Change H2 text to: "International Food & Ingredient Supplier"
3. ✅ Add H3 below H2: "Export Supply for Global Food Businesses"
4. ✅ Add description paragraph
5. ✅ Replace "Go to Shop" link with two buttons:
   - Primary: "Request RFQ" → /contact
   - Secondary: "View Product Range" → /product-divisions
6. ✅ Add trust indicators at bottom (3 badges)

**New Content:**
```tsx
<h2>International Food & Ingredient Supplier</h2>
<h3>Export Supply for Global Food Businesses</h3>
<p>Export-ready supply supporting structured B2B and HoReCa requirements across international markets.</p>
<div className="flex gap-4">
    <Link to="/contact" className="btn-primary">Request RFQ</Link>
    <Link to="/product-divisions" className="btn-secondary">View Product Range →</Link>
</div>
<div className="trust-indicators">
    <span>Export-Ready</span>
    <span>Quality & Compliance</span>
    <span>International Trade</span>
</div>
```

**Estimated Changes:** 10 minutes

---

### **SECTION 2: BUSINESS CONTINUITY (3 Cards)**

**Template Source:** index-v4.tsx (lines 155-175) - "Why Choose Us" section

**Current Code:**
```tsx
<div className="s-py-100 bg-[#f5f5f5] dark:bg-dark-secondary">
    <div className="container">
        <div className="max-w-1366 mx-auto">
            <div className="mb-6 pb-4 md:pb-6 border-b border-bdr-clr dark:border-bdr-clr-drk">
                <h2>Why you Choose Us</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-[30px]">
                {featureOne.slice(0,4).map((item,index)=>{
                    return(
                        <div className="p-6 pb-0 rounded-[10px] relative">
                            <img src={item.image} className='size-12' />
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
</div>
```

**Changes Needed:**
1. ✅ Change heading to: "Business Continuity" or remove heading
2. ✅ Change grid from `lg:grid-cols-4` to `lg:grid-cols-3` (3 cards instead of 4)
3. ✅ Replace `featureOne.slice(0,4)` with `businessContinuity` (3 items)
4. ✅ Update icons (use simple icons)
5. ✅ Change content to:
   - **Card 1:** Supply Continuity
   - **Card 2:** Commercial Clarity
   - **Card 3:** Trade Readiness

**New Data in pavanity-data.ts:**
```typescript
export const businessContinuity = [
    {
        id: 1,
        title: "Supply Continuity",
        description: "Export supply structured to support recurring volumes, predictable schedules, and long-term planning.",
        icon: "supply-icon.svg"
    },
    {
        id: 2,
        title: "Commercial Clarity",
        description: "Business conducted with defined specifications, delivery terms, documentation standards, and market requirements.",
        icon: "commercial-icon.svg"
    },
    {
        id: 3,
        title: "Trade Readiness",
        description: "Export operations aligned with applicable food regulations, customs procedures, and destination compliance.",
        icon: "trade-icon.svg"
    }
];
```

**Estimated Changes:** 15 minutes

---

### **SECTION 3: PRODUCT DIVISIONS (6 Cards)**

**Template Source:** index-v4.tsx (lines 93-153) - "New Arrival" section

**Current Code:**
```tsx
<div className="s-py-100">
    <div className="container">
        <div className="max-w-1366 mx-auto">
            <div className="flex items-center justify-between gap-5 flex-wrap mb-6 pb-4 md:pb-6 border-b">
                <h2>New Arrival</h2>
                <Link to="/shop-v3">See All Collection</Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
                {productList.slice(0,4).map((item,index)=>{
                    return(
                        <div className="group">
                            <div className="relative overflow-hidden ...">
                                <img src={item.image} />
                                {/* E-commerce icons: Quick View, Add to Cart, Wishlist */}
                            </div>
                            <div className="mt-5 md:mt-7">
                                <h4>{item.price}</h4>
                                <h5>{item.name}</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
</div>
```

**Changes Needed:**
1. ✅ Change heading to: "Our Product Divisions" or "Export supply across core food and ingredient categories."
2. ✅ Remove "See All Collection" link (or keep as "View All Products")
3. ✅ Change grid from `xl:grid-cols-4` to `lg:grid-cols-3` (6 cards in 2 rows)
4. ✅ Replace `productList.slice(0,4)` with `divisions` (6 items)
5. ✅ **REMOVE** all e-commerce icons (Quick View, Add to Cart, Wishlist, Star ratings)
6. ✅ Keep image hover effect (scale-110)
7. ✅ Replace price with tagline
8. ✅ Add "Explore Products →" link

**New Card Structure:**
```tsx
<div className="group">
    <div className="relative overflow-hidden">
        <img src={division.image} className="w-full transform duration-300 group-hover:scale-110" />
        {/* NO e-commerce icons */}
    </div>
    <div className="mt-5 md:mt-7">
        <h4 className="text-xl font-semibold">{division.name}</h4>
        <p className="mt-2">{division.tagline}</p>
        <Link to={`/product-divisions/${division.slug}`} className="mt-3 inline-flex items-center text-primary">
            Explore Products →
        </Link>
    </div>
</div>
```

**Use Existing Data:**
```typescript
// Already exists in pavanity-data.ts
export const divisions = [
    { id: 1, name: "Pavanity SpiceLine™", tagline: "Spices, Masalas & Seasonings", ... },
    { id: 2, name: "Pavanity NatureFoods™", tagline: "Superfoods, Seeds & Plant Ingredients", ... },
    { id: 3, name: "Pavanity AgroFoods™", tagline: "Dehydrated Vegetables & Ingredients", ... },
    { id: 4, name: "Pavanity NutSpread™", tagline: "Nut-Based Spreads", ... },
    { id: 5, name: "Pavanity SweetCane™", tagline: "Natural Sweeteners", ... },
    { id: 6, name: "Pavanity SnackFit™", tagline: "Roasted & Functional Snacks", ... }
];
```

**Estimated Changes:** 20 minutes

---

### **SECTION 4: COMMERCIAL SCOPE (4 Cards)**

**Template Source:** index-v4.tsx (lines 69-91) - Services Section

**Current Code:**
```tsx
<div className="container">
    <div className="max-w-1366 mx-auto">
        <div className="hv3-service-wrapper bg-white dark:bg-title rounded-[10px] -mt-16 relative z-10
             xl:flex xl:justify-between sm:gap-5 grid sm:grid-cols-2">
            {servicesData.map((item,index)=>{
                return(
                    <Link to="/product-category" className="group flex items-center gap-5 p-6">
                        <div className="w-14 md:w-[70px] h-14 p-[10px] md:h-[70px]
                             flex items-center justify-center border border-primary rounded-[10px]
                             group-hover:bg-primary duration-300">
                            <img src={item.image} className='block group-hover:hidden'/>
                            <img src={item.image2} className='hidden group-hover:block'/>
                        </div>
                        <div>
                            <h5>{item.title}</h5>
                            <p>{item.product}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
</div>
```

**Changes Needed:**
1. ✅ Move to separate section (not negative margin below hero)
2. ✅ Add section heading: "Commercial Scope"
3. ✅ Keep the 4-column grid layout (`xl:flex xl:justify-between`)
4. ✅ Replace `servicesData` with `commercialScope` (4 items)
5. ✅ Change link from `/product-category` to `#` (or remove link)
6. ✅ Update icons
7. ✅ Change content to:
   - **Card 1:** Export Supply
   - **Card 2:** Private Label
   - **Card 3:** Markets
   - **Card 4:** Compliance

**New Data in pavanity-data.ts:**
```typescript
export const commercialScope = [
    {
        id: 1,
        title: "Export Supply",
        description: "Supply of food ingredients and agri-based products for international B2B and HoReCa channels.",
        icon: "export-icon.svg"
    },
    {
        id: 2,
        title: "Private Label",
        description: "Export supply under buyer branding and specifications, subject to applicable market and regulatory requirements.",
        icon: "private-label-icon.svg"
    },
    {
        id: 3,
        title: "Markets",
        description: "Active participation across multiple international regions through established export channels.",
        icon: "markets-icon.svg"
    },
    {
        id: 4,
        title: "Compliance",
        description: "Trade conducted in alignment with applicable food safety and export regulations.",
        icon: "compliance-icon.svg"
    }
];
```

**Alternative Layout:** Use the "Why Choose Us" 4-column grid instead (lines 155-175)

**Estimated Changes:** 15 minutes

---

### **SECTION 5: GLOBAL MARKETS (5 Regions)**

**Template Source:** Option 1 - Use services section pattern (lines 69-91)
**Template Source:** Option 2 - Use partner carousel (lines 247-263)

**Recommendation:** Use a simplified version of services section OR create 5 simple badges

**New Simple Layout:**
```tsx
<div className="s-py-100 bg-[#f5f5f5] dark:bg-dark-secondary">
    <div className="container">
        <div className="max-w-1366 mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
                Serving food businesses across key global regions.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
                {globalMarkets.map((market) => (
                    <div className="px-8 py-4 bg-white dark:bg-title rounded-[10px] border border-primary">
                        <h4 className="text-lg font-medium">{market.region}</h4>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>
```

**Data (already exists):**
```typescript
export const globalMarkets = [
    { id: 1, region: "North America" },
    { id: 2, region: "Europe" },
    { id: 3, region: "Middle East" },
    { id: 4, region: "Asia" },
    { id: 5, region: "Africa" }
];
```

**Estimated Changes:** 10 minutes

---

### **SECTION 6: BUSINESS ENQUIRIES**

**Template Source:** news-two.tsx - Newsletter section

**Current Code:**
```tsx
<div className="container">
    <div className="bg-[#f5f5f5] dark:bg-dark-secondary py-10 px-5 md:px-7 lg:px-12 xl:px-24 xl:pb-24 sm:pt-0 max-w-1366 mx-auto">
        <div className="max-w-[990px] flex justify-between items-end gap-7">
            <div className="sm:max-w-md w-full xl:pt-20">
                <h2 className="font-bold leading-none dark:text-white">Newsletter</h2>
                <p className="mt-3 md:mt-5">Stay in the loop with exclusive offers and updates...</p>
                <div className="mt-4 lg:mt-6 sm:flex">
                    <input type="text" placeholder="Enter your email address"/>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="hidden sm:block">
                <img src={image} alt="Newsletter"/>
            </div>
        </div>
    </div>
</div>
```

**Changes Needed:**
1. ✅ Remove newsletter image
2. ✅ Center align the content
3. ✅ Change heading to: "For export supply discussions and commercial enquiries."
4. ✅ Remove email input and subscribe button
5. ✅ Add email display: "export@pavanity.com"
6. ✅ Add response time text: "Response within 24–48 working hours."
7. ✅ Add "Request RFQ" button

**New Layout:**
```tsx
<div className="container">
    <div className="bg-[#f5f5f5] dark:bg-dark-secondary py-16 px-5 md:px-7 lg:px-12 max-w-1366 mx-auto rounded-[10px]">
        <div className="max-w-[700px] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                For export supply discussions and commercial enquiries.
            </h2>
            <div className="mt-6">
                <a href="mailto:export@pavanity.com" className="text-xl md:text-2xl text-primary font-medium">
                    export@pavanity.com
                </a>
            </div>
            <p className="mt-4 text-lg">
                Response within 24–48 working hours.
            </p>
            <div className="mt-8">
                <Link to="/contact" className="btn-primary px-8 py-4 text-lg">
                    Request RFQ
                </Link>
            </div>
        </div>
    </div>
</div>
```

**Estimated Changes:** 10 minutes

---

### **SECTION 7: FOOTER**

**Template Source:** footer-four.tsx

**Current Structure:**
- Logo + description
- Sitemap links
- Others links
- Social Media links
- Shop links
- Customer Service links
- Copyright

**Changes Needed:**
1. ✅ Simplify to 3 columns only (or horizontal layout like your PavanityFooter)
2. ✅ Remove Social Media section
3. ✅ Remove Shop section
4. ✅ Remove detailed description
5. ✅ Replace links with Pavanity links
6. ✅ Add brand name heading: "PAVANITY GLOBAL"
7. ✅ Add tagline: "International Food & Ingredient Supplier"
8. ✅ Add motto section: "Pulse. Partner. Prevail."
9. ✅ Update copyright text

**Recommendation:** Use your already-created PavanityFooter.tsx (it's simpler and matches requirements better)

**OR Simplify FooterFour:**
```tsx
<div className="s-py-100-50">
    <div className="container">
        <div className="max-w-1366 mx-auto">
            {/* Brand Section */}
            <div className="text-center pb-12 border-b">
                <h3 className="text-3xl font-bold">PAVANITY GLOBAL</h3>
                <p className="text-lg mt-2">International Food & Ingredient Supplier</p>
            </div>

            {/* Quick Links */}
            <div className="py-8 text-center">
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {footerQuickLinks.map((link) => (
                        <Link to={link.path}>{link.name}</Link>
                    ))}
                </div>
            </div>

            {/* Motto */}
            <div className="text-center py-6 border-y">
                <p className="text-2xl font-semibold italic">Pulse. Partner. Prevail.</p>
            </div>

            {/* Copyright & Legal */}
            <div className="py-6 flex items-center justify-between">
                <p>© 2025 Pavanity Global. All rights reserved.</p>
                <div className="flex gap-6">
                    {footerLegalLinks.map((link) => (
                        <Link to={link.path}>{link.name}</Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
</div>
```

**Estimated Changes:** 15 minutes (OR use existing PavanityFooter.tsx)

---

## 🎨 NAVBAR MODIFICATIONS

### **Template Source:** navbar-four.tsx

**Current Menu:**
- Home (dropdown)
- Pages (mega menu)
- Shop (dropdown)
- Blog (dropdown)
- Contact

**Changes Needed:**
1. ✅ Replace "Home" dropdown with "Product Divisions" dropdown (6 items)
2. ✅ Remove "Pages" mega menu
3. ✅ Remove "Shop" dropdown
4. ✅ Remove "Blog" dropdown
5. ✅ Add single links:
   - Quality & Compliance
   - Private Label & OEM
   - Global Markets
   - About
6. ✅ Keep Contact
7. ✅ Add "Request RFQ" button on right side
8. ✅ Remove login link
9. ✅ Remove cart/search/wishlist icons (if any)

**New Menu Structure:**
```tsx
<ul className="text-lg leading-none text-title dark:text-white lg:flex lg:gap-[30px]">
    {/* Product Divisions Dropdown */}
    <li className="relative">
        <Link to="#">Product Divisions<span></span></Link>
        <ul className="sub-menu ...">
            <li><Link to="/product-divisions/spiceline">Pavanity SpiceLine™</Link></li>
            <li><Link to="/product-divisions/naturefoods">Pavanity NatureFoods™</Link></li>
            <li><Link to="/product-divisions/agrofoods">Pavanity AgroFoods™</Link></li>
            <li><Link to="/product-divisions/nutspread">Pavanity NutSpread™</Link></li>
            <li><Link to="/product-divisions/sweetcane">Pavanity SweetCane™</Link></li>
            <li><Link to="/product-divisions/snackfit">Pavanity SnackFit™</Link></li>
        </ul>
    </li>

    {/* Simple Links */}
    <li><Link to="/quality-compliance">Quality & Compliance</Link></li>
    <li><Link to="/private-label">Private Label & OEM</Link></li>
    <li><Link to="/global-markets">Global Markets</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>

    {/* Mobile RFQ Button */}
    <li className="lg:hidden">
        <Link to="/contact" className="btn-primary">Request RFQ</Link>
    </li>
</ul>
```

**Add RFQ Button (after menu, before mobile toggle):**
```tsx
<Link to="/contact" className="hidden lg:block btn-primary px-6 py-3">
    Request RFQ
</Link>
```

**Estimated Changes:** 20 minutes

---

## 📦 FILES TO MODIFY

### 1. Create New Home Page: `pavanity-home-v4.tsx`

**File:** `/src/pages/index/pavanity-home-v4.tsx`

**Action:** Copy `index-four.tsx` and modify sections as outlined above

**Steps:**
1. Copy index-four.tsx → pavanity-home-v4.tsx
2. Import pavanity-data.ts instead of template data
3. Modify each section according to mapping above
4. Remove BestSeller, Trending, BlogFour sections
5. Modify NewsTwo section for Business Enquiries
6. Keep ScrollToTop

---

### 2. Create New Navbar: `navbar-pavanity.tsx`

**File:** `/src/components/navbar/navbar-pavanity.tsx`

**Action:** Copy `navbar-four.tsx` and modify menu

**Steps:**
1. Copy navbar-four.tsx → navbar-pavanity.tsx
2. Replace menu structure as outlined above
3. Add RFQ button
4. Remove login/cart/search/wishlist

**Alternative:** Modify existing PavanityNavbar to match NavbarFour styling

---

### 3. Footer: Use Existing or Modify

**Option A (Recommended):** Use existing `pavanity-footer.tsx` (already matches requirements)

**Option B:** Create `footer-pavanity.tsx` by copying and simplifying footer-four.tsx

---

### 4. Update App.tsx Routing

**File:** `/src/App.tsx`

**Change:**
```tsx
// OLD
<Route path="/" element={<TestHome/>} />
<Route path="/full" element={<PavanityHome/>} />

// NEW
<Route path="/" element={<PavanityHomeV4/>} />
<Route path="/old-template" element={<IndexFour/>} />
```

---

### 5. Update pavanity-data.ts

**File:** `/src/data/pavanity-data.ts`

**Action:** Already exists! Just ensure all data is complete.

**Verify:**
- ✅ divisions (6 items)
- ✅ businessContinuity (3 items)
- ✅ commercialScope (4 items)
- ✅ globalMarkets (5 items)
- ✅ heroContent
- ✅ businessEnquiries
- ✅ footerQuickLinks
- ✅ footerLegalLinks
- ✅ footerContent

---

## ⏱️ TIME ESTIMATE

| Task | Time |
|------|------|
| Create pavanity-home-v4.tsx | 1.5 hours |
| Modify navbar-four.tsx | 30 minutes |
| Footer (use existing) | 0 minutes |
| Update routing | 10 minutes |
| Test & fix issues | 1 hour |
| Replace images | 30 minutes |
| Final polish | 30 minutes |
| **TOTAL** | **4-5 hours** |

---

## 🎨 STYLING NOTES

### Colors to Update

**Current Template Colors (Tailwind classes):**
- `text-primary` - Keep (used for accent blue)
- `bg-primary` - Keep (used for buttons)
- `border-primary` - Keep

**Update in tailwind.config.js:**
```javascript
colors: {
    primary: '#1E5B8C', // Pavanity accent blue (was template primary)
    // ... other colors
}
```

### Remove E-commerce Elements

**In Product Division Cards, remove:**
- ❌ Quick View button
- ❌ Add to Cart button
- ❌ Wishlist button
- ❌ Star ratings
- ❌ Price display

**Keep:**
- ✅ Image hover effect (scale-110)
- ✅ Card hover effects
- ✅ Smooth transitions

---

## 📋 CHECKLIST

### Phase 1: Setup (30 min)
- [ ] Copy index-four.tsx → pavanity-home-v4.tsx
- [ ] Copy navbar-four.tsx → navbar-pavanity.tsx
- [ ] Verify pavanity-data.ts is complete
- [ ] Update App.tsx routing

### Phase 2: Hero Section (10 min)
- [ ] Replace background image
- [ ] Change heading text
- [ ] Add subheading and description
- [ ] Replace CTA buttons
- [ ] Add trust indicators

### Phase 3: Business Continuity (15 min)
- [ ] Change section heading
- [ ] Update grid to 3 columns
- [ ] Replace data with businessContinuity
- [ ] Update icons
- [ ] Test responsive layout

### Phase 4: Product Divisions (20 min)
- [ ] Change section heading
- [ ] Update grid to 3 columns (6 cards, 2 rows)
- [ ] Replace data with divisions
- [ ] Remove e-commerce icons
- [ ] Add "Explore Products →" link
- [ ] Update images

### Phase 5: Commercial Scope (15 min)
- [ ] Move services section to separate position
- [ ] Add section heading
- [ ] Replace data with commercialScope
- [ ] Update icons
- [ ] Test 4-column layout

### Phase 6: Global Markets (10 min)
- [ ] Create simple badge layout
- [ ] Add section heading
- [ ] Map globalMarkets data
- [ ] Test responsive layout

### Phase 7: Business Enquiries (10 min)
- [ ] Modify NewsTwo component
- [ ] Remove newsletter input
- [ ] Add email display
- [ ] Add response time text
- [ ] Add RFQ button

### Phase 8: Navbar (20 min)
- [ ] Replace Home with Product Divisions dropdown
- [ ] Remove Pages, Shop, Blog menus
- [ ] Add single page links
- [ ] Add RFQ button
- [ ] Remove login/cart/search
- [ ] Test mobile menu

### Phase 9: Footer (0-15 min)
- [ ] Use existing PavanityFooter OR
- [ ] Simplify FooterFour

### Phase 10: Testing & Polish (1 hour)
- [ ] Test all links
- [ ] Test mobile responsive
- [ ] Replace all placeholder images
- [ ] Fix any styling issues
- [ ] Test dark mode (if keeping)
- [ ] Cross-browser test

### Phase 11: Remove Unused (30 min)
- [ ] Remove BestSeller section
- [ ] Remove Trending section
- [ ] Remove BlogFour section
- [ ] Remove Partner section (optional)
- [ ] Comment out unused imports

---

## 🚀 QUICK START STEPS

### Step 1: Copy Base File
```bash
cp src/pages/index/index-four.tsx src/pages/index/pavanity-home-v4.tsx
```

### Step 2: Copy Navbar
```bash
cp src/components/navbar/navbar-four.tsx src/components/navbar/navbar-pavanity.tsx
```

### Step 3: Update Imports in pavanity-home-v4.tsx
```tsx
// OLD
import NavbarFour from '../../components/navbar/navbar-four'

// NEW
import NavbarPavanity from '../../components/navbar/navbar-pavanity'
```

### Step 4: Update App.tsx
```tsx
import PavanityHomeV4 from './pages/index/pavanity-home-v4'

// In Routes:
<Route path="/" element={<PavanityHomeV4/>} />
```

### Step 5: Start Modifying Sections
Follow the section-by-section mapping above.

---

## ✅ SUCCESS CRITERIA

After completion, verify:
- [ ] Home page loads with all 7 sections
- [ ] Navbar shows Pavanity menu (no e-commerce)
- [ ] Footer shows Pavanity content
- [ ] No "Add to Cart" or e-commerce elements
- [ ] All links work (even if pages not created yet)
- [ ] Mobile responsive works
- [ ] Images load correctly
- [ ] Consistent B2B professional look
- [ ] Dark mode works (if keeping)

---

## 📞 NEXT STEPS AFTER DISCUSSION

**Please confirm:**
1. ✅ Approve using index-v4 template approach?
2. ✅ Approve section mapping (Hero → Business Continuity → Divisions → etc.)?
3. ✅ Approve navbar changes?
4. ✅ Approve footer (use existing PavanityFooter)?
5. ✅ Any specific styling preferences?
6. ✅ Keep or remove dark mode?
7. ✅ Ready to start Phase 1?

Once approved, I can start creating:
1. `pavanity-home-v4.tsx` (modified index-four)
2. `navbar-pavanity.tsx` (modified navbar-four)
3. Update routing
4. Begin section-by-section content replacement

---

**END OF MAPPING DOCUMENT**

*This approach will give you a professional, template-styled website with minimal custom code - just content changes!*
