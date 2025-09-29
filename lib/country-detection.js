// Country detection utilities

// Get user's country based on various methods
export const detectUserCountry = async () => {
  // Method 1: Try IP-based detection (free service)
  try {
    const response = await fetch('https://ipapi.co/json/', {
      timeout: 3000
    });
    if (response.ok) {
      const data = await response.json();
      if (data.country_code) {
        console.log('Country detected via IP:', data.country_code);
        return data.country_code.toUpperCase();
      }
    }
  } catch (error) {
    console.warn('IP-based country detection failed:', error);
  }

  // Method 2: Browser timezone mapping
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timezoneCountryMap = {
      'America/New_York': 'US',
      'America/Los_Angeles': 'US',
      'America/Chicago': 'US',
      'America/Denver': 'US',
      'America/Phoenix': 'US',
      'America/Anchorage': 'US',
      'America/Honolulu': 'US',
      'America/Toronto': 'CA',
      'America/Vancouver': 'CA',
      'America/Montreal': 'CA',
      'Europe/London': 'GB',
      'Europe/Paris': 'FR',
      'Europe/Berlin': 'DE',
      'Europe/Rome': 'IT',
      'Europe/Madrid': 'ES',
      'Europe/Amsterdam': 'NL',
      'Europe/Brussels': 'BE',
      'Europe/Zurich': 'CH',
      'Europe/Vienna': 'AT',
      'Europe/Stockholm': 'SE',
      'Europe/Oslo': 'NO',
      'Europe/Copenhagen': 'DK',
      'Europe/Helsinki': 'FI',
      'Europe/Dublin': 'IE',
      'Europe/Lisbon': 'PT',
      'Europe/Athens': 'GR',
      'Europe/Warsaw': 'PL',
      'Europe/Prague': 'CZ',
      'Europe/Budapest': 'HU',
      'Europe/Bucharest': 'RO',
      'Europe/Sofia': 'BG',
      'Europe/Zagreb': 'HR',
      'Europe/Ljubljana': 'SI',
      'Europe/Bratislava': 'SK',
      'Europe/Vilnius': 'LT',
      'Europe/Riga': 'LV',
      'Europe/Tallinn': 'EE',
      'Asia/Kolkata': 'IN',
      'Asia/Mumbai': 'IN',
      'Asia/Delhi': 'IN',
      'Asia/Chennai': 'IN',
      'Asia/Bangalore': 'IN',
      'Asia/Tokyo': 'JP',
      'Asia/Shanghai': 'CN',
      'Asia/Beijing': 'CN',
      'Asia/Hong_Kong': 'HK',
      'Asia/Seoul': 'KR',
      'Asia/Singapore': 'SG',
      'Asia/Bangkok': 'TH',
      'Asia/Manila': 'PH',
      'Asia/Jakarta': 'ID',
      'Asia/Kuala_Lumpur': 'MY',
      'Asia/Ho_Chi_Minh': 'VN',
      'Asia/Dubai': 'AE',
      'Asia/Riyadh': 'SA',
      'Asia/Tehran': 'IR',
      'Asia/Karachi': 'PK',
      'Asia/Dhaka': 'BD',
      'Asia/Colombo': 'LK',
      'Asia/Kathmandu': 'NP',
      'Asia/Kabul': 'AF',
      'Australia/Sydney': 'AU',
      'Australia/Melbourne': 'AU',
      'Australia/Brisbane': 'AU',
      'Australia/Perth': 'AU',
      'Australia/Adelaide': 'AU',
      'Pacific/Auckland': 'NZ',
      'America/Sao_Paulo': 'BR',
      'America/Mexico_City': 'MX',
      'America/Buenos_Aires': 'AR',
      'America/Lima': 'PE',
      'America/Bogota': 'CO',
      'America/Santiago': 'CL',
      'Africa/Cairo': 'EG',
      'Africa/Lagos': 'NG',
      'Africa/Johannesburg': 'ZA',
      'Africa/Nairobi': 'KE',
      'Africa/Casablanca': 'MA',
      'Europe/Moscow': 'RU',
      'Europe/Istanbul': 'TR',
    };
    
    if (timezoneCountryMap[timezone]) {
      console.log('Country detected via timezone:', timezoneCountryMap[timezone]);
      return timezoneCountryMap[timezone];
    }
  } catch (error) {
    console.warn('Timezone-based country detection failed:', error);
  }

  // Method 3: Browser locale
  try {
    const locale = navigator.language || navigator.userLanguage;
    const countryCode = locale.split('-')[1];
    if (countryCode && countryCode.length === 2) {
      console.log('Country detected via locale:', countryCode.toUpperCase());
      return countryCode.toUpperCase();
    }
  } catch (error) {
    console.warn('Locale-based country detection failed:', error);
  }

  // Default fallback
  console.log('Using default country: IN');
  return 'IN'; // Default to India
};

// Cache the detected country to avoid multiple API calls
let cachedCountry = null;

export const getCachedUserCountry = async () => {
  if (cachedCountry) {
    return cachedCountry;
  }
  
  cachedCountry = await detectUserCountry();
  return cachedCountry;
};

// Reset cached country (useful for testing)
export const resetCountryCache = () => {
  cachedCountry = null;
};
