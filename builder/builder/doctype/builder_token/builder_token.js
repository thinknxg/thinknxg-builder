// Copyright (c) 2025, thinkNXG Technologies Pvt Ltd and contributors
// For license information, please see license.txt

frappe.ui.form.on("Builder Token", {
  refresh: function (frm) {
    // Only show is_standard field in developer mode
    frm.get_field("is_standard").toggle(frappe.boot.developer_mode);
  },
});
