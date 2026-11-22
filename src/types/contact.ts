export interface WhatsAppContact {
  phone: string;
  url: string;
  label?: string;
  actionLabel?: string;
}

export interface ContactInfo {
  email: string;
  introduction: string;
  whatsapp?: WhatsAppContact;
}
