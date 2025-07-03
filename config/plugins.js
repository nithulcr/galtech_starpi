module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
       cloud_name: 'dweplysop', 
        api_key: '963881847929651', 
        api_secret: '<your_api_secret>'
      },
    },
  },
});
