# Implementation Plan: Direct Update & Full Restoration of Vendor.html and Order.html

## 1. Goal
Directly update and restore `Vendor.html` and `Order.html` using official file write tools so that all 4 primary application files (`Admin.html`, `Hub.html`, `Vendor.html`, and `Order.html`) are confirmed edited, completely synchronized, and verified in the build system.

---

## 2. Page-Specific Preservation & Enhancement

### A. `Vendor.html` (Full Restoration & Direct Update)
- **100% Content Retention**:
  - Security gate with vendor verification.
  - Financial summary cards (`bal-pending`, `bal-processing`, `bal-cleared`, `bal-total`).
  - 18% fee payout modal (`initiateWithdrawalModal`, `processFinalWithdrawal`) with 4-digit PIN verification.
  - Full Deploy to Marketplace form (`#view-upload`) supporting V1, V2, V3, and V4 delivery models.
  - Multi-type deliverable inputs (files, images, links, text credentials) with device file picker.
  - My Uploads grid (`#view-listings`) with edit DB, view on Hub, and copy PID.
  - Customer Orders (`#view-orders`) with physical dispatch modal (`#v3DeliveryModal`) and deliverable release modal (`#v2DeliveryModal`).
  - Profile & Settings (`#view-settings`): Profile bio, bank selector with bank addition request modal (`#requestBankModal`), and security PIN setup.
  - Withdrawal Ledger (`#view-history`): Active applications tracking, historical payouts table, duration calculation, and digital receipt downloads (JPG and PDF).
  - Buyer Communications (`#view-chats`): Full WhatsApp clone chat UI with buyer contacts list, real-time message stream, typing indicators, replies, image attachments, buyer reporting, and chat PDF export.
- **Critical Chat ID Synchronization**:
  - Ensure deterministic chat ID construction: `[uid1, uid2].sort().join('_') + '_' + orderId` so buyer and seller communicate on the exact same thread.

---

### B. `Order.html` (Full Restoration & Direct Update)
- **100% Content Retention**:
  - Sidebar navigation.
  - Active Orders (`#view-orders`): Status badges, order tracking, Direct Comm button.
  - Digital Asset Vault (`#view-purchases`): Decoupled display where items with deliverables appear immediately upon dispatch/release. Multi-type rendering (credentials with copy button, documents with download, links with visit, images with preview). Direct dispute button on vault cards.
  - Idempotent Delivery Confirmation (`#confirmDeliveryModal`): Guard against duplicate clicks, update status to `Received`, move order amount from vendor `processingBalance` to `withdrawableBalance` and increment `totalEarned`.
  - Payment Ledger (`#view-history`): Historical records and official branded PDF receipts (`downloadOrderReceipt`).
  - Activity Alerts (`#view-notifications`): Real-time network alerts.
  - Network Directory search modal (`#networkSearchModal`): Opponent node lookup and live listings.
  - Refund Dispute modal (`#refundModal`) and Report Seller modal (`#reportModal`).
  - Vendor Communications (`#view-chats`): Full WhatsApp clone chat UI synchronized with `Vendor.html` via `[uid1, uid2].sort().join('_') + '_' + orderId`, with real presence, typing indicators, replies, image attachments, and PDF export.

---

## 3. Verification & Compilation
- Run `compile_applet` and `lint_applet` to confirm zero syntax or build errors.
- Confirm both `Vendor.html` and `Order.html` are recorded as updated in the environment history.
