# Comprehensive Multi-Page Implementation Plan: Hub.html, Order.html, Vendor.html & Admin.html

## 1. System Overview & Core Objectives
This plan outlines the end-to-end integration and targeted enhancements across the four interconnected pages (`Order.html`, `Vendor.html`, `Hub.html`, and `Admin.html`) while preserving 100% of the existing HTML architecture, Firestore data schema, styling, IDs, and event handlers.

---

## 2. Page-by-Page Detailed Plan

### A. `Hub.html` — Global Product Search & Discovery Hub
1. **URL Search Parameter Hydration**:
   - On page load (`DOMContentLoaded` / `window.onload`), inspect URL parameters for `query` or `search` (e.g., `hub.html?query=XYZ` or `hub.html?search=XYZ`).
   - If present, populate both `#topSearch` and `#mobileSearch` inputs with the decoded string.
   - Set `window.searchQuery` and trigger `window.renderGrid()` once `window.globalListings` are loaded from Firestore.
   - Support exact match by Title, Listing ID (`listingId` / `id`), Vendor ID (`vendorId`), Category, and Search Tags (`searchTags`).
   - Ensure refreshing `Hub.html` retains search query state from URL.
   - Provide clean "No items found" empty state if no match is found, retaining the query in the input.

### B. `Order.html` — Decoupled Vault, Financial Confirmation & Real-Time Comms
1. **Decoupled Vault Release (`#view-purchases`)**:
   - Deliverables appear in the Vault immediately upon vendor dispatch (`status === 'Delivered'` or `status === 'Received'`), regardless of whether buyer has confirmed receipt yet.
   - Multi-type deliverable rendering:
     - **Text / Credentials**: Display formatted text with real clipboard copy button (with textarea fallback for WebViews).
     - **Documents / Files**: Direct, functional download links supporting native WebViews and mobile app wrappers (data URIs or direct storage URLs).
     - **External URLs / Links**: Launch button (`target="_blank"`, `rel="noopener noreferrer"`).
     - **Image Proofs**: Click-to-preview and download.
2. **Independent Report / Dispute Action**:
   - Buyers can click "Report Release" directly from the Vault card if deliverables are defective, opening `#reportModal` and submitting to `reports` collection without falsely confirming receipt.
3. **Idempotent Financial Settlement (`executeDeliveryConfirmation`)**:
   - Verifies order is currently in `Delivered` status to prevent duplicate execution.
   - Atomically updates order to `Received`.
   - Reads vendor user doc (`users/{vendorId}`), decrements `processingBalance` by `order.amount`, increments `withdrawableBalance` and `totalEarned`.
   - Emits buyer and vendor notifications.
4. **WhatsApp-Style Real-Time Chat Engine**:
   - Consistent composite thread ID: `[currentUser.uid, vendorId].sort().join('_') + '_' + orderId`.
   - Real-time `onSnapshot` for messages, online presence indicator (`lastOnline < 120s`), user-scoped typing indicators (`typing_${uid}`), and vendor profile inspection modal with live product catalog.
5. **Cross-Page Search Support**:
   - Add/connect search inputs to redirect to `hub.html?query=` on Enter or click.
6. **Utility Fixes**:
   - Add robust `window.showToast` supporting success and error toast states.

### C. `Vendor.html` — Vendor Vault Delivery System, Reports, Appeals & Withdrawals
1. **Vendor Vault Delivery Management (V1 & V2 Listings)**:
   - Identify V1/V2 listings with or without Vault deliverables.
   - Support adding/editing deliverable items both during new listing creation and on existing listings.
   - Deliverable type selector:
     - **Text**: Password, Gmail, Phone number, Custom Name (with immediate auto-save to product doc).
     - **Document Upload**: Real device file picker supporting Image, PDF, VCF, and 10+ standard formats (DOC, DOCX, XLS, XLSX, CSV, PPT, PPTX, TXT, ZIP, RAR, JSON, XML). Convert/compress securely for storage.
     - **URL**: Direct file/app/web links.
     - **Product Reference Image**: Association with the specific listing.
   - **Access Control**: Keep Vault deliverable restricted until order is dispatched/delivered.
2. **Real-Time Withdrawal Ledger & Status Sync**:
   - Real `onSnapshot` query on `payout_requests` synced with Admin payout status transitions (`Pending` -> `Processing` -> `Completed`).
   - Accurate 3-stage visual badges and timeline duration calculation.
3. **Buyer Transaction & Money Alerts**:
   - Real-time listener for incoming orders and status updates triggering notifications.
4. **Disputes, Reports & Appeals Engine**:
   - Display real reports submitted by buyers against orders/products.
   - **Appeals Workflow**: Vendor can submit an appeal that simultaneously writes to Firestore (`reports` collection with `reason: "Vendor Dispute Appeal"`, status `"Under Investigation"`) and redirects to WhatsApp with a pre-filled, formatted message payload (`*ViraForce Dispute Appeal*\n...`).
5. **Global Product Search & Refresh**:
   - Functional refresh button pulling live Firestore data.
   - `window.viewOnHub` routes to `hub.html?query=` preserving product ID.

### D. `Admin.html` — Dispute Arbitration & Payout Settlement
1. **Reports & Appeals Queue (`#view-reports`)**:
   - Displays buyer reports and vendor appeals from `reports` collection in real-time.
   - Encrypted chat log viewer for dispute arbitration.
2. **3-Stage Payout Engine**:
   - Review pending payout requests, transition to `Processing`, and execute `Completed` transfers with receipt generation.
3. **Cross-Page Search**:
   - Links to Hub products via `hub.html?query=`.

---

## 3. Verification & Safety Guarantees
1. No schema or field names will be altered or renamed.
2. All changes will be made strictly one file at a time.
3. Real-time Firebase listeners will be preserved and properly subscribed.
4. All code will compile cleanly with `compile_applet`.
