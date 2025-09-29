// Types and interfaces for the registration system

export const FormFieldType = {
  TEXT: 'text',
  PASSWORD: 'password',
  EMAIL: 'email',
  BUTTON_INPUT: 'buttonInput',
  NUMBER: 'number',
  MOBILE_NUMBER: 'mobilenumber',
  TIME: 'time',
  DATE: 'date',
  DATETIME: 'datetime',
  IMAGE: 'image',
  FILE: 'file',
  TEXTAREA: 'textarea',
  HTML_EDITOR: 'htmleditor',
  SUBMIT: 'submit',
  BUTTON: 'button',
  LINK_BUTTON: 'linkbutton',
  WIDGETS: 'widges',
  CLOSE: 'close',
  CHECKBOX: 'checkbox',
  SELECT: 'select',
  MULTI_SELECT: 'multiSelect',
  INFO: 'info',
  HTML: 'html',
  LINE: 'line',
  TITLE: 'title',
  HIDDEN: 'hidden'
};

export const TicketStatus = {
  OPEN: 'Open',
  CLOSED: 'Closed',
  SOLD_OUT: 'Sold Out'
};

export const RegistrationStatus = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
  CHECKED_IN: 'checked_in'
};

export const PaymentStatus = {
  PENDING: 'pending',
  PAID: 'paid',
  FAILED: 'failed',
  REFUNDED: 'refunded'
};

export const AuthenticationType = {
  WHATSAPP: 'Whatsapp',
  MOBILE: 'Mobile',
  EMAIL: 'Email',
  SOCIAL_PLUGIN: 'Social Plugin',
  NONE: 'None'
};

export const RegistrationType = {
  SINGLE: 'Single',
  MULTIPLE: 'Multiple'
};

// Event interface
export const createEventInterface = () => ({
  _id: '',
  title: '',
  description: '',
  venue: '',
  eventType: '',
  ticketType: '',
  header: false,
  footer: false,
  startDate: null,
  startTime: null,
  endDate: null,
  endTime: null,
  isActive: true,
  showSubEventPage: false,
  subEventTemplate: '',
  franchise: '',
  logo: '',
  registrationMode: '',
  attendeeInfoCollection: '',
  banner: '',
  loginPage: '',
  homePage: '',
  lottieAnimation: '',
  bannerType: '',
  authenticationType: AuthenticationType.NONE,
  enableAuthentication: false,
  authenticationTypes: [],
  registrationType: RegistrationType.SINGLE,
  themeColor: '',
  themeTextColor: '',
  secondaryColor: '',
  secondaryTextColor: '',
  mobBanner: '',
  luckyDrawBackground: '',
  regBanner: '',
  subPageBanner: '',
  registrationCount: 0,
  authenticatedCount: 0,
  directRegistrationCount: 0,
  attendanceCount: 0,
  facebook: '',
  insta: '',
  xSocial: '',
  linkedin: '',
  youtube: '',
  whatsapp: '',
  sharechat: '',
  threads: '',
  userType: '',
  issubevent: false,
  parentEvent: '',
  whatsappMsg: '',
  slug: '',
  country: '',
  footerLogo: '',
  contactNumber: '',
  alternateContactNumber: '',
  emailId: '',
  email: '',
  contactEmail: '',
  website: '',
  OfficeAddress: '',
  corporateOfficeAddress: '',
  mobileMenuType: 'Bottom Tabbed',
  desktopMenuStyle: 'Theme 1',
  collectEmailId: false,
  collelctExternalReference: false,
  ExternalReferenceTitle: '',
  ExternalReferenceDescription: '',
  emailTemplate: '',
  whatsappTemplate: '',
  trackingCode: '',
  idCard: false,
  popupBanner: false,
  popupBannerImage: '',
  popupBannerLink: '',
  createdAt: new Date(),
  updatedAt: new Date()
});

