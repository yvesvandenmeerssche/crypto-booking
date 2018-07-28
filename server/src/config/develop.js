module.exports = {
  BOOKING_POC_ADDRESS: '0x028C2ed488804A80e8355590575979397403078C',
  WHITELIST: '*',
  SERVER_PORT: 3001,
  STARTING_BLOCK: 3668521,
  MONGODB_URI: process.env.MONGODB_URI || 'localhost:27017/crypto-booking-test',
  MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
  MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
  MAILGUN_FROM_EMAIL: process.env.MAILGUN_FROM_EMAIL,
  MAILGUN_TO_EMAIL: process.env.MAILGUN_TO_EMAIL,
};
