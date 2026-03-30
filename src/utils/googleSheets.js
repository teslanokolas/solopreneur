// ============================================
// Google Sheets Integration via Apps Script
// ============================================

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby2t5DE6p21g2UbcvOSfi1M_33_Wy3cuQJvpY35_9nJA4irqQYBFYPjkug6_1crDnHl/exec";

/**
 * Gửi dữ liệu chatbot lead lên Google Sheets
 * @param {{ name?: string, phone?: string, email?: string, interest?: string, conversation?: string }} data
 */
export async function saveChatbotLead(data) {
  return sendToGoogleSheets({
    type: "chatbot",
    ...data,
  });
}

/**
 * Gửi dữ liệu contact form lên Google Sheets
 * @param {{ name: string, email: string, message: string }} data
 */
export async function saveContactForm(data) {
  return sendToGoogleSheets({
    type: "contact",
    ...data,
  });
}

/**
 * Gửi dữ liệu đến Google Apps Script Web App
 */
async function sendToGoogleSheets(data) {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Google Apps Script yêu cầu no-cors từ frontend
      headers: {
        "Content-Type": "text/plain", // no-cors chỉ cho phép text/plain
      },
      body: JSON.stringify(data),
    });

    // Với mode no-cors, response sẽ là opaque (không đọc được body)
    // Nhưng request vẫn được gửi thành công đến server
    return { status: "success", message: "Dữ liệu đã được gửi" };
  } catch (error) {
    console.error("Lỗi gửi dữ liệu đến Google Sheets:", error);
    return { status: "error", message: error.toString() };
  }
}