// Ticket interface
export const createTicketInterface = () => ({
  _id: '',
  title: '',
  description: '',
  thumbnail: '',
  status: TicketStatus.OPEN,
  needsApproval: false,
  startDate: null,
  endDate: null,
  numberOfTicketsToBeSold: 0,
  showlimit: false,
  maximumBuying: 1,
  minimumBuying: 1,
  enablePricing: false,
  enableCoupenCode: false,
  paymentAmount: 0,
  enableTax: false,
  taxPercentage: 0,
  enableDiscount: false,
  discountTag: '',
  discountValidityType: '',
  discountType: '',
  discountValue: 0,
  discountEndDate: null,
  discountLimit: 0,
  enableDiscountCouponCode: false,
  event: '',
  type: 'Ticket',
  enableWhatsapp: false,
  enableEmail: false,
  onsuccessfullMessage: '',
  emailTemplate: '',
  whatsappTemplate: '',
  enableConfirmation: false,
  approvalWhatsapp: false,
  approvalEmail: false,
  approvalMessage: '',
  approvalEmailTemplate: '',
  approvalWhatsappTemplate: '',
  rejectionEmailTemplate: '',
  rejectionWhatsappTemplate: '',
  rejectionMessage: '',
  termsAndPolicy: false,
  termsAndPolicyMessage: '',
  participantType: '',
  participantTypeName: '',
  isMultipleEntry: false,
  multipleEntriLimit: 1,
  slug: '',
  saleStartDate: null,
  saleEndDate: null,
  bookingCount: 0,
  consent: false,
  attendanceCount: 0,
  consentLetter: '',
  attachBadgeEmail: false,
  attachBadgeWhatsapp: false,
  attachBadgeEmailOnApproval: false,
  attachBadgeWhatsappOnApproval: false,
  idCardBackground: '',
  rejectionEmail: false,
  rejectionWhatsapp: false,
  enableNumberOfTickets: false,
  createdAt: new Date(),
  updatedAt: new Date()
});

// FormField interface
export const createFormFieldInterface = () => ({
  _id: '',
  orderId: 0,
  minimum: null,
  maximum: null,
  conditionEnabled: false,
  conditionWhenField: '',
  conditionCheckMatch: '',
  conditionIfMatch: '',
  type: FormFieldType.TEXT,
  apiType: '',
  selectApi: '',
  placeholder: '',
  name: '',
  validation: '',
  dbcollection: '',
  showItem: '',
  default: '',
  tag: false,
  label: '',
  title: '',
  footnote: '',
  sublabel: '',
  content: '',
  required: false,
  view: true,
  add: true,
  update: true,
  filter: false,
  icon: '',
  minDate: null,
  maxDate: null,
  countryLoadingType: 'all',
  country: [],
  allowedFileTypes: [],
  customClass: '',
  additionalEnabled: false,
  options: []
});

// FormFieldOption interface
export const createFormFieldOptionInterface = () => ({
  value: '',
  label: ''
});

// Country interface
export const createCountryInterface = () => ({
  _id: '',
  title: '',
  dial_code: '',
  phoneCode: 0,
  continent: '',
  countryCode: '',
  currency: '',
  taxType: 'VAT',
  taxPercentage: 0,
  flag: '',
  language: '',
  PhoneNumberLength: 10,
  flagUrl: '',
  currencySymbol: '',
  isSovereign: false,
  isUNMember: false,
  createdAt: new Date(),
  updatedAt: new Date()
});

// Mobile Number interface
export const createMobileNumberInterface = () => ({
  country: '',
  number: '',
  numberLength: 0
});

// Ticket Registration interface
export const createTicketRegistrationInterface = () => ({
  _id: '',
  ticket: '',
  event: '',
  orderId: '',
  participantIndex: 0,
  isPrimaryContact: false,
  name: '',
  email: '',
  authenticationId: createMobileNumberInterface(),
  formData: {},
  status: RegistrationStatus.PENDING,
  authentication: '',
  paymentStatus: PaymentStatus.PENDING,
  processStatus: 'not_started',
  processError: '',
  approvalStatus: 'pending',
  approvalDate: null,
  approvalNotes: '',
  checkedIn: false,
  checkInDate: null,
  checkInMethod: 'qr_code',
  confirmationEmailSent: false,
  ticketEmailSent: false,
  reminderEmailSent: false,
  createdAt: new Date(),
  updatedAt: new Date(),
  registrationDate: new Date()
});

// Coupon Data interface
export const createCouponDataInterface = () => ({
  couponId: '',
  code: '',
  finalPriceAfterCoupon: 0,
  couponDiscountPercentage: 0
});

// API Response interface
export const createAPIResponseInterface = () => ({
  success: false,
  message: '',
  data: null,
  status: '',
  order: null,
  response: null,
  customMessage: '',
  registrationId: '',
  encryptedAuthId: ''
});

// Order Details interface
export const createOrderDetailsInterface = () => ({
  paymentGateway: '',
  checkoutUrl: '',
  razorpayOrderId: '',
  orderId: '',
  key: '',
  amount: 0,
  currency: '',
  reference: '',
  company: '',
  discountApplied: false,
  discountAmount: 0,
  subtotal: 0,
  total: 0,
  customerId: ''
});

// App Settings interface
export const createAppSettingsInterface = () => ({
  _id: '',
  primaryColour: '#007bff',
  primaryDarker: '#0056b3',
  primaryDark: '#0069d9',
  primaryBase: '#0d6efd',
  primaryLighter: '#5fa2ff',
  primaryLightest: '#cce5ff',
  event: '',
  franchise: '',
  DEFAULT_PRIMARY_COLOUR: '#007bff',
  DEFAULT_PRIMARY_BASE: '#0d6efd'
});
